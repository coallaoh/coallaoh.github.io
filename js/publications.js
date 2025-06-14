// Function to render a single publication
async function renderPublication(publication) {
  // Check if tags exist, otherwise use empty array
  const tags = publication.tags || [];
  const tagsHTML = tags.map(tag =>
    `<span style="background-color:${getTagColor(tag)}">${tag}</span>`
  ).join('\n');

  // Render RTAITags if they exist
  let rtaiTagsHTML = '';
  if (publication.rtai_tags) {
    const rtaiTags = await Promise.all(publication.rtai_tags.map(tag => htmlCommunityTag(tag)));
    rtaiTagsHTML = rtaiTags.join('\n');
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

  // Resolve author IDs to author objects
  const authorsHTML = publication.authors.map(authorId => {
    const author = window.authorLookup.get(authorId);
    if (!author) {
      console.warn(`Author not found for ID: ${authorId}`);
      return authorId; // fallback to showing the ID
    }

    if (author.isMe) {
      return `<strong>${author.name}</strong>`;
    } else if (author.url) {
      return `<a href="${author.url}">${author.name}</a>`;
    } else {
      return author.name;
    }
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
        <em>${publication.venue}</em>, ${publication.year}
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

class SimpleHasher {
  constructor() {
    this._data = "";
  }

  update(data) {
    if (typeof data !== "string") {
      throw new TypeError("Only string input supported");
    }
    this._data += data;
    return this;
  }

  digest() {
    // manual SHA-256 fixed for this use case
    const buffer = new TextEncoder().encode(this._data);
    return crypto.subtle.digest("SHA-256", buffer)
      .then(digest => {
        const view = new DataView(digest);
        // read first 6 bytes manually
        const firstSix = (view.getUint8(0) * 2 ** 40) +
                         (view.getUint8(1) * 2 ** 32) +
                         (view.getUint8(2) * 2 ** 24) +
                         (view.getUint8(3) * 2 ** 16) +
                         (view.getUint8(4) * 2 ** 8) +
                         (view.getUint8(5));
        return firstSix;
      });
  }
}

function createHash(algorithm) {
  if (algorithm !== "sha256") {
    throw new Error("Only sha256 supported");
  }
  return new SimpleHasher();
}

async function hashAcronym(value) {
  const hasher = createHash("sha256").update(value ?? "");
  // digest() returns a Promise that resolves to a hex string
  const digest = await hasher.digest();

  // Convert the first 12 characters of the hex digest to an integer
  const hexDigest = digest.toString(16).padStart(12, '0');
  return parseInt(hexDigest.slice(0, 12), 16);
}

async function hashColor(acronym) {
  const value = await hashAcronym(acronym);
  const hue = value % 360;
  const saturation = 40 + (value % 40);
  const lightness = 40 + (40 - (value % 40));
  return hslToHex(hue, saturation, lightness);
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (60 <= h && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (120 <= h && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (180 <= h && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (240 <= h && h < 300) {
    [r, g, b] = [x, 0, c];
  } else if (300 <= h && h < 360) {
    [r, g, b] = [c, 0, x];
  }

  const toHex = (n) => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// async function getColor(category, level) {
//   const baseHSL = await stringToHSL(category);
//   return adjustLightness(baseHSL, level);
// }

async function htmlCommunityTag(acronym, putColor = true, additionalText = "") {
  const color = putColor ? await hashColor(acronym) : '#CCCCCC';
  return `<a href='https://researchtrend.ai/communities/${acronym}' style='text-decoration: none; color: white;'>
    <span class='inline-flex items-center rounded-full font-medium text-medium'
    style='background-color: ${color}; color: var(--community-tag-text-color); padding: 1px 4px; border-radius: 12px; font-family: Mukta, sans-serif;'>
    ${acronym}${additionalText}</span></a>`;
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
