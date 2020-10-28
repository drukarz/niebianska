import React from 'react'
import {isMobile} from "react-device-detect";

const Hapi = () =>{

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return (
        <div className={className}>
            <h2>Hapi JS</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do Hapi jako alternatywy dla Express JS</li>
                <li>przgotowanie środowiska i konfiguracja</li>
                <li>plugins</li>
                <li>obsługa cache i ciasteczek</li>
                <li>routes</li>
                <li>walidacja Joi</li>
                <li>tworzenie REST API</li>
                <li>autentyfikacja i autoryzacja</li>
                <li>przydatne moduły - integracja z bazą danych PostgreSQL</li>
            </ul>
            <h3>Cena i zakres</h3>
            Cena kursu : 1200 netto (przy 6 osobach) obejmuje :
            <ul>
                <li>zajęcia w grupie maksymalnie 8-osobowej</li>
                <li>2 dni zajęciowe (16 godzin)</li>
                <li>pobyt (1 nocleg) w pensjonacie "Bliżej Nieba" znajdującym się w Woli Skrzydlańskiej</li>
                <li>wyżywienie - śniadanie + 2 obiadokolacje</li>
                <li>możliwość skorzystania ze spa (sauna fińska i infrared) na terenie pensjonatu</li>
            </ul>
        </div>
    );
}

export default Hapi;

