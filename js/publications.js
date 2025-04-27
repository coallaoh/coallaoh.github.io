// Function to render a single publication
function renderPublication(publication) {
  // Check if tags exist, otherwise use empty array
  const tags = publication.tags || [];
  const tagsHTML = tags.map(tag => 
    `<span style="background-color:${getTagColor(tag)}">${tag}</span>`
  ).join('\n');
  
  // Render RTAITags if they exist
  const rtaiTagsHTML = publication.rtai_tags ? publication.rtai_tags.map(tag => 
    htmlCommunityTag(tag)
  ).join('\n') : '';
  
  // Combine regular tags and RTAI tags
  const allTagsHTML = tagsHTML + (rtaiTagsHTML ? '\n' + rtaiTagsHTML : '');
  
  const authorsHTML = publication.authors.map(author => {
    if (author.isPI) {
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

  digest(format) {
    if (format === "hex") {
      // For hex format, we'll create a simple hex representation
      const encoder = new TextEncoder();
      const data = encoder.encode(this._data);
      let hexString = "";
      
      for (let i = 0; i < data.length; i++) {
        const hex = (data[i] ^ (data[i] * 17 + 0xff)).toString(16).padStart(2, '0');
        hexString += hex;
      }
      
      // Ensure we have enough characters
      while (hexString.length < 64) {
        hexString += "0";
      }
      
      return hexString;
    } else {
      // For non-hex format (default), return a numeric value
      const encoder = new TextEncoder();
      const data = encoder.encode(this._data);
      let value = 0;
      
      for (let i = 0; i < data.length; i++) {
        value = ((value << 5) - value) + data[i];
        value = value & value; // Convert to 32bit integer
      }
      
      return value;
    }
  }
}

function createHash(algorithm) {
  if (algorithm !== "sha256") {
    throw new Error("Only sha256 supported");
  }
  return new SimpleHasher();
}

function hashAcronym(value) {
  const hasher = createHash("sha256").update(value ?? "");
  const hexDigest = hasher.digest("hex");
  return parseInt(hexDigest.slice(0, 12), 16);
}

// Function to convert string to HSL color
function stringToHSL(str) {
  const baseHue = 150; // green base
  const hash = hashAcronym(str);

  const hue = baseHue + Math.abs(hash % 100) - 50;
  return `hsl(${hue}, 50%, 50%)`;
}

// Function to adjust lightness level of HSL color
function adjustLightness(hsl, level) {
  const [hue, saturation, lightness] = hsl.match(/\d+/g)?.map(Number) ?? [
    0, 0, 0,
  ];
  const newLightness = Math.min(100, Math.max(0, 50 + (level - 1) * 10)); // 명도(Lightness) 조절

  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
}

// Function to get color from category and level
function getColor(category, level) {
  const baseHSL = stringToHSL(category);
  return adjustLightness(baseHSL, level);
}

// Use the new color function for community tags
function getHashColor(acronym) {
  if (!acronym) {
    return "#CCCCCC";
  }
  
  // Use our SimpleHasher to generate a hash value
  const hasher = createHash("sha256").update(acronym);
  const hexDigest = hasher.digest("hex");
  const value = parseInt(hexDigest.slice(0, 12), 16);
  
  // Calculate HSL values based on the hash
  const hue = Math.abs(value % 360);
  const saturation = 40 + (Math.abs(value) % 40);
  const lightness = 40 + (40 - (Math.abs(value) % 40));
  
  // Convert HSL to hex
  return hslToHex(hue, saturation, lightness);
}

// Helper function to convert HSL to hex
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  function toHex(n) {
    const hexValue = Math.round((n + m) * 255).toString(16);
    return hexValue.length === 2 ? hexValue : '0' + hexValue;
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Function to create HTML for community tag
function htmlCommunityTag(acronym, putColor = true, additionalText = "") {
  const color = putColor ? getHashColor(acronym) : '#CCCCCC';
  return `<a href='https://researchtrend.ai/communities/${acronym}' style='text-decoration: none; color: white;'>
    <span class='inline-flex items-center rounded-full font-medium text-medium text-white' 
    style='background-color: ${color}; padding: 1px 4px; border-radius: 12px; font-family: Mukta, sans-serif;'>
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
function renderPublications() {
  const publicationsContainer = document.getElementById('publications-container');
  if (!publicationsContainer) return;
  
  // Publications data comes from data/publications.js (already loaded in the page)
  if (typeof publicationsData === 'undefined') {
    console.error('Publications data not found. Make sure data/publications.js is loaded before this script.');
    return;
  }
  
  // Sort publications by year (descending)
  const publications = [...publicationsData].sort((a, b) => b.year - a.year);
  
  const publicationsHTML = publications.map(pub => renderPublication(pub)).join('\n');
  publicationsContainer.innerHTML = publicationsHTML;
  
  // Make the functions globally available
  window.toggleBibtex = toggleBibtex;
  window.selectAndCopyBibtex = selectAndCopyBibtex;
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderPublications); 