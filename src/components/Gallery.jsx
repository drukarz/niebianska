import React from 'react'

import viewImage from '../assets/images/gallery/view.jpg'
import codeImage from '../assets/images/gallery/code.jpg'
import mountainsImage from '../assets/images/gallery/mountains.jpg'
import wineImage from '../assets/images/gallery/wine.jpg'
import cloudsImage from '../assets/images/gallery/clouds.jpg'
import {usePageTitle} from "../hooks/usePageTitle";
import {isMobile} from "react-device-detect";

const Gallery = () => {

    let pageTitle = usePageTitle("GALERIA");
    let className = "about-text common-font-15";

    if(isMobile) {
        pageTitle = <div style={{textAlign: "center"}}>GALERIA</div>;
        className = "about-text-mobile common-font-15";
    }

    return (
        <div>
            <br/>
            {pageTitle}
            <br/>
            <div className={className}>
                <b>NIEBIAŃSKA SZKOŁA PROGRAMISTÓW</b> mieści się w pensjonacie Bliżej Nieba
                <br/>
                w miejscowości Wola Skrzydlańska.
                <br/>
                <br/>
                Zupełnie niedaleko. Zaledwnie kilka kwadransów od gwarnego i klimatycznego Krakowa,
                <br/>
                gdzie można wstąpić na aromatyczną kawę.
                <br/>
                <br/>
                Jesteśmy w pięknej, wolnej przestrzeni, w któej będziesz mógł uczyć się w skupieniu
                <br/>
                a potem poszaleć lub odpocząć wśród natury.
                <br/>
                <br/>
                Całą galerię zobaczysz :
                <a className="link-text" style={{fontSize: 20}} href="https://blizejnieba.eu/galeria">tutaj</a>
            </div>
            <br/>
            <br/>
            <img src={codeImage} className={"gallery-img"}/>
            <img src={mountainsImage} className={"gallery-img"}/>
            <img src={wineImage} className={"gallery-img"}/>
            <img src={cloudsImage} className={"gallery-img"}/>
            <img src={viewImage} className={"img"}/>
        </div>

    );
}

export default Gallery;

