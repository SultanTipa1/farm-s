import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/animals">Browse Animals</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
    </nav>
);

export default Navbar;
