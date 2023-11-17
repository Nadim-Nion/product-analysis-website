import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header'>
            <ActiveLink to="/">HOME</ActiveLink>
            <ActiveLink to="/reviews">REVIEWS</ActiveLink>
            <ActiveLink to="/dashboard">DASHBOARD</ActiveLink>
            <ActiveLink to="/blogs">BLOGS</ActiveLink>
            <ActiveLink to="/about">ABOUT</ActiveLink>
        </nav>
    );
};

export default Header;