import React, { useEffect, useState } from "react";
import FoodBox from "./FoodBox";

import img1 from "../../assets/images/salad.jpg"
import img2 from "../../assets/images/pizza.jpg"
import img3 from "../../assets/images/noodles.jpg"
import img4 from "../../assets/images/noodels.jpg"
import img5 from "../../assets/images/05.jpg"
import img6 from "../../assets/images/06.jpg"
import img7 from "../../assets/images/07.jpg"
import img8 from "../../assets/images/08.jpg"
import lastpic from "../../assets/images/avoca.jpg"


export default function Home() {
    const [images, setimages] = useState([])

    useEffect(() => {
        setimages([
            { "img": img1 , "alt": "img", "header": "Fusce dictum finibus", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan","price" :" $45 / $55" },
            { "img": img2 , "alt": "img", "header": "Aliquam sagittis", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $65 / $70"},
            { "img": img3 , "alt": "img", "header": "Sed varius turpis", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $30.5"},
            { "img": img4 , "alt": "img", "header": "Aliquam sagittis", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $25.50"},
            { "img": img5 , "alt": "img", "header": "Maecenas eget justo", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $80.25"},
            { "img": img6 , "alt": "img", "header": "Quisque et felis eros", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $20 / $40 / $60"},
            { "img": img7 , "alt": "img", "header": "Sed ultricies dui", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" ,"price" :" $94"},
            { "img": img8 , "alt": "img", "header": "Donec porta consequat", "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan","price" :" $15" }
        ])
    }, [])

    return <>
        <section className='section1'>
            <div className='G-container'>
                <h1>Welcome to Simple House</h1>
                <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            </div>
        </section>
        <section className='section2'>
            <div className='G-justify-center '>
                <ul className='G-flex'>
                    <li className='active'>All</li>
                    <li>Pizza</li>
                    <li>Salad</li>
                    <li>Noodle</li>
                </ul>
            </div>
            <div className="G-flex-wrap food-boxs">
                {images.map((box, index) => (
                    <FoodBox
                        box={box}
                        key={index}
                    />
                ))}
            </div>
        </section>
        <section className='section3 G-flex G-container'>
            <img src={lastpic} alt="avocado"/>
            <div>
                <h2>Maecenas nulla neque</h2>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                <button type="submit">Read more</button>
            </div>
        </section>
    </>
}