import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        border: '1px solid lightblue',
        paddingBottom: '10px',
        borderRadius: '5px solid lightgray',
        marginLeft: '10px',
        margin: '10px'
    }

    return (
        <div style={reviewItemStyle} className='review-item'>
            <h2 className="product-name">{name}</h2>
            <h3>Quantity:{quantity}</h3>
            <p><small>Price: {price} </small></p>
            <br />
            <button className='main-button' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;