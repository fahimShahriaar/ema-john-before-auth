import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div className="review-item">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <button onClick={() => { props.removeItem(key) }} className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;