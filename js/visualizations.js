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
          text: 'To Which Communities Did I Contribute?',
          font: {
            size: 16
          }
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
          
          // Only open the link if the community portion is actually visible (not toggled off)
          if (communityVisibility[community]) {
            // Open the community page in a new tab
            window.open(`https://researchtrend.ai/communities/${community}`, '_blank');
          }
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
  
  // Set container styles for denser layout
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '2px';
  container.style.justifyContent = 'center';
  container.style.maxWidth = '100%';
  
  // Clear any existing toggles
  container.innerHTML = '';
  
  // Create a toggle for each community, sorted by area
  for (const community of communities) {
    const area = communityTotalAreas[community];
    
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'community-toggle';
    toggleContainer.style.margin = '2px'; // Reduce margins to fit more tags per row
    
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
    
    // Create the span similar to htmlCommunityTag
    const tagSpan = document.createElement('span');
    tagSpan.className = 'inline-flex items-center rounded-full font-medium text-medium text-white';
    tagSpan.style.backgroundColor = communityColors[community];
    tagSpan.style.padding = '1px 4px';
    tagSpan.style.borderRadius = '12px';
    tagSpan.style.fontFamily = 'Mukta, sans-serif';
    
    // Create main text and area text separately
    const mainText = document.createTextNode(community + ' ');
    tagSpan.appendChild(mainText);
    
    // Add the area as a smaller text
    const areaSpan = document.createElement('span');
    areaSpan.style.fontSize = '60%';
    areaSpan.textContent = area.toFixed(1);
    tagSpan.appendChild(areaSpan);
    
    // Add tooltip showing full community name
    const fullName = getCommunityFullName(community);
    if (fullName !== community) {  // Only add tooltip if we have a full name
      // Create a tooltip div that appears on hover
      const tooltip = document.createElement('div');
      tooltip.className = 'community-tooltip';
      tooltip.textContent = fullName;
      tooltip.style.display = 'none';
      tooltip.style.position = 'absolute';
      tooltip.style.backgroundColor = '#333';
      tooltip.style.color = 'white';
      tooltip.style.padding = '5px 8px';
      tooltip.style.borderRadius = '4px';
      tooltip.style.zIndex = '1000';
      tooltip.style.fontSize = '14px';
      tooltip.style.pointerEvents = 'none'; // Prevent tooltip from blocking mouse events
      
      // Add events to show/hide the tooltip
      label.onmouseenter = (e) => {
        tooltip.style.display = 'block';
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY + 10) + 'px';
      };
      
      label.onmousemove = (e) => {
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY + 10) + 'px';
      };
      
      label.onmouseleave = () => {
        tooltip.style.display = 'none';
      };
      
      // Add the tooltip to the document body
      document.body.appendChild(tooltip);
    }
    
    // Append elements
    label.appendChild(tagSpan);
    toggleContainer.appendChild(checkbox);
    toggleContainer.appendChild(label);
    container.appendChild(toggleContainer);
    
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
    });
  }
  
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.community-checkbox');
      checkboxes.forEach(checkbox => {
        const community = checkbox.dataset.community;
        checkbox.checked = false;
        toggleCommunityVisibility(community, false);
        
        // Update tag span to gray
        const label = checkbox.nextElementSibling;
        if (label) {
          const tagSpan = label.querySelector('span');
          if (tagSpan) {
            tagSpan.style.backgroundColor = '#CCCCCC';
          }
        }
      });
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
      topicChart.data.datasets[datasetIndex].backgroundColor = '#CCCCCC'; // Use same gray as htmlCommunityTag
    }
  }
  
  // Update the chart
  topicChart.update();
  
  // Update checkbox state
  const checkbox = document.getElementById(`toggle-${community}`);
  if (checkbox) {
    checkbox.checked = isVisible;
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
}); 