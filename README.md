# Data & Reports Dashboard - Static Mockup

A lightweight, mobile-friendly web application mockup built with **Bootstrap 5** and vanilla JavaScript. This is a static prototype demonstrating the UI/UX design for a data and reports dashboard system.

## 📋 Features

### Screens Included

1. **Login Screen**
   - Email and password input fields
   - Remember me checkbox
   - Clean, modern design with gradient background
   - Demo credentials: Use any email/password combination

2. **Dashboard**
   - Four key metric cards (Total Users, Revenue, Active Sessions, Conversion Rate)
   - Trend chart visualization
   - Category performance with progress bars
   - Flexible layout for adding new metrics

3. **Reports**
   - Advanced filter panel with multiple filter options
   - Date range selector
   - Report type, status, and department filters
   - Report cards with download functionality
   - Status indicators (Completed, Pending, Failed)

4. **Custom Reports**
   - Interactive data grid with sample records
   - Sortable columns (click headers to sort)
   - Search/filter functionality
   - Pagination controls
   - CSV export feature
   - Responsive table design

### Key Features

- ✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✅ **Bootstrap 5 Styling** - Clean, professional appearance
- ✅ **Bootstrap Icons** - Beautiful icon set integrated
- ✅ **Screen Navigation** - Smooth transitions between screens
- ✅ **Table Sorting** - Click column headers to sort ascending/descending
- ✅ **CSV Export** - Download table data as CSV file
- ✅ **Search Functionality** - Filter records in real-time
- ✅ **Pagination** - Navigate through multiple pages
- ✅ **Local Storage** - Simulates session persistence
- ✅ **Accessibility** - Focus states and keyboard navigation support

## 🚀 Quick Start

### Option 1: Direct File Access
1. Open `index.html` in your web browser
2. Use demo credentials to log in (any email/password)
3. Navigate between screens using the top navigation bar

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

## 📁 File Structure

```
data-reports-mockup/
├── index.html          # Main HTML file with all screens
├── styles.css          # Bootstrap customizations and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #0d6efd (Bootstrap Blue)
- **Secondary**: #667eea (Purple)
- **Success**: #198754 (Green)
- **Warning**: #ffc107 (Yellow)
- **Danger**: #dc3545 (Red)
- **Info**: #0dcaf0 (Cyan)

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

## 🔧 Customization

### Adding New Metric Cards
Edit the Dashboard section in `index.html`:
```html
<div class="col-12 col-sm-6 col-lg-3 mb-3">
    <div class="card metric-card">
        <div class="card-body">
            <!-- Your metric content -->
        </div>
    </div>
</div>
```

### Modifying Table Data
Update the table rows in the Custom Reports section:
```html
<tr>
    <td>#10001</td>
    <td>Your Data</td>
    <!-- More columns -->
</tr>
```

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
.btn-primary {
    background-color: #your-color;
}
```

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Authentication Flow

This mockup demonstrates the authentication flow:
1. User enters credentials on login screen
2. Credentials are validated (demo accepts any input)
3. Auth token is stored in browser's localStorage
4. User is redirected to dashboard
5. Logout clears the token and returns to login

**Note**: In a production app, this would connect to a real API endpoint.

## 📊 Table Features

### Sorting
- Click any column header to sort ascending
- Click again to sort descending
- Visual indicator shows current sort direction

### Searching
- Type in the search box to filter records
- Searches across all columns
- Real-time filtering as you type

### Pagination
- Navigate between pages using pagination controls
- Shows current page and total entries
- Disabled states for first/last page

### CSV Export
- Click "Export CSV" button to download data
- Exports visible table data
- File named with timestamp

## 🎯 Use Cases

This mockup is perfect for:
- UI/UX design presentations
- Stakeholder demos
- Design feedback collection
- Frontend development reference
- Bootstrap learning resource

## 📝 Notes

- This is a **static mockup** with no backend integration
- All data is hardcoded for demonstration purposes
- API endpoints are not implemented
- Form submissions are simulated
- Sorting and filtering work on client-side only

## 🔄 Next Steps for Production

To convert this mockup to a production application:

1. **Replace Static Data**: Connect to real API endpoints
2. **Implement Authentication**: Use JWT tokens or OAuth
3. **Add State Management**: Use React, Vue, or similar
4. **Database Integration**: Connect to backend database
5. **Real-time Updates**: Implement WebSockets for live data
6. **Error Handling**: Add proper error messages and logging
7. **Performance**: Optimize images, lazy load components
8. **Security**: Implement CSRF protection, input validation

## 📄 License

This mockup is provided as-is for demonstration purposes.

## 💡 Tips

- Use browser DevTools to inspect and modify styles
- Test responsive design using browser device emulation
- Customize colors and fonts to match your brand
- Add your logo to the navbar
- Modify sample data to match your use case

---

**Version**: 1.0  
**Last Updated**: January 2024  
**Bootstrap Version**: 5.3.0
