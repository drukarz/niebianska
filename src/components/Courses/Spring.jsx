import React from 'react'

const Spring = () =>{

    return(
        <div style={{marginLeft: '20%'}}>
            <h2>Spring microservices</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do architektury</li>
                <ul>
                    <li>porównanie stylów programowania: monolith, modulith, microservices</li>
                    <li>wady i zalety mikroserwisów</li>
                    <li>język wzorców w architekturze mikroserwisów</li>
                </ul>
                <li>dekompozycja od monolitu to mikroserwisów</li>
                <li>architektura bazy danych</li>
                <ul>
                    <li>wspólna baza danych</li>
                    <li>baza danych per mikroserwis</li>
                </ul>
                <li>spójność danych</li>
                <ul>
                    <li>agregaty</li>
                    <li>zdarzenia domenow</li>
                    <li>wzorzec Sagi</li>
                    <li>event sourcing</li>
                </ul>
                <li>komunikacja między mikroserwisami</li>
                <ul>
                    <li>REST</li>
                    <li>circuit breaker</li>
                    <li>service discovery</li>
                    <li>messaging</li>
                </ul>
                <li>pobieranie danych w architekturze mikroserwisów</li>
                <ul>
                    <li>API gateway i API composition</li>
                    <li>CQRS</li>
                </ul>
                <li>scentralizowana konfikuracja mikroserwisów</li>
                <li>monitoring mikroserwisów</li>
                <ul>
                    <li>healthcheck i monitoring</li>
                    <li>zbieranie logów</li>
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

