# Company Evaluation Table

This project is a responsive React application that displays a company evaluation table with advanced features for sorting, filtering, and theme customization. It's built using Next.js and styled with Tailwind CSS.

## Features

### Original Features
- Responsive layout matching the Figma design
- Interactive table with company evaluation data
- Row/Column view toggle
- Enrichment button for additional data
- Loading states for data fetching
- Error handling for failed data loads
- External link handling for certain rows

### New Features
1. **Dark Mode / Light Mode Toggle**
   - Located in the sidebar for easy access
   - Switches between light and dark themes
   - Respects system preferences by default

2. **Enhanced Search Functionality**
   - Real-time filtering of companies based on name and description
   - Updates results as the user types

3. **Advanced Sorting Options**
   - Sort companies by name or timestamp
   - Toggle between ascending and descending order
   - Accessible through a dropdown menu in the table header

4. **Improved Filter Button**
   - Placeholder for future advanced filtering options

## Project Structure

- `app/`: Contains the main layout and page components
- `components/`: Houses reusable React components
  - `company-table.tsx`: Main table component with new search and sort features
  - `side-nav.tsx`: Sidebar component with the new theme toggle
  - `table-header.tsx`: Header component for the application
- `styles/`: Global styles and Tailwind CSS configuration

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- React
- Next.js
- Tailwind CSS
- Lucide React (for icons)
- shadcn/ui (for UI components)




