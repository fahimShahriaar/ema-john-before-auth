import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const keys = Object.keys(savedCart);
        const products = keys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(products);
    }, [])

    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        console.log(sameProduct);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = product.quantity + 1;
            product.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }


        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct} showAddToCart={true} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;