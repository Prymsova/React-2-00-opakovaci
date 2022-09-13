import React from "react";
import { Link } from "react-router-dom";

const Product = ( {id, name, image} ) => {

    return (
        <Link to={`/product/${id}`}>
            <div className="product">
                <img src={ image } alt={ name } />
                <h3>{ name }</h3>
            </div>
        </Link>
    )
};

export default Product;