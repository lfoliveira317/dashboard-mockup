// ============================================
// Screen Navigation
// ============================================

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the requested screen
    const requestedScreen = document.getElementById(screenId);
    if (requestedScreen) {
        requestedScreen.classList.add('active');
    }
}

// ============================================
// Authentication
// ============================================

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate inputs
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate API call
    console.log('Login attempt:', { email, password });
    
    // Store token (in real app, this would come from API)
    localStorage.setItem('authToken', 'demo-token-' + Date.now());
    localStorage.setItem('userEmail', email);
    
    // Show success message
    alert('Login successful! Welcome, ' + email);
    
    // Navigate to dashboard
    showScreen('dashboardScreen');
    
    // Clear form
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

function handleLogout() {
    // Clear stored data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    
    // Navigate to login
    showScreen('loginScreen');
    
    // Show logout message
    alert('You have been logged out successfully');
}

// ============================================
// Table Sorting
// ============================================

let currentSortColumn = null;
let sortDirection = 'asc';

function setupTableSorting() {
    const sortableHeaders = document.querySelectorAll('.sortable');
    
    sortableHeaders.forEach((header, index) => {
        header.addEventListener('click', function() {
            sortTable(index);
        });
    });
}

function sortTable(columnIndex) {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
    
    // Toggle sort direction if clicking same column
    if (currentSortColumn === columnIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection = 'asc';
        currentSortColumn = columnIndex;
    }
    
    // Sort rows
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        
        // Try to parse as number
        const aNum = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
        
        let comparison = 0;
        if (!isNaN(aNum) && !isNaN(bNum)) {
            comparison = aNum - bNum;
        } else {
            comparison = aValue.localeCompare(bValue);
        }
        
        return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    // Re-append sorted rows
    rows.forEach(row => {
        table.appendChild(row);
    });
    
    // Update visual indicator
    updateSortIndicators(columnIndex);
}

function updateSortIndicators(columnIndex) {
    const headers = document.querySelectorAll('.sortable');
    headers.forEach((header, index) => {
        const icon = header.querySelector('i');
        if (index === columnIndex) {
            icon.className = sortDirection === 'asc' 
                ? 'bi bi-arrow-up' 
                : 'bi bi-arrow-down';
            icon.style.opacity = '1';
        } else {
            icon.className = 'bi bi-arrow-down-up';
            icon.style.opacity = '0.5';
        }
    });
}

// ============================================
// CSV Export
// ============================================

function exportToCSV() {
    const table = document.querySelector('table');
    let csv = [];
    
    // Get headers
    const headers = [];
    table.querySelectorAll('thead th').forEach(header => {
        headers.push(header.textContent.trim().replace(/\s+/g, ' '));
    });
    csv.push(headers.join(','));
    
    // Get rows
    table.querySelectorAll('tbody tr').forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach((cell, index) => {
            // Skip action column
            if (index < headers.length - 1) {
                let text = cell.textContent.trim();
                // Escape quotes and wrap in quotes if contains comma
                text = text.replace(/"/g, '""');
                if (text.includes(',')) {
                    text = '"' + text + '"';
                }
                rowData.push(text);
            }
        });
        csv.push(rowData.join(','));
    });
    
    // Create blob and download
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'report_' + new Date().getTime() + '.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================
// Search/Filter
// ============================================

function setupSearch() {
    const searchInput = document.querySelector('input[placeholder="Search records..."]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            filterTable(this.value.toLowerCase());
        });
    }
}

function filterTable(searchTerm) {
    const table = document.querySelector('table tbody');
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

// ============================================
// Pagination
// ============================================

function setupPagination() {
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.textContent !== 'Previous' && this.textContent !== 'Next') {
                e.preventDefault();
                // Update active page
                document.querySelectorAll('.page-item.active').forEach(item => {
                    item.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }
        });
    });
}

// ============================================
// Entries Per Page
// ============================================

function setupEntriesPerPage() {
    const select = document.querySelector('select');
    if (select && select.textContent.includes('Show')) {
        select.addEventListener('change', function() {
            const entries = parseInt(this.value);
            console.log('Showing', entries, 'entries per page');
            // In real app, would reload data with new page size
        });
    }
}

// ============================================
// Export Button
// ============================================

function setupExportButton() {
    const exportBtn = document.querySelector('button:has(i.bi-download)');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            exportToCSV();
        });
    }
}

// ============================================
// Filter Buttons
// ============================================

function setupFilterButtons() {
    const applyBtn = document.querySelector('button:has(i.bi-search)');
    const resetBtn = document.querySelector('button:has(i.bi-arrow-clockwise)');
    
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            console.log('Filters applied');
            alert('Filters applied! (This is a mockup - no actual filtering)');
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            document.querySelectorAll('select').forEach(select => {
                select.selectedIndex = 0;
            });
            console.log('Filters reset');
        });
    }
}

// ============================================
// Download Report Buttons
// ============================================

function setupDownloadButtons() {
    const downloadBtns = document.querySelectorAll('button:has(i.bi-download)');
    downloadBtns.forEach(btn => {
        // Skip the CSV export button (already handled)
        if (!btn.textContent.includes('Export CSV')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Downloading report... (This is a mockup)');
            });
        }
    });
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners
    setupTableSorting();
    setupSearch();
    setupPagination();
    setupEntriesPerPage();
    setupExportButton();
    setupFilterButtons();
    setupDownloadButtons();
    
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        showScreen('dashboardScreen');
    } else {
        showScreen('loginScreen');
    }
    
    console.log('Application initialized');
});

// ============================================
// Utility Functions
// ============================================

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Log helper
function log(message, data = null) {
    console.log('[App]', message, data || '');
}
