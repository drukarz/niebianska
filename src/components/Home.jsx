import React from 'react'
import homeImage from '../assets/images/home.png'

export default function Home(){

    return(
        <div className={"box"}>
            <img src={homeImage} className={"img"}/>
        </div>
    );
}

