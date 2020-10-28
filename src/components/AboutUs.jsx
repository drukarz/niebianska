import React from 'react'
import codeImage from '../assets/images/code.png'
import {usePageTitle} from "../hooks/usePageTitle";
import {isMobile} from "react-device-detect";

const AboutUs = () => {


    let pageTitle = usePageTitle("O NAS");
    let className = "about-text common-font-15";

    if(isMobile) {
        pageTitle = <div style={{textAlign: "center"}}>O NAS</div>;
        className = "about-text-mobile common-font-15";
    }

    return(
        <div>
            <br/>
            {pageTitle}
            <br/>
            <br/>
            <div className={className}>
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
                <div className="common-font-15 list-turn-to">
                    Zwracamy się do :
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