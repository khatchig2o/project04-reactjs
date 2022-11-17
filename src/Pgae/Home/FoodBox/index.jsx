import React from "react";

export default function FoodBox({box}){
    return<div>
        <img src={box.img} alt={box.alt}/>
        <h2>{box.header}</h2>
        <p>{box.description}</p>
        <p className='price'>{box.price}</p>
    </div>
}