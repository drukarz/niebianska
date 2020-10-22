import React from 'react'

const Docker = () =>{

    return(
        <div style={{marginLeft: '20%'}}>
            <h2>Docker</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do konteneryzacji : Docker, instalacja, CLI</li>
                <li>praca z kontenerami i obrazami : CLI, operacje na kontenerach i obrazach, praca z rejestrami, Dockerfile</li>
                <li>konteneryzacja własnej aplikacji</li>
                <li>komponowanie złożonych środowisk : Docker Compose</li>
                <li>klaster : Docker Swarm, zarządzanie, Portainer.io</li>
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

export default Docker;
