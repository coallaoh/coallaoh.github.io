// Function to render a single publication
function renderPublication(publication) {
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
    `<a href="javascript:void(0)" onclick="event.preventDefault(); event.stopPropagation(); toggleBibtex('${bibtexId}')">BibTeX</a>` : '';
  
  // Create the BibTeX content pre element separately
  const bibtexContentHTML = publication.bibtex ? 
    `<pre id="${bibtexId}" class="bibtex-content" style="display:none" onclick="selectAndCopyBibtex(event, '${bibtexId}')">${publication.bibtex}</pre>` : '';
  
  // Combine all links first (BibTeX link + other links)
  const combinedLinksHTML = bibtexLinkHTML + (linksHTML ? (bibtexLinkHTML ? ' / ' : '') + linksHTML : '');
  
  // Keep paper links visible when the description is collapsed
  const linksSection = combinedLinksHTML ? 
    `<br>\n${combinedLinksHTML}` : '';

  const legendHTML = (starUsed || daggerUsed) ? `<span style="font-size:12px;color:#666;">${starUsed ? '* co-first author' : ''}${starUsed && daggerUsed ? '; ' : ''}${daggerUsed ? '† corresponding author' : ''}</span>` : '';

  // Render workshops if they exist
  const workshopsHTML = (publication.workshops && publication.workshops.length > 0)
    ? '<br>\n<span style="font-size:13px;color:var(--workshop-text-color);">Also at: ' + publication.workshops.join('; ') + '</span>'
    : '';

  return `
    <details class="publication-card" id="${publication.id}">
      <summary>
        <img src="${publication.image}" loading="lazy" alt="${(publication.image_alt || publication.title).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}" class="publication-thumbnail">
        <span class="publication-info">
          ${publication.url ? `<a href="${publication.url}">` : '<span>'}
            <papertitle>${publication.title}</papertitle>
          ${publication.url ? '</a>' : '</span>'}
          <br>
          ${authorsHTML}.
          <br>
          <em>${publication.venue}</em>, ${publication.year}
          ${linksSection}
          <span class="publication-toggle">About this paper</span>
        </span>
      </summary>
      <div class="publication-description">
        ${allTagsHTML}
        <p>${publication.abstract}</p>
        ${legendHTML}
        ${workshopsHTML}
      </div>
    </details>
    ${bibtexContentHTML}
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

// Render ten papers at a time as the reader approaches the end of the list.
let filteredPublications = [];
let loadedPublications = 0;
let publicationObserver;
let publicationScrollQueued = false;
let publicationRailDragging = false;

function loadMorePublications(limit = loadedPublications + 10) {
  const container = document.getElementById('publications-container');
  const end = Math.min(limit, filteredPublications.length);
  while (loadedPublications < end) {
    const publication = filteredPublications[loadedPublications++];
    const yearId = `publications-${publication.year}`;
    let section = document.getElementById(yearId);
    if (!section) {
      section = document.createElement('section');
      section.id = yearId;
      section.className = 'publication-year';
      section.dataset.year = publication.year;
      section.setAttribute('aria-labelledby', `${yearId}-heading`);
      section.innerHTML = `<h4 id="${yearId}-heading">${publication.year}</h4>`;
      container.appendChild(section);
    }
    section.insertAdjacentHTML('beforeend', renderPublication(publication));
  }
  const sentinel = document.getElementById('publications-sentinel');
  publicationObserver.unobserve(sentinel);
  sentinel.hidden = loadedPublications === filteredPublications.length;
  if (!sentinel.hidden) publicationObserver.observe(sentinel);
  updatePublicationYearRail();
}

function setPublicationCommunities(communities) {
  filteredPublications = [...publicationsData]
    .sort((a, b) => b.year - a.year)
    .filter(publication => {
      if (!communities.length) return true;
      const themes = themesFor(publication.rtai_tags || []);
      if (!themes.length) themes.push(UNTAGGED);
      return themes.some(theme => communities.includes(theme));
    });
  loadedPublications = 0;
  document.getElementById('publications-container').replaceChildren();
  const rail = document.getElementById('publication-year-rail');
  const years = [...new Set(filteredPublications.map(publication => publication.year))];
  rail.innerHTML = years.map(year => {
    const count = filteredPublications.filter(publication => publication.year === year).length;
    const ticks = Array.from({ length: count }, (_, index) =>
      `<span class="year-paper-tick" style="top:${(index + 0.5) / count * 100}%"></span>`
    ).join('');
    return `<a href="#publications-${year}" data-year="${year}" data-count="${count}"
      style="--year-count:${count}" aria-label="${year}, ${count} papers">
      <span class="year-label">${year} <span class="year-count">(${count})</span></span>
      <span class="year-track" aria-hidden="true">${ticks}</span>
    </a>`;
  }).join('') + `<button class="year-scrubber" type="button" aria-label="Drag to browse publication years">
    <span class="year-scrubber-label"></span>
    <span class="year-scrubber-handle" aria-hidden="true"></span>
  </button>`;
  updatePublicationsHeading(filteredPublications.length, publicationsData.length);
  loadMorePublications();
  revealPublicationHash(false);
}

function revealPublicationHash(scroll = true) {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const index = filteredPublications.findIndex(publication =>
    publication.id === id || `publications-${publication.year}` === id
  );
  if (index < 0) return;
  if (index >= loadedPublications) loadMorePublications(index + 10);
  const target = document.getElementById(id);
  if (target.matches('details')) target.open = true;
  if (scroll) target.scrollIntoView({ block: 'start' });
}

function updatePublicationYearRail() {
  const container = document.getElementById('publications-container');
  const rail = document.getElementById('publication-year-rail');
  const bounds = container.getBoundingClientRect();
  rail.hidden = bounds.top > window.innerHeight / 2 || bounds.bottom < 0;
  const sections = [...container.querySelectorAll('.publication-year')];
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight / 3) current = section;
  }
  if (bounds.top < 0 && bounds.bottom <= window.innerHeight) current = sections[sections.length - 1];
  rail.querySelectorAll('a').forEach(link => {
    if (current && link.dataset.year === current.dataset.year) {
      link.setAttribute('aria-current', 'location');
      const cards = [...current.querySelectorAll('.publication-card')];
      let position = 0;
      cards.forEach((card, index) => {
        const cardBounds = card.getBoundingClientRect();
        if (cardBounds.top <= window.innerHeight / 3) {
          position = index + Math.min(1, (window.innerHeight / 3 - cardBounds.top) / cardBounds.height);
        }
      });
      let progress = position / Number(link.dataset.count);
      if (bounds.top < 0 && bounds.bottom <= window.innerHeight && loadedPublications === filteredPublications.length) progress = 1;
      link.style.setProperty('--year-progress', `${progress * 100}%`);
      const scrubber = rail.querySelector('.year-scrubber');
      const linkBounds = link.getBoundingClientRect();
      scrubber.style.top = `${linkBounds.top - rail.getBoundingClientRect().top + progress * linkBounds.height}px`;
      scrubber.querySelector('.year-scrubber-label').textContent = `${link.dataset.year} (${link.dataset.count})`;
      scrubber.setAttribute('aria-label', `${link.dataset.year}, ${link.dataset.count} papers. Drag to browse years, or use the arrow keys.`);
    } else {
      link.removeAttribute('aria-current');
      link.style.removeProperty('--year-progress');
    }
  });
}

function scrubPublicationRail(clientY) {
  const rail = document.getElementById('publication-year-rail');
  const links = [...rail.querySelectorAll('a')];
  const link = links.find(link => clientY < link.getBoundingClientRect().bottom) || links[links.length - 1];
  if (!link) return;
  const bounds = link.getBoundingClientRect();
  const fraction = Math.max(0, Math.min(1, (clientY - bounds.top) / bounds.height));
  const count = Number(link.dataset.count);
  const paperPosition = Math.min(count - 0.001, fraction * count);
  const index = filteredPublications.findIndex(publication => publication.year === link.dataset.year) + Math.floor(paperPosition);
  if (index >= loadedPublications) loadMorePublications(index + 10);
  const card = document.getElementById(filteredPublications[index].id);
  const cardBounds = card.getBoundingClientRect();
  window.scrollTo({ top: scrollY + cardBounds.top + (paperPosition % 1) * cardBounds.height - innerHeight / 3, behavior: 'instant' });
  updatePublicationYearRail();
}

function renderPublications() {
  const container = document.getElementById('publications-container');
  if (!container || typeof publicationsData === 'undefined') return;
  container.insertAdjacentHTML('afterend', `
    <div id="publications-sentinel" aria-hidden="true"></div>
    <nav id="publication-year-rail" aria-label="Publication years" hidden></nav>
  `);
  publicationObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) loadMorePublications();
  }, { rootMargin: '400px' });
  const rail = document.getElementById('publication-year-rail');
  rail.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('a') && !event.target.closest('.year-track')) return;
    event.preventDefault();
    publicationRailDragging = true;
    rail.classList.add('is-dragging');
    rail.setPointerCapture(event.pointerId);
    scrubPublicationRail(event.clientY);
  });
  rail.addEventListener('pointermove', event => {
    if (publicationRailDragging) scrubPublicationRail(event.clientY);
  });
  rail.addEventListener('lostpointercapture', () => {
    publicationRailDragging = false;
    rail.classList.remove('is-dragging');
  });
  rail.addEventListener('keydown', event => {
    if (!event.target.closest('.year-scrubber')) return;
    const current = rail.querySelector('a[aria-current]');
    const count = Number(current.dataset.count);
    const progress = parseFloat(current.style.getPropertyValue('--year-progress')) / 100;
    const index = filteredPublications.findIndex(publication => publication.year === current.dataset.year)
      + Math.min(count - 1, Math.floor(progress * count));
    let targetIndex;
    if (event.key === 'ArrowDown') targetIndex = Math.min(filteredPublications.length - 1, index + 1);
    else if (event.key === 'ArrowUp') targetIndex = Math.max(0, index - 1);
    else if (event.key === 'Home') targetIndex = 0;
    else if (event.key === 'End') targetIndex = filteredPublications.length - 1;
    else return;
    event.preventDefault();
    if (targetIndex >= loadedPublications) loadMorePublications(targetIndex + 10);
    const card = document.getElementById(filteredPublications[targetIndex].id);
    window.scrollTo({ top: scrollY + card.getBoundingClientRect().top - innerHeight / 3, behavior: 'instant' });
    updatePublicationYearRail();
  });
  rail.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    event.preventDefault();
    history.pushState(null, '', link.getAttribute('href'));
    revealPublicationHash();
  });
  window.addEventListener('hashchange', () => revealPublicationHash());
  window.addEventListener('popstate', () => revealPublicationHash());
  window.addEventListener('scroll', () => {
    if (publicationScrollQueued) return;
    publicationScrollQueued = true;
    requestAnimationFrame(() => {
      publicationScrollQueued = false;
      updatePublicationYearRail();
    });
  }, { passive: true });
  window.addEventListener('resize', updatePublicationYearRail);
  container.addEventListener('toggle', updatePublicationYearRail, true);
  setPublicationCommunities([]);
  requestAnimationFrame(() => revealPublicationHash());
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