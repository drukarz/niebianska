import React from 'react'
import homeImage from '../assets/images/home.png'
import homeMobileImage from '../assets/images/home-mobile.jpg'
import {isMobile} from "react-device-detect";

export default function Home(){

    let image = !isMobile ? homeImage : homeMobileImage;

    return(
        <div className={"box"}>
            <img src={image} className={"img"}/>
        </div>
    );
}

