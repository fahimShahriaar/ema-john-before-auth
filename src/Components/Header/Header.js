import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/review">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory Here</Link></li>
                </ul>   
            </nav>
            
            <div className="search-bar">
                <input type="search" name="" id="search-field" placeholder="type here to search"/>
                <FontAwesomeIcon icon={faShoppingCart} className="fontColor"/>
            </div>
        </div>
    );
};

export default Header;