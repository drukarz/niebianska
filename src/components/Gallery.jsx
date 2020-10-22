import React, {useState, useEffect} from 'react'

import viewImage from '../assets/images/gallery/view.jpg'
import codeImage from '../assets/images/gallery/code.jpg'
import mountainsImage from '../assets/images/gallery/mountains.jpg'
import wineImage from '../assets/images/gallery/wine.jpg'
import cloudsImage from '../assets/images/gallery/clouds.jpg'
import {Line} from 'react-lineto';

const Gallery = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div>
            <br/>
            <Line x0={width * 0.2} y0={110} x1={width - width * 0.2} y1={110} borderColor='black'/>
            <h1 className="page-header">GALERIA</h1>
            <Line x0={width * 0.2} y0={160} x1={width - width * 0.2} y1={160} borderColor='black'/>
            <br/>
            <div className={"about-text"}>
                <b>NIEBIAŃSKA SZKOŁA PROGRAMISTÓW</b> mieści się w pencjonacie Bliżej Nieba
                <br/>
                w miejscowści Wola Skrzydlańska.
                <br/>
                <br/>
                Zupełnie niedaleko. Zalewnie kilka kwadransów od gwarnego i klimatycznego Krakowa,
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

