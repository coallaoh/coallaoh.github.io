// Function to render a single publication
async function renderPublication(publication) {
  // Check if tags exist, otherwise use empty array
  const tags = publication.tags || [];
  const tagsHTML = tags.map(tag => 
    `<span style="background-color:${getTagColor(tag)}">${tag}</span>`
  ).join('\n');
  
  // Render the research themes this paper belongs to
  let rtaiTagsHTML = '';
  if (publication.rtai_tags && publication.rtai_tags.length) {
    rtaiTagsHTML = themesFor(publication.rtai_tags).map(htmlThemeTag).join('\n');
  }
  
  // Combine regular tags and RTAI tags
  const allTagsHTML = tagsHTML + (rtaiTagsHTML ? '\n' + rtaiTagsHTML : '');
  
  // Create author lookup map if it doesn't exist
  if (!window.authorLookup) {
    window.authorLookup = new Map();
    if (typeof authorsData !== 'undefined' && authorsData.authors) {
      authorsData.authors.forEach(author => {
        window.authorLookup.set(author.id, author);
      });
    }
  }
  
  // Resolve author IDs to author objects and add optional markers
  const coFirstAuthorsSet = new Set((publication.co_first_authors || publication.coFirstAuthors || []));
  const correspondingAuthorsSet = new Set((publication.corresponding_authors || publication.co_corresponding_authors || publication.coCorrespondingAuthors || []));
  let starUsed = false;
  let daggerUsed = false;
  const authorsHTML = publication.authors.map(authorId => {
    const author = window.authorLookup.get(authorId);
    if (!author) {
      console.warn(`Author not found for ID: ${authorId}`);
      // Still allow marking even if author not found
      const isCoFirst = coFirstAuthorsSet.has(authorId);
      const isCorresponding = correspondingAuthorsSet.has(authorId);
      let suffix = '';
      if (isCoFirst) { starUsed = true; suffix += '<sup>*</sup>'; }
      if (isCorresponding) { daggerUsed = true; suffix += '<sup>†</sup>'; }
      return authorId + suffix;
    }
    
    let rendered = '';
    if (author.isMe) {
      rendered = `<strong>${author.name}</strong>`;
    } else if (author.url) {
      rendered = `<a href="${author.url}">${author.name}</a>`;
    } else {
      rendered = author.name;
    }
    const isCoFirst = coFirstAuthorsSet.has(authorId);
    const isCorresponding = correspondingAuthorsSet.has(authorId);
    if (isCoFirst) { starUsed = true; rendered += '<sup>*</sup>'; }
    if (isCorresponding) { daggerUsed = true; rendered += '<sup>†</sup>'; }
    return rendered;
  }).join(',\n');
  
  const linksHTML = publication.links.length > 0 ? 
    publication.links.map(link => `<a href="${link.url}">${link.text}</a>`).join(' / ') : '';
  
  // Create a BibTeX toggle link (without the pre element)
  const bibtexId = `bibtex-${publication.id}`;
  const bibtexLinkHTML = publication.bibtex ? 
    `<a href="javascript:void(0)" onclick="toggleBibtex('${bibtexId}')">BibTeX</a>` : '';
  
  // Create the BibTeX content pre element separately
  const bibtexContentHTML = publication.bibtex ? 
    `<pre id="${bibtexId}" class="bibtex-content" style="display:none" onclick="selectAndCopyBibtex(event, '${bibtexId}')">${publication.bibtex}</pre>` : '';
  
  // Combine all links first (BibTeX link + other links)
  const combinedLinksHTML = bibtexLinkHTML + (linksHTML ? (bibtexLinkHTML ? ' / ' : '') + linksHTML : '');
  
  // Create the links section with the links on one line and the BibTeX content below them
  const linksSection = combinedLinksHTML ? 
    `<br>\n${combinedLinksHTML}\n${bibtexContentHTML}` : '';

  const legendHTML = (starUsed || daggerUsed) ? `<span style="font-size:12px;color:#666;">${starUsed ? '* co-first author' : ''}${starUsed && daggerUsed ? '; ' : ''}${daggerUsed ? '† corresponding author' : ''}</span>` : '';

  // Render workshops if they exist
  const workshopsHTML = (publication.workshops && publication.workshops.length > 0)
    ? '<br>\n<span style="font-size:13px;color:var(--workshop-text-color);">Also at: ' + publication.workshops.join('; ') + '</span>'
    : '';

  return `
    <div class="row common-rows">
      <div class="col-xs-12 col-sm-3 left-column">
          <img src="${publication.image}" alt="${publication.id}" class="paper-images">
      </div>
      <div class="col-xs-12 col-sm-9 right-column">
        ${allTagsHTML}
        <br>
        <a href="${publication.url}" id="${publication.id}">
          <papertitle>${publication.title}
          </papertitle>
        </a>
        <br>
        ${authorsHTML}.
        <br>
        ${legendHTML ? legendHTML + '<br>' : ''}
        <em>${publication.venue}</em>, ${publication.year}
        ${workshopsHTML}
        ${linksSection}
        <p>${publication.abstract}
        </p>
      </div>
    </div>
  `;
}

// Function to toggle BibTeX visibility
function toggleBibtex(id) {
  const bibtexElement = document.getElementById(id);
  if (bibtexElement.style.display === 'none') {
    bibtexElement.style.display = 'block';
  } else {
    bibtexElement.style.display = 'none';
  }
}

// Function to select and copy BibTeX text
function selectAndCopyBibtex(event, id) {
  event.stopPropagation(); // Prevent the click from triggering parent elements
  
  const bibtexElement = document.getElementById(id);
  const range = document.createRange();
  range.selectNodeContents(bibtexElement);
  
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    // Copy the selected text to clipboard
    document.execCommand('copy');
    
    // Visual feedback for copy
    const originalBgColor = bibtexElement.style.backgroundColor;
    bibtexElement.style.backgroundColor = '#e8f5e9'; // Light green for success
    
    setTimeout(() => {
      bibtexElement.style.backgroundColor = originalBgColor;
    }, 300);
    
    console.log('BibTeX copied to clipboard');
  } catch (err) {
    console.error('Failed to copy BibTeX: ', err);
  }
}

// Function to get color for tag
function getTagColor(tag) {
  const tagColors = {
    'Privacy & Security': '#b5ead7',
    'Evaluation': '#e2c7e5',
    'Robustness': '#ff9aa2',
    'Uncertainty': '#ffdac1',
    'Explainability': '#c7ceea',
    'Large-Scale ML': '#C9D3D8'
  };
  
  return tagColors[tag] || '#cccccc';
}

// Function to render all publications
async function renderPublications() {
  const publicationsContainer = document.getElementById('publications-container');
  if (!publicationsContainer) return;
  
  // Publications data comes from data/publications.js (already loaded in the page)
  if (typeof publicationsData === 'undefined') {
    console.error('Publications data not found. Make sure data/publications.js is loaded before this script.');
    return;
  }
  
  // Sort publications by year (descending)
  const publications = [...publicationsData].sort((a, b) => b.year - a.year);
  
  // Using Promise.all correctly to await all async renderPublication calls
  const publicationsHTMLArray = await Promise.all(publications.map(pub => renderPublication(pub)));
  publicationsContainer.innerHTML = publicationsHTMLArray.join('\n');
  
  // Make the functions globally available
  window.toggleBibtex = toggleBibtex;
  window.selectAndCopyBibtex = selectAndCopyBibtex;
  
  // Filter publications based on selected communities if the filter function exists
  if (typeof filterPublicationsByTags === 'function') {
    filterPublicationsByTags();
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderPublications();
  
  // Add theme change listener for charts
  const toggleSwitch = document.querySelector('#checkbox');
  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', updateChartTheme);
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateChartTheme);
}); 