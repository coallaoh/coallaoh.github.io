# Seong Joon Oh's Personal Website

## Managing Publications

Publications are now managed through a separate data file (`data/publications.js`) rather than directly editing HTML.

### How to Add a New Publication

1. Add the new publication entry to the `publicationsData` array in `data/publications.js`. You can:
   - Manually add a new entry in the JSON format
   - Use the helper script to generate the JSON format: `python3 scripts/convert_to_json.py > new_publication.json`
   - Then copy the output and add it to the array in `data/publications.js`

2. Add any associated files:
   - Publication image in `pictures/` (typically named `authorlastname_year_venue.png`)

3. The website will automatically load and display the publications when refreshed.

### Publication JSON Format

Each publication entry should follow this format:

```json
{
  "id": "uniqueid",
  "title": "Publication Title",
  "authors": [
    {"name": "Author Name", "url": "https://author-website.com", "isMe": false},
    {"name": "Seong Joon Oh", "url": "", "isMe": true}
  ],
  "venue": "Conference or Journal Name",
  "year": "2025",
  "url": "https://arxiv.org/abs/paper-url",
  "bibtex": `@inproceedings{uniqueid,
    title = {Publication Title},
    author = {Author, Name and Oh, Seong Joon},
    year = {2025},
    booktitle = {Conference Name},
  }`,
  "image": "pictures/paper-image.png",
  "links": [
    {"text": "Code", "url": "https://github.com/username/repo"},
    {"text": "Project", "url": "https://project-website.com"}
  ],
  "abstract": "Paper abstract goes here...",
  "tags": ["Tag1", "Tag2"]
}
```

### BibTeX Format

The BibTeX content is now embedded directly in the publication data. Use backticks (`) to define a multi-line string in JavaScript:

```javascript
"bibtex": `@inproceedings{uniqueid,
  title = {Publication Title},
  author = {Author, Name and Oh, Seong Joon},
  year = {2025},
  booktitle = {Conference Name},
}`
```

### Tag Colors

The following colors are used for tags:
- Privacy & Security: #b5ead7
- Evaluation: #e2c7e5
- Robustness: #ff9aa2
- Uncertainty: #ffdac1
- Explainability: #c7ceea
- Large-Scale ML: #C9D3D8

Edit the `getTagColor` function in `js/publications.js` to add or modify tag colors. 

## CV build and privacy (important for LLMs and collaborators)

- The CV source code and generator live in a private submodule: `cv-tools/`.
- Only the generated PDF `cv/cv.pdf` is kept in this public repository.
- Do not add LaTeX sources or generator scripts to this repository.

### Directory and privacy overview

- Public: root website files (`index.html`, `js/`, `pictures/`, `data/`, `cv/cv.pdf`)
- Private: `cv-tools/` submodule (private GitHub repo); contains LaTeX sources, Makefile, and generator

### How to update the CV (local workflow)

1. Ensure the submodule is present:
   ```bash
   git submodule update --init --recursive
   ```
2. Build privately inside `cv-tools/`:
   ```bash
   cd cv-tools
   # Optional: re-generate publications.tex from public data
   # (expects Node.js; reads ../data/publications.js and ../data/authors.js)
   if [ -f generate_publications.js ]; then node generate_publications.js; fi
   make  # produces cv.pdf via latexmk
   cd ..
   ```
3. Publish the artifact to the public repo:
   ```bash
   mkdir -p cv
   cp cv-tools/cv.pdf cv/cv.pdf
   git add cv/cv.pdf
   git commit -m "Update CV PDF"
   git push
   ```

### Branch policy

- Do not merge any branch that contains private CV sources into `master`.
- The `cv-tools/` submodule pointer may advance, but its contents remain private.