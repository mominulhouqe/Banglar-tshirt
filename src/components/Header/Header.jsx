import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/contact">Contact</Link>
                   
                </ul>
            </nav>




        </div>
               
        
    );
};

export default Header;