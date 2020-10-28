import React from 'react'
import {isMobile} from "react-device-detect";

const Spring = () =>{

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return(
        <div className={className}>
            <h2>Spring microservices</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do architektury</li>
                <ul>
                    - porównanie stylów programowania: monolith, modulith, microservices<br/>
                    - wady i zalety mikroserwisów<br/>
                    - język wzorców w architekturze mikroserwisów<br/>
                </ul>
                <li>dekompozycja od monolitu to mikroserwisów</li>
                <li>architektura bazy danych</li>
                <ul>
                    - wspólna baza danych<br/>
                    - baza danych per mikroserwis<br/>
                </ul>
                <li>spójność danych</li>
                <ul>
                    - agregaty<br/>
                    - zdarzenia domenow<br/>
                    - wzorzec Sagi<br/>
                    - event sourcing<br/>
                </ul>
                <li>komunikacja między mikroserwisami</li>
                <ul>
                    - REST<br/>
                    - circuit breaker<br/>
                    - service discovery<br/>
                    - messaging<br/>
                </ul>
                <li>pobieranie danych w architekturze mikroserwisów</li>
                <ul>
                    - API gateway i API composition<br/>
                    - CQRS<br/>
                </ul>
                <li>scentralizowana konfikuracja mikroserwisów</li>
                <li>monitoring mikroserwisów</li>
                <ul>
                    - healthcheck i monitoring<br/>
                    - zbieranie logów<br/>
                </ul>
                <li>instalacja i uruchomienie systemu opartego o mikroserwisy</li>
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

export default Spring;

