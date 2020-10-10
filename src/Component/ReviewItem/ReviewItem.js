import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key, price, img } = props.product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="prd pic" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <h3>Quantity:{quantity}</h3>
                <p><small>Price: {price} </small></p>
                <br />
                <button className='main-button' onClick={() => props.removeProduct(key)}>Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;