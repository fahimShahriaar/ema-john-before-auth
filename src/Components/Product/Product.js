import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const handleAddProduct = props.handleAddProduct;
    const product = props.product;
    const { name, seller, price, stock, img, key } = product;
    // console.log(product);
    return (
        <div className="product">
            <div className="thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="heading-style"><Link to={"/product/"+key}>{name}</Link></h3>
                <p><small>{seller}</small></p>
                <p>{price}</p>
                <p><small>Only left {stock} in stock</small></p>
                {props.showAddToCart && <button onClick={() => handleAddProduct(product)} className="main-btn">add to cart</button>}
            </div>
        </div>
    );
};

export default Product;
