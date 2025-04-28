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
  
  // Sort communities by total area (descending)
  communities.sort((a, b) => communityTotalAreas[b] - communityTotalAreas[a]);
  
  // Initialize visibility for all communities to true
  communities.forEach(community => {
    communityVisibility[community] = true;
  });
  
  // Store the original data for filtering later
  chartData = {
    years,
    communities,
    yearCommunityMap
  };
  
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
  
  // Prepare datasets for Chart.js
  const datasets = communities.map(community => {
    return {
      label: community,
      data: years.map(year => yearCommunityMap[year][community] || 0),
      backgroundColor: communityColors[community],
      borderColor: 'transparent', // Remove borders
      borderWidth: 0, // Ensure no border
      community: community // Store community for filtering
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
          display: true,
          text: 'Research Community Contributions',
          font: {
            size: 16
          },
          color: document.documentElement.getAttribute('data-theme') === 'dark' ? 
            '#FFFFFF' : '#333333' // Bright white in dark mode, dark gray in light mode
        },
        tooltip: {
          enabled: true,
          mode: 'nearest',
          intersect: true,
          callbacks: {
            // Customize the tooltip title (year) - hide it to simplify
            title: function() {
              return ''; // Hide the year label (title)
            },
            // Show acronym and full name on hover
            label: function(context) {
              const acronym = context.dataset.label;
              // Get full name using the helper function
              const fullName = getCommunityFullName(acronym);
              return `${acronym}: ${fullName}`;
            },
            // Remove the colored box from the tooltip
            labelColor: function(context) {
              return {
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              };
            },
            // Format the tooltip to be very simple
            labelTextColor: function(context) {
              return '#ffffff';
            }
          },
          // Custom tooltip styling
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
          display: false // Hide default legend, we'll create custom toggles
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
          
          // Toggle the community visibility instead of opening a link
          const isCurrentlyVisible = communityVisibility[community];
          toggleCommunityVisibility(community, !isCurrentlyVisible);
        }
      },
      // Add cursor pointer to hint clickability - improved version
      onHover: (event, chartElement) => {
        if (!chartElement || chartElement.length === 0) {
          event.chart.canvas.style.cursor = 'default';
          return;
        }
        
        const datasetIndex = chartElement[0].datasetIndex;
        const community = topicChart.data.datasets[datasetIndex].label;
        
        // Check if this community is actually visible
        if (communityVisibility[community]) {
          event.chart.canvas.style.cursor = 'pointer';
        } else {
          event.chart.canvas.style.cursor = 'default';
        }
      }
    }
  });
  
  // Create custom community filter toggles with areas shown
  await createCommunityToggles(communities);
  
  // Set up event listeners for toggle buttons
  setupToggleButtons();
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
  scrollWrapper.style.width = '100%';
  scrollWrapper.style.overflowX = 'auto';
  scrollWrapper.style.WebkitOverflowScrolling = 'touch'; // For smoother scrolling on iOS
  
  // Create a table for structured layout
  const table = document.createElement('table');
  table.className = 'community-toggle-table';
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.minWidth = '600px'; // Ensure table has a minimum width for mobile scrolling
  
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
    row.style.padding = '0'; // Remove padding to reduce height
    
    // Process first community (left side)
    createCommunityCells(row, firstHalf[i], tbody);
    
    // Process second community (right side) if it exists
    if (i < secondHalf.length && secondHalf[i] !== null) {
      createCommunityCells(row, secondHalf[i], tbody);
    } else {
      // Add empty cells for padding if no second community
      const emptyCell1 = document.createElement('td');
      const emptyCell2 = document.createElement('td');
      row.appendChild(emptyCell1);
      row.appendChild(emptyCell2);
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
  if (mediaQuery.matches) {
    // Add additional mobile-specific styles when viewport is small
    scrollWrapper.style.width = '100vw';
    scrollWrapper.style.marginLeft = 'calc(-50vw + 50%)';
    scrollWrapper.style.marginRight = 'calc(-50vw + 50%)';
    scrollWrapper.style.paddingLeft = '15px';
    scrollWrapper.style.paddingRight = '15px';
    scrollWrapper.style.boxSizing = 'border-box';
  }
  
  // Add media query listener to adjust styles when window resizes
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      // Apply mobile styles
      scrollWrapper.style.width = '100vw';
      scrollWrapper.style.marginLeft = 'calc(-50vw + 50%)';
      scrollWrapper.style.marginRight = 'calc(-50vw + 50%)';
      scrollWrapper.style.paddingLeft = '15px';
      scrollWrapper.style.paddingRight = '15px';
    } else {
      // Reset to desktop styles
      scrollWrapper.style.width = '100%';
      scrollWrapper.style.marginLeft = '0';
      scrollWrapper.style.marginRight = '0';
      scrollWrapper.style.paddingLeft = '0';
      scrollWrapper.style.paddingRight = '0';
    }
  });
  
  // Helper function to create cells for a community
  function createCommunityCells(row, community, tbody) {
    if (!community) return;
    
    const area = communityTotalAreas[community];
    
    // First cell: Acronym tag toggle
    const tagCell = document.createElement('td');
    tagCell.style.padding = '1px 5px 1px 5px'; // Reduced vertical padding
    tagCell.style.verticalAlign = 'middle';
    tagCell.style.width = '80px';
    
    // Create a checkbox but hide it visually
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `toggle-${community}`;
    checkbox.className = 'community-checkbox';
    checkbox.checked = true;
    checkbox.dataset.community = community;
    checkbox.style.display = 'none'; // Hide the actual checkbox
    
    // Create the tag-like label similar to htmlCommunityTag
    const label = document.createElement('label');
    label.htmlFor = `toggle-${community}`;
    label.className = 'community-tag-label';
    label.style.textDecoration = 'none';
    label.style.color = 'white';
    label.style.cursor = 'pointer';
    label.style.display = 'inline-block';
    
    // Create the span similar to htmlCommunityTag
    const tagSpan = document.createElement('span');
    tagSpan.className = 'inline-flex items-center rounded-full font-medium text-medium';
    tagSpan.style.backgroundColor = communityColors[community];
    tagSpan.style.color = 'var(--community-tag-text-color)';
    tagSpan.style.padding = '1px 4px';
    tagSpan.style.borderRadius = '12px';
    tagSpan.style.fontFamily = 'Mukta, sans-serif';
    tagSpan.style.display = 'inline-block';
    
    // Create main text without the area
    const mainText = document.createTextNode(community);
    tagSpan.appendChild(mainText);
    
    // Append tag elements
    label.appendChild(tagSpan);
    tagCell.appendChild(checkbox);
    tagCell.appendChild(label);
    row.appendChild(tagCell);
    
    // New cell: Paper count
    const countCell = document.createElement('td');
    countCell.style.padding = '1px 5px';
    countCell.style.verticalAlign = 'middle';
    countCell.style.width = '30px';
    countCell.style.fontSize = '12px';
    countCell.style.color = 'var(--community-count-color)';
    countCell.style.textAlign = 'right';
    countCell.textContent = area.toFixed(1);
    row.appendChild(countCell);
    
    // Third cell: Community full name with link
    const nameCell = document.createElement('td');
    nameCell.style.padding = '1px 15px 1px 5px'; // Reduced vertical padding
    nameCell.style.verticalAlign = 'middle';
    nameCell.style.maxWidth = '220px';
    
    // Get the full name of the community
    const fullName = getCommunityFullName(community);
    
    // Create link to the community page
    const link = document.createElement('a');
    link.href = `https://researchtrend.ai/communities/${community}`;
    link.textContent = fullName;
    link.style.textDecoration = 'underline'; // Add underline to indicate it's a link
    link.style.color = 'var(--community-name-color)';
    link.style.fontSize = '14px'; // Smaller text
    link.target = '_blank'; // Open in new tab
    link.style.whiteSpace = 'nowrap';
    link.style.overflow = 'hidden';
    link.style.textOverflow = 'ellipsis';
    link.style.display = 'block';
    
    nameCell.appendChild(link);
    row.appendChild(nameCell);
    
    // Add event listener for checkbox
    checkbox.addEventListener('change', () => {
      // Update the tag background color based on checked state
      tagSpan.style.backgroundColor = checkbox.checked ? 
        communityColors[community] : '#CCCCCC';
      
      // Update chart
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
      
      // Filter publications after updating all toggles
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
      
      // Filter publications after updating all toggles
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
    // Instead of hiding the dataset or setting data to zero,
    // just change the color to gray when not visible
    if (isVisible) {
      // Restore original color from our saved colors map
      topicChart.data.datasets[datasetIndex].backgroundColor = communityColors[community];
    } else {
      // Make the bars gray but keep their height
      topicChart.data.datasets[datasetIndex].backgroundColor = getUnselectedColor(); // Theme-aware gray
    }
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
  
  publicationElements.forEach(pubElement => {
    // If all or none are selected, show all publications
    if (allSelected || noneSelected) {
      pubElement.style.display = 'flex';
      return;
    }
    
    // Check if the publication has any of the selected community tags
    const pubTags = Array.from(pubElement.querySelectorAll('a[href^="https://researchtrend.ai/communities/"]'))
      .map(tag => tag.textContent.trim());
    
    // Special case for "Unknown" - show papers with no community tags
    if (selectedCommunities.includes('Unknown') && pubTags.length === 0) {
      pubElement.style.display = 'flex';
      return;
    }
    
    // Check if any of the publication's tags match the selected communities
    const hasSelectedTag = pubTags.some(tag => selectedCommunities.includes(tag));
    
    // Show or hide based on whether it has a selected tag
    pubElement.style.display = hasSelectedTag ? 'flex' : 'none';
  });
}

// Add a function to get theme-aware colors for charts
function getChartColors() {
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                     (window.matchMedia && 
                      window.matchMedia('(prefers-color-scheme: dark)').matches && 
                      !document.documentElement.hasAttribute('data-theme'));
  
  return {
    gridColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    tickColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    textColor: isDarkMode ? '#ffffff' : '#666'
  };
}

// Update chart theme when theme changes
function updateChartTheme() {
  if (window.topicTrendsChart && window.topicTrendsChart.options && 
      window.topicTrendsChart.options.scales && 
      window.topicTrendsChart.options.scales.x) {
    const colors = getChartColors();
    
    window.topicTrendsChart.options.scales.x.grid.color = colors.gridColor;
    window.topicTrendsChart.options.scales.y.grid.color = colors.gridColor;
    window.topicTrendsChart.options.scales.x.ticks.color = colors.textColor;
    window.topicTrendsChart.options.scales.y.ticks.color = colors.textColor;
    
    window.topicTrendsChart.update();
  } else if (topicChart && topicChart.options && topicChart.options.scales) {
    const colors = getChartColors();
    
    // Update topic chart if it exists
    topicChart.options.scales.x.grid.color = colors.gridColor;
    topicChart.options.scales.y.grid.color = colors.gridColor;
    topicChart.options.scales.x.ticks.color = colors.textColor;
    topicChart.options.scales.y.ticks.color = colors.textColor;
    
    topicChart.update();
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // We need to ensure publications are processed first
  // Use MutationObserver to detect when publications are rendered
  const targetNode = document.getElementById('publications-container');
  if (targetNode) {
    const observer = new MutationObserver((mutations) => {
      if (mutations.some(mutation => mutation.type === 'childList' && mutation.addedNodes.length > 0)) {
        // Publications have been rendered, now create the chart
        generateTopicTrendsChart().catch(error => {
          console.error('Error generating topic trends chart:', error);
        });
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
    }, 1000);
  }
  
  // Make the filter function globally available
  window.filterPublicationsByTags = filterPublicationsByTags;
});

function initializeTopicTrendsChart() {
  const ctx = document.getElementById('topicTrendsChart');
  if (!ctx) return;
  
  const colors = getChartColors();
  
  window.topicTrendsChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [] // Will be populated later
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Year',
            color: colors.textColor
          },
          grid: {
            color: colors.gridColor
          },
          ticks: {
            color: colors.textColor
          }
        },
        y: {
          title: {
            display: true,
            text: 'Publications',
            color: colors.textColor
          },
          grid: {
            color: colors.gridColor
          },
          ticks: {
            color: colors.textColor
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: colors.textColor
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw.y;
            }
          }
        }
      }
    }
  });
}

// Add function to get theme-aware gray color
function getUnselectedColor() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 
    '#666666' : '#CCCCCC'; // Darker gray in dark mode, light gray in light mode
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