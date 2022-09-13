import React, { useEffect, useState } from 'react';
import ProductList from "../ProductList";


const HomePage = ({products}) => {

    //console.log(`konzole z homepage ${products}`)

    return (
        <>
            <h2>Aktuální nabídka</h2>
            <p>Nejnovější prémiové produkty od předních českých designerů.</p>
            <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
            <ProductList products={ products } />
        </>  
    ) 
};

export default HomePage;