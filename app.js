// Wealth distribution data from World Inequality Database
const wealthData = [
    {'percentile': 0, 'cumulative_wealth_share': 0.0},
    {'percentile': 1, 'cumulative_wealth_share': -0.12},
    {'percentile': 2, 'cumulative_wealth_share': -0.18},
    {'percentile': 3, 'cumulative_wealth_share': -0.22},
    {'percentile': 4, 'cumulative_wealth_share': -0.25},
    {'percentile': 5, 'cumulative_wealth_share': -0.28},
    {'percentile': 6, 'cumulative_wealth_share': -0.29},
    {'percentile': 7, 'cumulative_wealth_share': -0.3},
    {'percentile': 8, 'cumulative_wealth_share': -0.31},
    {'percentile': 9, 'cumulative_wealth_share': -0.31},
    {'percentile': 10, 'cumulative_wealth_share': -0.31},
    {'percentile': 11, 'cumulative_wealth_share': -0.31},
    {'percentile': 12, 'cumulative_wealth_share': -0.31},
    {'percentile': 13, 'cumulative_wealth_share': -0.31},
    {'percentile': 14, 'cumulative_wealth_share': -0.31},
    {'percentile': 15, 'cumulative_wealth_share': -0.31},
    {'percentile': 16, 'cumulative_wealth_share': -0.31},
    {'percentile': 17, 'cumulative_wealth_share': -0.31},
    {'percentile': 18, 'cumulative_wealth_share': -0.31},
    {'percentile': 19, 'cumulative_wealth_share': -0.31},
    {'percentile': 20, 'cumulative_wealth_share': -0.3},
    {'percentile': 21, 'cumulative_wealth_share': -0.3},
    {'percentile': 22, 'cumulative_wealth_share': -0.29},
    {'percentile': 23, 'cumulative_wealth_share': -0.27},
    {'percentile': 24, 'cumulative_wealth_share': -0.25},
    {'percentile': 25, 'cumulative_wealth_share': -0.23},
    {'percentile': 26, 'cumulative_wealth_share': -0.2},
    {'percentile': 27, 'cumulative_wealth_share': -0.17},
    {'percentile': 28, 'cumulative_wealth_share': -0.13},
    {'percentile': 29, 'cumulative_wealth_share': -0.09},
    {'percentile': 30, 'cumulative_wealth_share': -0.04},
    {'percentile': 31, 'cumulative_wealth_share': 0.02},
    {'percentile': 32, 'cumulative_wealth_share': 0.08},
    {'percentile': 33, 'cumulative_wealth_share': 0.16},
    {'percentile': 34, 'cumulative_wealth_share': 0.24},
    {'percentile': 35, 'cumulative_wealth_share': 0.34},
    {'percentile': 36, 'cumulative_wealth_share': 0.44},
    {'percentile': 37, 'cumulative_wealth_share': 0.56},
    {'percentile': 38, 'cumulative_wealth_share': 0.68},
    {'percentile': 39, 'cumulative_wealth_share': 0.82},
    {'percentile': 40, 'cumulative_wealth_share': 0.98},
    {'percentile': 41, 'cumulative_wealth_share': 1.15},
    {'percentile': 42, 'cumulative_wealth_share': 1.33},
    {'percentile': 43, 'cumulative_wealth_share': 1.53},
    {'percentile': 44, 'cumulative_wealth_share': 1.74},
    {'percentile': 45, 'cumulative_wealth_share': 1.98},
    {'percentile': 46, 'cumulative_wealth_share': 2.23},
    {'percentile': 47, 'cumulative_wealth_share': 2.5},
    {'percentile': 48, 'cumulative_wealth_share': 2.8},
    {'percentile': 49, 'cumulative_wealth_share': 3.11},
    {'percentile': 50, 'cumulative_wealth_share': 3.45},
    {'percentile': 51, 'cumulative_wealth_share': 3.8},
    {'percentile': 52, 'cumulative_wealth_share': 4.18},
    {'percentile': 53, 'cumulative_wealth_share': 4.58},
    {'percentile': 54, 'cumulative_wealth_share': 4.99},
    {'percentile': 55, 'cumulative_wealth_share': 5.43},
    {'percentile': 56, 'cumulative_wealth_share': 5.9},
    {'percentile': 57, 'cumulative_wealth_share': 6.38},
    {'percentile': 58, 'cumulative_wealth_share': 6.9},
    {'percentile': 59, 'cumulative_wealth_share': 7.43},
    {'percentile': 60, 'cumulative_wealth_share': 7.99},
    {'percentile': 61, 'cumulative_wealth_share': 8.58},
    {'percentile': 62, 'cumulative_wealth_share': 9.19},
    {'percentile': 63, 'cumulative_wealth_share': 9.83},
    {'percentile': 64, 'cumulative_wealth_share': 10.49},
    {'percentile': 65, 'cumulative_wealth_share': 11.18},
    {'percentile': 66, 'cumulative_wealth_share': 11.91},
    {'percentile': 67, 'cumulative_wealth_share': 12.66},
    {'percentile': 68, 'cumulative_wealth_share': 13.44},
    {'percentile': 69, 'cumulative_wealth_share': 14.25},
    {'percentile': 70, 'cumulative_wealth_share': 15.1},
    {'percentile': 71, 'cumulative_wealth_share': 15.97},
    {'percentile': 72, 'cumulative_wealth_share': 16.87},
    {'percentile': 73, 'cumulative_wealth_share': 17.81},
    {'percentile': 74, 'cumulative_wealth_share': 18.79},
    {'percentile': 75, 'cumulative_wealth_share': 19.81},
    {'percentile': 76, 'cumulative_wealth_share': 20.88},
    {'percentile': 77, 'cumulative_wealth_share': 21.99},
    {'percentile': 78, 'cumulative_wealth_share': 23.13},
    {'percentile': 79, 'cumulative_wealth_share': 24.32},
    {'percentile': 80, 'cumulative_wealth_share': 25.56},
    {'percentile': 81, 'cumulative_wealth_share': 26.84},
    {'percentile': 82, 'cumulative_wealth_share': 28.17},
    {'percentile': 83, 'cumulative_wealth_share': 29.57},
    {'percentile': 84, 'cumulative_wealth_share': 31.04},
    {'percentile': 85, 'cumulative_wealth_share': 32.57},
    {'percentile': 86, 'cumulative_wealth_share': 34.18},
    {'percentile': 87, 'cumulative_wealth_share': 35.88},
    {'percentile': 88, 'cumulative_wealth_share': 37.69},
    {'percentile': 89, 'cumulative_wealth_share': 39.6},
    {'percentile': 90, 'cumulative_wealth_share': 41.63},
    {'percentile': 91, 'cumulative_wealth_share': 43.79},
    {'percentile': 92, 'cumulative_wealth_share': 46.11},
    {'percentile': 93, 'cumulative_wealth_share': 48.63},
    {'percentile': 94, 'cumulative_wealth_share': 51.38},
    {'percentile': 95, 'cumulative_wealth_share': 54.39},
    {'percentile': 96, 'cumulative_wealth_share': 57.68},
    {'percentile': 97, 'cumulative_wealth_share': 61.44000000000001},
    {'percentile': 98, 'cumulative_wealth_share': 65.77000000000001},
    {'percentile': 99, 'cumulative_wealth_share': 72.38},
    {'percentile': 100, 'cumulative_wealth_share': 100.0}
];

// DOM elements
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const rangeFill = document.getElementById('range-fill');
const rangeDisplay = document.getElementById('range-display');
const percentileDescription = document.getElementById('percentile-description');
const wealthPercentage = document.getElementById('wealth-percentage');
const wealthInterpretation = document.getElementById('wealth-interpretation');

// Initialize the dual-range slider
function initializeDualRange() {
    updateRangeDisplay();
    updateWealthDisplay();
    updateRangeFill();
}

// Update range display
function updateRangeDisplay() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    rangeDisplay.textContent = `${min}% to ${max}%`;
}

// Update range fill visualization
function updateRangeFill() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    const left = (min / 100) * 100;
    const width = ((max - min) / 100) * 100;
    
    rangeFill.style.left = left + '%';
    rangeFill.style.width = width + '%';
}

// Get wealth share for a percentile range
function getWealthShare(startPercentile, endPercentile) {
    const startData = wealthData.find(d => d.percentile === startPercentile);
    const endData = wealthData.find(d => d.percentile === endPercentile);
    
    if (!startData || !endData) return 0;
    
    return endData.cumulative_wealth_share - startData.cumulative_wealth_share;
}

// Generate description for percentile range
function getPercentileDescription(min, max) {
    const range = max - min;
    
    if (min === 0 && max === 100) {
        return "Entire Population (0% to 100%)";
    }
    
    if (min === 0) {
        return `Bottom ${range}% (${min}% to ${max}%)`;
    }
    
    if (max === 100) {
        return `Top ${range}% (${min}% to ${max}%)`;
    }
    
    // Middle ranges
    return `Middle ${range}% (${min}% to ${max}%)`;
}

// Generate interpretation text
function getInterpretation(min, max, wealthShare) {
    const range = max - min;
    
    if (min === 0 && max === 100) {
        return "The entire German population owns 100% of all wealth";
    }
    
    if (min === 0) {
        return `The poorest ${range}% of Germans own ${wealthShare.toFixed(1)}% of all wealth`;
    }
    
    if (max === 100) {
        return `The richest ${range}% of Germans own ${wealthShare.toFixed(1)}% of all wealth`;
    }
    
    // Middle ranges
    return `Germans in the ${min}% to ${max}% wealth range own ${wealthShare.toFixed(1)}% of all wealth`;
}

// Update wealth display
function updateWealthDisplay() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    
    // Ensure min <= max
    if (min > max) {
        if (document.activeElement === rangeMin) {
            rangeMax.value = min;
        } else {
            rangeMin.value = max;
        }
        return updateWealthDisplay();
    }
    
    const wealthShare = getWealthShare(min, max);
    const description = getPercentileDescription(min, max);
    const interpretation = getInterpretation(min, max, wealthShare);
    
    percentileDescription.textContent = description;
    wealthPercentage.textContent = `${wealthShare.toFixed(1)}%`;
    wealthInterpretation.textContent = interpretation;
}

// Handle range input changes
function handleRangeChange() {
    updateRangeDisplay();
    updateWealthDisplay();
    updateRangeFill();
}

// Prevent range inputs from crossing over
rangeMin.addEventListener('input', function() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    if (min > max) {
        rangeMax.value = min;
    }
    handleRangeChange();
});

rangeMax.addEventListener('input', function() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    
    if (max < min) {
        rangeMin.value = max;
    }
    handleRangeChange();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeDualRange);

// Handle window resize for responsiveness
window.addEventListener('resize', updateRangeFill);
