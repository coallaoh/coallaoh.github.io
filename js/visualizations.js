// Global variables to store chart data and state
let topicChart = null;
let chartData = null;
let communityVisibility = {};
let communityColors = {};
let communityTotalAreas = {};

// Helper function to find a community's full name from its acronym
function getCommunityFullName(acronym) {
  if (!Array.isArray(communities)) {
    console.error('Communities data is not an array');
    return acronym;
  }
  
  const community = communities.find(comm => comm.acronym === acronym);
  return community ? community.full_name : acronym;
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
  
  // Check if communities data is available
  if (typeof communities === 'undefined') {
    console.error('Communities data not found');
    console.log('Make sure data/communities.js is loaded');
  } else {
    console.log('Communities data loaded successfully:', communities.length, 'communities found');
  }
  
  // Check if hashColor function is available
  if (typeof hashColor !== 'function') {
    console.error('hashColor function not found');
    console.log('Make sure js/publications.js is loaded properly');
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
    
    // Handle papers with tags
    if (pub.rtai_tags && pub.rtai_tags.length > 0) {
      const tagCount = pub.rtai_tags.length;
      // Calculate sum of weights (n, n-1, ..., 2, 1)
      const totalWeight = (tagCount * (tagCount + 1)) / 2;
      
      // Assign weighted counts to each tag based on position
      pub.rtai_tags.forEach((tag, index) => {
        // Weight is (n, n-1, ..., 2, 1) / sum based on position
        const weight = (tagCount - index) / totalWeight;
        
        if (!yearCommunityMap[year][tag]) {
          yearCommunityMap[year][tag] = 0;
        }
        yearCommunityMap[year][tag] += weight;
      });
    } else {
      // No tags - count as "Unknown"
      if (!yearCommunityMap[year]["Unknown"]) {
        yearCommunityMap[year]["Unknown"] = 0;
      }
      yearCommunityMap[year]["Unknown"] += 1;
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
  
  const communities = Array.from(allCommunities);
  
  // Calculate total area for each community
  communities.forEach(community => {
    communityTotalAreas[community] = years.reduce((total, year) => {
      return total + (yearCommunityMap[year][community] || 0);
    }, 0);
  });
  
  // Generate community colors using hashColor
  for (const community of communities) {
    try {
      // Use hashColor from js/publications.js
      communityColors[community] = await hashColor(community);
    } catch (error) {
      console.error(`Error generating color for ${community}:`, error);
      // Fallback color if hashColor fails
      communityColors[community] = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    }
  }
  
  // Sort communities by total area (descending) for initial ordering
  communities.sort((a, b) => communityTotalAreas[b] - communityTotalAreas[a]);
  
  // Store the area-sorted communities for the legend and toggle buttons
  const areaSortedCommunities = [...communities];
  
  // Reorder communities to separate similar colors for the chart
  const reorderedCommunities = optimizeColorSeparation(communities);
  
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
              const acronym = context.dataset.label;
              const fullName = getCommunityFullName(acronym);
              const totalPapers = communityTotalAreas[acronym].toFixed(1);
              return `${acronym}: ${fullName} (${totalPapers})`;
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
          
          const isCurrentlyVisible = communityVisibility[community];
          toggleCommunityVisibility(community, !isCurrentlyVisible);
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
  
  // Set up event listeners for toggle buttons
  setupToggleButtons();
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
    
    // First cell: Acronym tag toggle
    const tagCell = document.createElement('td');
    tagCell.style.cssText = 'padding:1px 5px;vertical-align:middle;width:80px;';
    
    // Create a checkbox but hide it visually
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `toggle-${community}`;
    checkbox.className = 'community-checkbox';
    checkbox.checked = true;
    checkbox.dataset.community = community;
    checkbox.style.display = 'none';
    
    // Create the tag-like label
    const label = document.createElement('label');
    label.htmlFor = `toggle-${community}`;
    label.className = 'community-tag-label';
    label.style.cssText = 'text-decoration:none;color:white;cursor:pointer;display:inline-block;';
    
    // Create the span for the tag
    const tagSpan = document.createElement('span');
    tagSpan.className = 'inline-flex items-center rounded-full font-medium text-medium';
    tagSpan.style.cssText = `background-color:${communityColors[community]};color:var(--community-tag-text-color);padding:1px 4px;border-radius:12px;font-family:Mukta,sans-serif;display:inline-block;`;
    
    // Add the community text
    tagSpan.textContent = community;
    
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
    
    // Community full name with link
    const nameCell = document.createElement('td');
    nameCell.style.cssText = 'padding:1px 15px 1px 5px;vertical-align:middle;max-width:220px;';
    
    // Create link to the community page
    const link = document.createElement('a');
    link.href = `https://researchtrend.ai/communities/${community}`;
    link.textContent = getCommunityFullName(community);
    link.style.cssText = 'text-decoration:underline;color:var(--community-name-color);font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;';
    link.target = '_blank';
    
    nameCell.appendChild(link);
    row.appendChild(nameCell);
    
    // Add event listener for checkbox
    checkbox.addEventListener('change', () => {
      tagSpan.style.backgroundColor = checkbox.checked ? 
        communityColors[community] : getUnselectedColor();
      toggleCommunityVisibility(community, checkbox.checked);
    });
  }
}

// Set up event listeners for select all / clear all buttons
function setupToggleButtons() {
  const selectAllBtn = document.getElementById('selectAllCommunities');
  const clearAllBtn = document.getElementById('clearAllCommunities');
  
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.community-checkbox');
      checkboxes.forEach(checkbox => {
        const community = checkbox.dataset.community;
        checkbox.checked = true;
        toggleCommunityVisibility(community, true);
        
        // Update tag span background color
        const label = checkbox.nextElementSibling;
        if (label) {
          const tagSpan = label.querySelector('span');
          if (tagSpan && communityColors) {
            tagSpan.style.backgroundColor = communityColors[community];
          }
        }
      });
      
      filterPublicationsByTags();
    });
  }
  
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.community-checkbox');
      checkboxes.forEach(checkbox => {
        const community = checkbox.dataset.community;
        checkbox.checked = false;
        toggleCommunityVisibility(community, false);
        
        // Update tag span to theme-aware gray
        const label = checkbox.nextElementSibling;
        if (label) {
          const tagSpan = label.querySelector('span');
          if (tagSpan) {
            tagSpan.style.backgroundColor = getUnselectedColor();
          }
        }
      });
      
      filterPublicationsByTags();
    });
  }
}

// Toggle visibility of a community in the chart
function toggleCommunityVisibility(community, isVisible) {
  if (!topicChart || !chartData) return;
  
  // Update visibility state
  communityVisibility[community] = isVisible;
  
  // Update corresponding dataset visibility
  const datasetIndex = topicChart.data.datasets.findIndex(dataset => dataset.community === community);
  if (datasetIndex !== -1) {
    topicChart.data.datasets[datasetIndex].backgroundColor = isVisible ?
      communityColors[community] : getUnselectedColor();
  }
  
  // Update the chart
  topicChart.update();
  
  // Update checkbox state and appearance
  updateCheckboxState(community, isVisible);
  
  // Filter publications based on selected communities
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
    
    // Check if the publication has any of the selected community tags
    const pubTags = Array.from(pubElement.querySelectorAll('a[href^="https://researchtrend.ai/communities/"]'))
      .map(tag => tag.textContent.trim());
    
    // Special case for "Unknown" - show papers with no community tags
    if (selectedCommunities.includes('Unknown') && pubTags.length === 0) {
      pubElement.style.display = 'flex';
      visiblePublicationsCount++;
      return;
    }
    
    // Show or hide based on whether it has a selected tag
    const isVisible = pubTags.some(tag => selectedCommunities.includes(tag));
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
  const checkbox = document.getElementById(`toggle-${community}`);
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

// Function to optimize color separation in the stacked bar chart
function optimizeColorSeparation(communities) {
  if (communities.length <= 2) return communities;
  
  // Convert colors to HSL for better color distance calculation
  const colorData = communities.map(community => {
    const color = communityColors[community];
    const hsl = colorToHSL(color);
    return {
      community,
      color,
      hsl,
      area: communityTotalAreas[community]
    };
  });
  
  // Sort by area first (largest to smallest)
  colorData.sort((a, b) => b.area - a.area);
  
  // Start with the largest community
  const result = [colorData[0].community];
  const used = new Set([colorData[0].community]);
  
  // Keep track of the last added color
  let lastAddedHSL = colorData[0].hsl;
  
  // Add remaining communities one by one, always choosing the one with the most different color
  while (used.size < communities.length) {
    let bestIndex = -1;
    let maxColorDistance = -1;
    
    // Find the community with the most different color from the last added one
    for (let i = 0; i < colorData.length; i++) {
      if (used.has(colorData[i].community)) continue;
      
      const colorDistance = calculateColorDistance(lastAddedHSL, colorData[i].hsl);
      
      if (colorDistance > maxColorDistance) {
        maxColorDistance = colorDistance;
        bestIndex = i;
      }
    }
    
    if (bestIndex !== -1) {
      result.push(colorData[bestIndex].community);
      used.add(colorData[bestIndex].community);
      lastAddedHSL = colorData[bestIndex].hsl;
    }
  }
  
  return result;
}

// Helper function to convert color to HSL
function colorToHSL(color) {
  // Create a temporary div to use the browser's color parsing
  const temp = document.createElement('div');
  temp.style.color = color;
  document.body.appendChild(temp);
  const computedColor = window.getComputedStyle(temp).color;
  document.body.removeChild(temp);
  
  // Parse the computed color
  const rgbMatch = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!rgbMatch) return { h: 0, s: 0, l: 0 };
  
  const r = parseInt(rgbMatch[1]) / 255;
  const g = parseInt(rgbMatch[2]) / 255;
  const b = parseInt(rgbMatch[3]) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Helper function to calculate color distance in HSL space
function calculateColorDistance(hsl1, hsl2) {
  // Weight hue more heavily than saturation and lightness
  const hueWeight = 0.6;
  const satWeight = 0.2;
  const lightWeight = 0.2;
  
  // Normalize hue difference to [0, 180] range (half the hue circle)
  const hueDiff = Math.min(
    Math.abs(hsl1.h - hsl2.h),
    360 - Math.abs(hsl1.h - hsl2.h)
  );
  
  const satDiff = Math.abs(hsl1.s - hsl2.s);
  const lightDiff = Math.abs(hsl1.l - hsl2.l);
  
  // Calculate weighted distance
  return (
    hueWeight * (hueDiff / 180) +
    satWeight * (satDiff / 100) +
    lightWeight * (lightDiff / 100)
  );
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Use MutationObserver to detect when publications are rendered
  const targetNode = document.getElementById('publications-container');
  if (targetNode) {
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