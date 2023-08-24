import React from 'react'
import { products } from './data.js';


const card = () => {
    return (
        <div className="container w-full ">
            <div className="flex flex-wrap justify-center">
                {products.map(product => (
                    <div className=" m-5 shadow-md lg:w-1/5 w-2/5 
                    " product={product} key={product.id}>
                        <img src={product.imageUrl} alt={product.title} className=" " />
                        <h4 className="lg:text-2xl text-zinc-900 capitalize font- font-semibold px-2 py-2">{product.title}</h4>
                        <h3 className="lg:text-xl text-zinc-900 capitalize px-2 pb-2">${product.price}</h3>
                    </div>
                ))}
            </div >
        </ div>
    );
};


export default card;


