import React from 'react'

const Docker = () =>{

    return(
        <div>
            <h2>Docker</h2>
            <br/>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do konteneryzacji : Docker, instalacja, CLI</li>
                <li>praca z kontenerami i obrazami : CLI, operacje na kontenerach i obrazach, praca z rejestrami, Dockerfile</li>
                <li>konteneryzacja własnej aplikacji</li>
                <li>komponowanie złożonych środowisk : Docker Compose</li>
                <li>klaster : Docker Swarm, zarz</li>
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



    <AccordionTab header="Konteneryzacja własnej aplikacji" style={{'fontSize': '2.5em'}}/>
    <AccordionTab header="Komponowanie złożonych środowisk - Docker Compose" style={{'fontSize': '2.5em'}}/>

    <AccordionTab header="Klaster" style={{'fontSize': '2.5em'}}>
        {
            toList(['Docker Swarm', 'zarządzanie', 'Portainer.io'])
        }
    </AccordionTab>
</Accordion>