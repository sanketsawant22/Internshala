# E-Commerce Frontend Application

This project is a React-based e-commerce frontend application built with Vite that interacts with the FakeStore API. It includes product listings, category filtering, product details modal, and a cart counter.

## Setup and Running Instructions

### Clone the repository
```bash
git clone <repository_url>
cd <project_directory>
```

### Install dependencies
```bash
npm install
```

### Run the application
```bash
npm run dev
```
The application will be available at the URL provided in the terminal (e.g., `http://localhost:5173`).

## Features

- **Product Listing**: Displays all products from the FakeStore API with images, titles, prices, and ratings.
- **Category Filtering**: Ability to filter products by categories.
- **Search Functionality**: Search box that suggests categories as you type.
- **Product Details**: Modal popup showing detailed product information when a product is clicked.
- **Cart Functionality**: Cart counter that increments when products are added to the cart.
- **Responsive Design**: Adapts to desktop, tablet, and mobile screen sizes.

## Project Structure
```
src/
├── components/
│   ├── Header.jsx         # Top navigation bar with search and cart
│   ├── Footer.jsx         # Bottom footer section
│   ├── ProductCard.jsx    # Individual product display component
│   ├── ProductList.jsx    # Component to display product list on page
│   ├── ProductModal.jsx   # Modal for detailed product view
│
├── pages/
│   └── Home.jsx           # Main landing page
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
├── index.css              # Global styling
└── vite.config.js         # Vite configuration
```

## Design Decisions

- **Component Architecture**: Used a modular component structure to promote reusability and maintainability.
- **State Management**: Used React's `useState` and `useEffect` hooks for state management without introducing Redux for simplicity.
- **Styling**: Used pure CSS for styling to demonstrate CSS proficiency.
- **API Interaction**: Implemented `fetch` calls directly in components where needed.
- **Error Handling**: Added basic error handling for API calls.

## Areas for Improvement

With more time, I would:

- Add proper state management with Redux or Context API.
- Implement more robust error handling and loading states.
- Add filtering by price range and other product attributes.
- Improve accessibility features.
- Add unit and integration tests.
- Implement an actual cart page functionality.
- Add a product reviews section.
- Optimize performance with `useMemo` and `useCallback` hooks.

## Technologies Used

- **React.js (Vite)**
- **React Router**
- **CSS**
- **FakeStore API**

