import React from 'react';
import Styles from './Item.module.css'
const Item = (props) => {
    const {image,  name, category, price } = props.food;
    return (
        <div className={Styles.singleFood}>
            <h3>Food Item Image:</h3>
            <img src={image} alt="" />

            <h2>Name:{name}</h2>
            <h3>Category:{category}</h3>
            <h4>Price:{price}</h4>

        </div>
    );
};

export default Item;