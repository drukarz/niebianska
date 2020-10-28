import React from 'react'
import logoFooter from '../assets/images/logo_footer.png'
import {isMobile} from "react-device-detect";

export default function Contact(){

    let fontSize = !isMobile ? "20px" : "15px";

    return(
        <div className="contact-background">
            <br/>
            <br/>
            <img className="contact-logo" src={logoFooter} alt="logo"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={{ fontSize: fontSize }}>
                pensjonat "Bliżej Nieba" Wola Skrzydlańska 128
                <br/>
                    <br/>
                niebianskaszkolaprogramistow@gmail.com
                <br/>
                    <br/>
                tel.: +48784654272
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}