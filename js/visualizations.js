// Global variables to store chart data and state
let topicChart = null;
let chartData = null;
let communityVisibility = {};
let communityColors = {};

// Function to generate topic trend visualization
function generateTopicTrendsChart() {
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

  // Get the canvas element
  const ctx = document.getElementById('topicTrendsChart');
  if (!ctx) {
    console.error('Chart canvas element not found');
    return;
  }

  // Process the data to organize by year and community
  const yearCommunityMap = processPublicationData(publicationsData);
  
  // Create and render the chart
  createStackedBarChart(ctx, yearCommunityMap);
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
function createStackedBarChart(ctx, yearCommunityMap) {
  // Get unique years and communities
  const years = Object.keys(yearCommunityMap).sort();
  const allCommunities = new Set();
  
  // Collect all unique communities
  years.forEach(year => {
    Object.keys(yearCommunityMap[year]).forEach(community => {
      allCommunities.add(community);
    });
  });
  
  const communities = Array.from(allCommunities).sort();
  
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
  
  // Generate community colors
  communities.forEach(community => {
    // Use the same hash function as in hashColor
    let hash = 0;
    for (let i = 0; i < community.length; i++) {
      hash = ((hash << 5) - hash) + community.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Match the color generation logic
    const hue = hash % 360;
    const saturation = 40 + (hash % 40);
    const lightness = 40 + (40 - (hash % 40));
    communityColors[community] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
  
  // Prepare datasets for Chart.js
  const datasets = communities.map(community => {
    return {
      label: community,
      data: years.map(year => yearCommunityMap[year][community] || 0),
      backgroundColor: communityColors[community],
      borderColor: communityColors[community],
      borderWidth: 1,
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
          text: 'Research Community Tags by Year',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || '';
              const value = context.raw.toFixed(2);
              return `${label}: ${value}`;
            }
          }
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
      }
    }
  });
  
  // Create custom community filter toggles
  createCommunityToggles(communities, communityColors);
  
  // Set up event listeners for toggle buttons
  setupToggleButtons();
}

// Create custom community filter toggles
function createCommunityToggles(communities, communityColors) {
  const container = document.getElementById('communityFilters');
  if (!container) return;
  
  // Clear any existing toggles
  container.innerHTML = '';
  
  // Create a toggle for each community
  communities.forEach(community => {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'community-toggle m-1 d-inline-flex align-items-center';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `toggle-${community}`;
    checkbox.className = 'community-checkbox mr-1';
    checkbox.checked = true;
    checkbox.dataset.community = community;
    
    const label = document.createElement('label');
    label.htmlFor = `toggle-${community}`;
    label.className = 'mb-0 ml-1';
    label.style.cursor = 'pointer';
    
    const colorSwatch = document.createElement('span');
    colorSwatch.className = 'color-swatch d-inline-block mr-1';
    colorSwatch.style.width = '15px';
    colorSwatch.style.height = '15px';
    colorSwatch.style.backgroundColor = communityColors[community];
    colorSwatch.style.display = 'inline-block';
    colorSwatch.style.verticalAlign = 'middle';
    colorSwatch.style.borderRadius = '3px';
    
    const communityText = document.createElement('span');
    communityText.textContent = community;
    
    label.appendChild(colorSwatch);
    label.appendChild(communityText);
    
    toggleContainer.appendChild(checkbox);
    toggleContainer.appendChild(label);
    container.appendChild(toggleContainer);
    
    // Add event listener for checkbox
    checkbox.addEventListener('change', () => {
      toggleCommunityVisibility(community, checkbox.checked);
      
      // Update color swatch
      const swatch = checkbox.nextElementSibling.querySelector('.color-swatch');
      if (swatch) {
        swatch.style.backgroundColor = checkbox.checked ? communityColors[community] : '#e0e0e0';
      }
    });
  });
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
        
        // Update color swatch
        const swatch = checkbox.nextElementSibling.querySelector('.color-swatch');
        if (swatch && communityColors) {
          swatch.style.backgroundColor = communityColors[community];
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
        
        // Update color swatch to gray
        const swatch = checkbox.nextElementSibling.querySelector('.color-swatch');
        if (swatch) {
          swatch.style.backgroundColor = '#e0e0e0';
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
      // Restore original color
      topicChart.data.datasets[datasetIndex].backgroundColor = topicChart.data.datasets[datasetIndex].borderColor;
    } else {
      // Make the bars gray but keep their height
      topicChart.data.datasets[datasetIndex].backgroundColor = '#e0e0e0'; // Light gray color
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
        generateTopicTrendsChart();
        // Disconnect after first observation
        observer.disconnect();
      }
    });
    
    // Start observing
    observer.observe(targetNode, { childList: true });
  } else {
    // Fallback to timeout if container not found
    setTimeout(generateTopicTrendsChart, 1000);
  }
}); 