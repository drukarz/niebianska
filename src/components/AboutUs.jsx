import React, {useEffect, useState} from 'react'
import codeImage from '../assets/images/code.png'
import {Line} from 'react-lineto';

const AboutUs = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return(
        <div>
            <br/>
            <Line x0={width * 0.2} y0={110} x1={width - width * 0.2} y1={110} borderColor='black'/>
            <h1 className="page-header">O NAS</h1>
            <Line x0={width * 0.2} y0={160} x1={width - width * 0.2} y1={160} borderColor='black'/>
            <br/>
            <div className={"about-text"}>
                Jesteśmy grupą ludzi, którzy cenią sobie dobrą atmosferę i miłe otoczenie.
                <br/>
                <br/>
                Jesteśmy także, a może przede wszystkim związani z programowaniem.
                <br/>
                Programowanie to nie tylko nasza praca ale także hobby.  Wspólnie mamy ponad
                100 lat dświadczenia ;).
                <br/>
                <br/>
                Dlatego chcemy się podzielić z Wami naszą wiedzą.
                <br/>
                <br/>
                Nieprzypadkowo tutaj, blisko natury w "tak pięknych okolicznościach przyrody".
                <br/>
                <br/>
                <div className="list-turn-to">
                    zwracamy się do :
                    <ul>
                        <li>programistów</li>
                        <li>scrum masterów</li>
                        <li>osób związanych z branżą IT</li>
                    </ul>
                </div>
            </div>
            <br/>
            <img src={codeImage} className={"img"}/>
        </div>
    );
}

export default AboutUs;