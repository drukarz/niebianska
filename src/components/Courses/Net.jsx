import React from 'react'
import {isMobile} from "react-device-detect";

const Net = () =>{

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return (
        <div className={className}>
            <h2>.NET micorservices</h2>
            <h3>Program</h3>
            <ul>
                <li>architektura</li>
                <li>komunikacja</li>
                <ul>
                    - REST<br/>
                    - gRPC<br/>
                    - RabbitMq
                </ul>
                <li>persystencja EF CORE</li>
                <li>spójność danych</li>
                <li>resillence</li>
                <li>Polly Circuit Breaker</li>
                <li>service discovery</li>
                <li>monitoring i zbieranie danych</li>
            </ul>
            <h3>Cena i zakres</h3>
            Cena kursu : 1800 netto (przy 6 osobach) obejmuje :
            <ul>
                <li>zajęcia w grupie maksymalnie 8-osobowej </li>
                <li>3 dni zajęciowe (24 godziny)</li>
                <li>pobyt (2 noclegi) w pensjonacie "Bliżej Nieba" znajdującym się w Woli Skrzydlańskiej </li>
                <li>wyżywienie - 2 śniadania + 3 obiadokolacje</li>
                <li>możliwość skorzystania ze spa (sauna fińska i infrared) na terenie pensjonatu</li>
            </ul>
        </div>
    );
}

export default Net;


