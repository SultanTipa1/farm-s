// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import store from './redux/store';

// Importing Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FilterSidebar from './components/FilterSidebar';

// Importing Pages
import Home from './pages/Home';
import AnimalDetail from './pages/AnimalDetail';
import AnimalListing from './pages/AnimalListing';
import Login from './pages/Login';

// Import Global Styles
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />

            {/* Routes for navigation */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/animals" element={<AnimalListing />} />
              <Route path="/animals/:id" element={<AnimalDetail />} />
              <Route path="/Filtersidebar" element={<FilterSidebar />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
