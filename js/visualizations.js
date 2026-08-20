// Global variables to store chart data and state
let topicChart = null;
let chartData = null;
let communityVisibility = {};
let communityColors = {};
let communityTotalAreas = {};
// Communities the reader has picked. Empty means no filter: everything shows.
let selectedCommunities = [];

// Series colours by theme slot, stepped separately for the light and dark
// surfaces. Slot 0 is the neutral bucket.
const themePalette = {
  0: { light: '#8e8898', dark: '#766f83' },
  1: { light: '#2a78d6', dark: '#3987e5' },
  2: { light: '#eb6834', dark: '#d95926' },
  3: { light: '#1baf7a', dark: '#199e70' },
  4: { light: '#eda100', dark: '#c98500' },
  5: { light: '#e87ba4', dark: '#d55181' },
  6: { light: '#008300', dark: '#008300' },
  7: { light: '#4a3aa7', dark: '#9085e9' }
};

const UNTAGGED = 'Untagged';

function isDarkMode() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ||
         (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches &&
          !document.documentElement.hasAttribute('data-theme'));
}

// Which theme a tag belongs to. Anything unmapped counts as untagged.
function themeOf(tag) {
  const theme = communityThemes.find(t => t.tags.includes(tag));
  return theme ? theme.name : UNTAGGED;
}

// Themes a paper belongs to, in the declared order
function themesFor(tags) {
  return communityThemes
    .filter(theme => tags.some(tag => theme.tags.includes(tag)))
    .map(theme => theme.name);
}

// A paper's theme chip: a colour dot the chart shares, plus the short label
function htmlThemeTag(name) {
  const theme = communityThemes.find(t => t.name === name);
  const dot = `<span class="community-chip-dot" style="background-color:${themeColor(name)};width:9px;height:9px;border-radius:2px;display:inline-block;"></span>`;
  return `<span data-community="${name}" class="community-chip" title="${name}"
    style="display:inline-flex;align-items:center;gap:5px;margin-right:10px;font-size:13px;">${dot}${theme.short}</span>`;
}

// Theme names carry spaces, so element ids need a slug
function themeId(name) {
  return 'toggle-' + name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

function themeColor(name) {
  const theme = communityThemes.find(t => t.name === name);
  const slot = themePalette[theme ? theme.slot : 0];
  return isDarkMode() ? slot.dark : slot.light;
}

// Function to generate topic trend visualization
async function generateTopicTrendsChart() {
  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.error('Chart.js not loaded');
    return;
  }

  // Check if publications data is available
  if (typeof publicationsData === 'undefined') {
    console.error('Publications data not found');
    return;
  }
  
  // Check if the theme table is available
  if (typeof communityThemes === 'undefined') {
    console.error('Community themes not found');
    console.log('Make sure data/communities.js is loaded');
    return;
  }

  // Get the canvas element
  const ctx = document.getElementById('topicTrendsChart');
  if (!ctx) {
    console.error('Chart canvas element not found');
    return;
  }

  // Process the data to organize by year and community
  const yearCommunityMap = processPublicationData(publicationsData);
  
  // Create and render the chart
  await createStackedBarChart(ctx, yearCommunityMap);
}

// Process publication data to extract year and community information
function processPublicationData(publications) {
  // Create a map to store years and community counts
  const yearCommunityMap = {};
  
  // Process each publication
  publications.forEach(pub => {
    const year = pub.year;
    
    // Initialize the year if not exists
    if (!yearCommunityMap[year]) {
      yearCommunityMap[year] = {};
    }
    
    // Handle papers with tags. Tags sharing a theme add up.
    if (pub.rtai_tags && pub.rtai_tags.length > 0) {
      const tagCount = pub.rtai_tags.length;
      // Calculate sum of weights (n, n-1, ..., 2, 1)
      const totalWeight = (tagCount * (tagCount + 1)) / 2;
      
      // Assign weighted counts to each theme based on tag position
      pub.rtai_tags.forEach((tag, index) => {
        // Weight is (n, n-1, ..., 2, 1) / sum based on position
        const weight = (tagCount - index) / totalWeight;
        const theme = themeOf(tag);
        
        if (!yearCommunityMap[year][theme]) {
          yearCommunityMap[year][theme] = 0;
        }
        yearCommunityMap[year][theme] += weight;
      });
    } else {
      // No tags at all
      if (!yearCommunityMap[year][UNTAGGED]) {
        yearCommunityMap[year][UNTAGGED] = 0;
      }
      yearCommunityMap[year][UNTAGGED] += 1;
    }
  });
  
  return yearCommunityMap;
}

// Create a stacked bar chart
async function createStackedBarChart(ctx, yearCommunityMap) {
  // Get unique years and communities
  const years = Object.keys(yearCommunityMap).sort();
  const allCommunities = new Set();
  
  // Collect all unique communities
  years.forEach(year => {
    Object.keys(yearCommunityMap[year]).forEach(community => {
      allCommunities.add(community);
    });
  });
  
  // Themes in their declared order, dropping any with no papers
  const communities = communityThemes
    .map(theme => theme.name)
    .filter(name => allCommunities.has(name));
  
  // Calculate total area for each theme
  communities.forEach(community => {
    communityTotalAreas[community] = years.reduce((total, year) => {
      return total + (yearCommunityMap[year][community] || 0);
    }, 0);
    communityColors[community] = themeColor(community);
  });
  
  // The legend follows the declared order; the stack runs the other way, so
  // the last theme - Untagged - sits at the foot of each bar.
  const areaSortedCommunities = [...communities];
  const reorderedCommunities = [...communities].reverse();
  
  // Initialize visibility for all communities to true
  reorderedCommunities.forEach(community => {
    communityVisibility[community] = true;
  });
  
  // Store the original data for filtering later
  chartData = {
    years,
    communities: reorderedCommunities,
    yearCommunityMap
  };
  
  // Prepare datasets for Chart.js
  const datasets = reorderedCommunities.map(community => {
    return {
      label: community,
      data: years.map(year => yearCommunityMap[year][community] || 0),
      backgroundColor: communityColors[community],
      borderColor: 'transparent',
      borderWidth: 0,
      community: community,
      // Add a custom property to store the original color for hover effects
      originalColor: communityColors[community]
    };
  });
  
  // Create the chart
  topicChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false
        },
        tooltip: {
          enabled: true,
          mode: 'nearest',
          intersect: true,
          callbacks: {
            title: function() {
              return '';
            },
            label: function(context) {
              const theme = context.dataset.label;
              const year = context.label;
              const here = (context.parsed.y || 0).toFixed(1);
              return `${theme}: ${here} in ${year}`;
            },
            labelColor: function(context) {
              return {
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              };
            },
            labelTextColor: function(context) {
              return '#ffffff';
            }
          },
          backgroundColor: '#333',
          titleColor: '#fff',
          titleFont: {
            weight: 'bold'
          },
          bodyColor: '#fff',
          bodyFont: {
            size: 14
          },
          padding: 6,
          displayColors: false,
          borderWidth: 0
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Publication Year'
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Papers'
          },
          ticks: {
            precision: 1
          }
        }
      },
      onClick: function(event, chartElement) {
        if (chartElement && chartElement.length > 0) {
          const datasetIndex = chartElement[0].datasetIndex;
          const community = this.data.datasets[datasetIndex].label;
          
          pickCommunity(community);
        }
      },
      onHover: (event, chartElement) => {
        if (!chartElement || chartElement.length === 0) {
          // Reset all datasets to their original colors or unselected colors
          topicChart.data.datasets.forEach(dataset => {
            dataset.backgroundColor = communityVisibility[dataset.community] ? 
              dataset.originalColor : getUnselectedColor();
          });
          topicChart.update();
          event.chart.canvas.style.cursor = 'default';
          return;
        }
        
        const datasetIndex = chartElement[0].datasetIndex;
        const community = topicChart.data.datasets[datasetIndex].label;
        
        // Update colors for all datasets
        topicChart.data.datasets.forEach(dataset => {
          if (dataset.community === community) {
            // Always make the hovered community brighter - even if it's deselected
            dataset.backgroundColor = adjustColorBrightness(dataset.originalColor, 20);
            event.chart.canvas.style.cursor = 'pointer';
          } else if (communityVisibility[dataset.community]) {
            // Turn other visible communities gray
            dataset.backgroundColor = getUnselectedColor();
          } else {
            // Keep unselected communities gray
            dataset.backgroundColor = getUnselectedColor();
          }
        });
        
        topicChart.update();
      }
    }
  });
  
  // Add a mouseleave event listener to the chart canvas to reset colors when mouse leaves the chart area
  ctx.addEventListener('mouseleave', () => {
    // Reset all datasets to their original colors or unselected colors based on visibility
    topicChart.data.datasets.forEach(dataset => {
      dataset.backgroundColor = communityVisibility[dataset.community] ? 
        dataset.originalColor : getUnselectedColor();
    });
    topicChart.update();
    ctx.style.cursor = 'default';
  });
  
  // Create custom community filter toggles with areas shown, using area-sorted communities
  await createCommunityToggles(areaSortedCommunities);
}

// Helper function to adjust color brightness
function adjustColorBrightness(color, percent) {
  // Handle hex colors
  if (color.startsWith('#')) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
  }
  
  // Handle rgb/rgba colors
  if (color.startsWith('rgb')) {
    const values = color.match(/\d+/g);
    if (values && values.length >= 3) {
      const amt = Math.round(2.55 * percent);
      const r = Math.min(255, Math.max(0, parseInt(values[0]) + amt));
      const g = Math.min(255, Math.max(0, parseInt(values[1]) + amt));
      const b = Math.min(255, Math.max(0, parseInt(values[2]) + amt));
      
      if (values.length === 4) {
        return `rgba(${r}, ${g}, ${b}, ${values[3]})`;
      }
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
  
  // Handle hsl/hsla colors
  if (color.startsWith('hsl')) {
    const values = color.match(/\d+/g);
    if (values && values.length >= 3) {
      const h = parseInt(values[0]);
      const s = parseInt(values[1]);
      const l = Math.min(100, Math.max(0, parseInt(values[2]) + percent));
      
      if (values.length === 4) {
        return `hsla(${h}, ${s}%, ${l}%, ${values[3]})`;
      }
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  }
  
  // Return original color if we can't parse it
  return color;
}

// Create custom community filter toggles
async function createCommunityToggles(communities) {
  const container = document.getElementById('communityFilters');
  if (!container) return;
  
  // Clear previous styling and any existing content
  container.style.display = 'block';
  container.style.maxWidth = '100%';
  container.innerHTML = '';
  
  // Create a scrollable wrapper for mobile
  const scrollWrapper = document.createElement('div');
  scrollWrapper.className = 'community-toggle-scroll-wrapper';
  scrollWrapper.style.cssText = 'width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;';
  
  // Create a table for structured layout
  const table = document.createElement('table');
  table.className = 'community-toggle-table';
  table.style.cssText = 'width:100%;border-collapse:collapse;min-width:600px;';
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  // Split communities into two columns
  const halfLength = Math.ceil(communities.length / 2);
  const firstHalf = communities.slice(0, halfLength);
  const secondHalf = communities.slice(halfLength);
  
  // Pad the second half if needed to make them equal length
  while (secondHalf.length < firstHalf.length) {
    secondHalf.push(null);
  }
  
  // Create rows with communities side by side
  for (let i = 0; i < firstHalf.length; i++) {
    const row = document.createElement('tr');
    row.style.padding = '0';
    
    // Process first community (left side)
    createCommunityCells(row, firstHalf[i], tbody);
    
    // Process second community (right side) if it exists
    if (i < secondHalf.length && secondHalf[i] !== null) {
      createCommunityCells(row, secondHalf[i], tbody);
    } else {
      // Add empty cells for padding if no second community
      row.appendChild(document.createElement('td'));
      row.appendChild(document.createElement('td'));
    }
    
    // Add the row to the table
    tbody.appendChild(row);
  }
  
  // Append the tbody to the table
  table.appendChild(tbody);
  
  // Append the table to the scroll wrapper and then to the container
  scrollWrapper.appendChild(table);
  container.appendChild(scrollWrapper);
  
  // Add responsive styles for mobile
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  // Apply mobile styles if needed
  function applyResponsiveStyles(isMobile) {
    if (isMobile) {
      scrollWrapper.style.cssText += 'width:100vw;margin-left:calc(-50vw + 50%);margin-right:calc(-50vw + 50%);padding-left:15px;padding-right:15px;box-sizing:border-box;';
    } else {
      scrollWrapper.style.cssText = 'width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;margin-left:0;margin-right:0;padding-left:0;padding-right:0;';
    }
  }
  
  // Initial application of styles
  applyResponsiveStyles(mediaQuery.matches);
  
  // Add listener for window resize
  mediaQuery.addEventListener('change', (e) => applyResponsiveStyles(e.matches));
  
  // Helper function to create cells for a community
  function createCommunityCells(row, community, tbody) {
    if (!community) return;
    
    const area = communityTotalAreas[community];
    
    // First cell: colour chip toggle
    const tagCell = document.createElement('td');
    tagCell.style.cssText = 'padding:1px 5px;vertical-align:middle;width:26px;';
    
    // Create a checkbox but hide it visually
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = themeId(community);
    checkbox.className = 'community-checkbox';
    checkbox.checked = true;
    checkbox.dataset.community = community;
    checkbox.style.display = 'none';
    
    const label = document.createElement('label');
    label.htmlFor = themeId(community);
    label.className = 'community-tag-label';
    label.style.cssText = 'cursor:pointer;display:inline-block;';
    
    const tagSpan = document.createElement('span');
    tagSpan.style.cssText = `background-color:${communityColors[community]};width:13px;height:13px;border-radius:3px;display:inline-block;`;
    
    // Assemble components
    label.appendChild(tagSpan);
    tagCell.appendChild(checkbox);
    tagCell.appendChild(label);
    row.appendChild(tagCell);
    
    // Paper count cell
    const countCell = document.createElement('td');
    countCell.style.cssText = 'padding:1px 5px;vertical-align:middle;width:30px;font-size:12px;color:var(--community-count-color);text-align:right;';
    countCell.textContent = area.toFixed(1);
    row.appendChild(countCell);
    
    // Theme name
    const nameCell = document.createElement('td');
    nameCell.style.cssText = 'padding:1px 15px 1px 5px;vertical-align:middle;max-width:280px;';
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = community;
    nameSpan.style.cssText = 'color:var(--community-name-color);font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;';

    nameCell.appendChild(nameSpan);
    row.appendChild(nameCell);
    
    // Add event listener for checkbox
    checkbox.addEventListener('change', () => {
      pickCommunity(community);
    });
  }
}

// Pick a community. The first pick narrows to that community alone, later
// picks add to the selection or drop out of it, and dropping the last one
// clears the filter.
function pickCommunity(community) {
  const at = selectedCommunities.indexOf(community);
  
  if (selectedCommunities.length === 0) {
    selectedCommunities = [community];
  } else if (at === -1) {
    selectedCommunities.push(community);
  } else if (selectedCommunities.length > 1) {
    selectedCommunities.splice(at, 1);
  } else {
    selectedCommunities = [];
  }
  
  applySelection();
}

// Paint the chart and the toggles from the current selection, then filter
// the publication list.
function applySelection() {
  if (!topicChart || !chartData) return;
  
  const filtered = selectedCommunities.length > 0;
  
  Object.keys(communityVisibility).forEach(community => {
    communityVisibility[community] = !filtered || selectedCommunities.includes(community);
    updateCheckboxState(community, communityVisibility[community]);
  });
  
  topicChart.data.datasets.forEach(dataset => {
    dataset.backgroundColor = communityVisibility[dataset.community] ?
      communityColors[dataset.community] : getUnselectedColor();
  });
  topicChart.update();
  
  filterPublicationsByTags();
}

// Filter publications based on selected communities
function filterPublicationsByTags() {
  if (typeof publicationsData === 'undefined') return;
  
  // Get all communities
  const allCommunities = Object.keys(communityVisibility);
  
  // Check if all communities are selected or none are selected
  const selectedCommunities = allCommunities.filter(comm => communityVisibility[comm]);
  const allSelected = selectedCommunities.length === allCommunities.length;
  const noneSelected = selectedCommunities.length === 0;
  
  // Get all publication elements
  const publicationElements = document.querySelectorAll('#publications-container .row.common-rows');
  
  let visiblePublicationsCount = 0;
  const totalPublicationsCount = publicationElements.length;
  
  publicationElements.forEach(pubElement => {
    // If all or none are selected, show all publications
    if (allSelected || noneSelected) {
      pubElement.style.display = 'flex';
      visiblePublicationsCount++;
      return;
    }
    
    // Themes this publication belongs to, via its acronym tags
    const pubThemes = Array.from(pubElement.querySelectorAll('[data-community]'))
      .map(tag => tag.getAttribute('data-community'));
    if (!pubThemes.length) pubThemes.push(UNTAGGED);
    
    // Show or hide based on whether it sits in a selected theme
    const isVisible = pubThemes.some(theme => selectedCommunities.includes(theme));
    pubElement.style.display = isVisible ? 'flex' : 'none';
    if (isVisible) visiblePublicationsCount++;
  });
  
  // Update the publications heading
  updatePublicationsHeading(visiblePublicationsCount, totalPublicationsCount);
}

// Update the publications heading based on filter status
function updatePublicationsHeading(selectedCount, totalCount) {
  const headingElement = document.getElementById('publications-heading');
  if (!headingElement) return;
  
  if (selectedCount === totalCount) {
    headingElement.textContent = `Publications (${totalCount})`;
  } else {
    headingElement.textContent = `Publications (${selectedCount}/${totalCount})`;
  }
}

// Add a function to get theme-aware colors for charts
function getChartColors() {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                     (window.matchMedia && 
                      window.matchMedia('(prefers-color-scheme: dark)').matches && 
                      !document.documentElement.hasAttribute('data-theme'));
  
  return {
    gridColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
    tickColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    textColor: isDarkMode ? '#ffffff' : '#666'
  };
}

// Update chart theme when theme changes
function updateChartTheme() {
  if (topicChart && topicChart.options && topicChart.options.scales) {
    const colors = getChartColors();
    
    // Update topic chart if it exists
    topicChart.options.scales.x.grid.color = colors.gridColor;
    topicChart.options.scales.y.grid.color = colors.gridColor;
    topicChart.options.scales.x.ticks.color = colors.textColor;
    topicChart.options.scales.y.ticks.color = colors.textColor;
    
    // Series colours are stepped per surface, so they change with the theme
    topicChart.data.datasets.forEach(dataset => {
      communityColors[dataset.community] = themeColor(dataset.community);
      dataset.originalColor = communityColors[dataset.community];
      dataset.backgroundColor = communityVisibility[dataset.community] ?
        dataset.originalColor : getUnselectedColor();
      updateCheckboxState(dataset.community, communityVisibility[dataset.community]);
    });
    
    document.querySelectorAll('.community-chip').forEach(chip => {
      const dot = chip.querySelector('.community-chip-dot');
      if (dot) dot.style.backgroundColor = themeColor(chip.getAttribute('data-community'));
    });
    
    topicChart.update();
  }
}

// Get theme-aware gray color for unselected items
function getUnselectedColor() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 
    '#666666' : '#CCCCCC';
}

// Update checkbox state and appearance
function updateCheckboxState(community, isVisible) {
  const checkbox = document.getElementById(themeId(community));
  if (checkbox) {
    checkbox.checked = isVisible;
    
    // Update tag span color
    const label = checkbox.nextElementSibling;
    if (label) {
      const tagSpan = label.querySelector('span');
      if (tagSpan) {
        tagSpan.style.backgroundColor = isVisible ? 
          communityColors[community] : getUnselectedColor();
      }
    }
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Use MutationObserver to detect when publications are rendered
  const targetNode = document.getElementById('publications-container');
  if (targetNode) {
    // If publications are already rendered (race condition), init immediately
    if (targetNode.children && targetNode.children.length > 0) {
      generateTopicTrendsChart().catch(error => {
        console.error('Error generating topic trends chart:', error);
      });
      const totalPublications = document.querySelectorAll('#publications-container .row.common-rows').length;
      updatePublicationsHeading(totalPublications, totalPublications);
      // No need to observe further
      return;
    }

    const observer = new MutationObserver((mutations) => {
      if (mutations.some(mutation => mutation.type === 'childList' && mutation.addedNodes.length > 0)) {
        // Publications have been rendered, now create the chart
        generateTopicTrendsChart().catch(error => {
          console.error('Error generating topic trends chart:', error);
        });
        
        // Initialize the publications heading with the total count
        const totalPublications = document.querySelectorAll('#publications-container .row.common-rows').length;
        updatePublicationsHeading(totalPublications, totalPublications);
        
        // Disconnect after first observation
        observer.disconnect();
      }
    });
    
    // Start observing
    observer.observe(targetNode, { childList: true });
  } else {
    // Fallback to timeout if container not found
    setTimeout(() => {
      generateTopicTrendsChart().catch(error => {
        console.error('Error generating topic trends chart:', error);
      });
      
      // Initialize the publications heading with the total count
      const totalPublications = document.querySelectorAll('#publications-container .row.common-rows').length;
      updatePublicationsHeading(totalPublications, totalPublications);
    }, 1000);
  }
  
  // Make the filter function globally available
  window.filterPublicationsByTags = filterPublicationsByTags;
}); 