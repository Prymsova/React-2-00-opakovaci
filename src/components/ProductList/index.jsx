import React from "react";
import Product from "../Product";


const ProductList = ( { products }) => {
    return (
        <div className="productList">
            {products.map(p => <Product key={p.id} id={p.id} name={p.name} image={p.image}/>)}
        </div>
    )
};

export default ProductList;