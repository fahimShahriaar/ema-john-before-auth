import React, { useState, useEffect } from 'react';
import './Review.css'
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
        setOrderPlaced(true);
    }

    const removeItem = (key) => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }

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

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="ThankYouForPurchasing"></img>
    }

    return (
        <div className="review-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeItem={removeItem} key={pd.key}></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;