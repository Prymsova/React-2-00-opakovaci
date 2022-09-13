import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const {id} = useParams();

    const [productDetail, setProductDetail] = useState([])
    const {image, name} = productDetail

    useEffect(() => {
        fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
        .then(res => res.json())
        .then(res1 => {
        console.log(res1);
        setProductDetail(res1);
        })
        
    }, [] );

    return (
        <div className="productDetail">
            <div className="productDetail__image">
                <img src={image} alt={name} />
            </div>
            <div className="productDetail__description">
                <h3>{name}</h3>
                <button className="buy">Objednat</button>
            </div>
        </div>
    )
}

export default ProductPage;