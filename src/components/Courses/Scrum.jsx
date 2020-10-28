import React from 'react'
import {isMobile} from "react-device-detect";

const Scrum = () =>{

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return(
        <div className={className}>
            <h2>Scrum</h2>
            <h3>Program</h3>
            <ul>
                <li>metodyki zwinne - ogólna wiedza</li>
                <li>Agile vs Scrum</li>
                <li>inne metodyki zwinne, porównanie z modelem kaskadowym</li>
                <li>zasady agile</li>
                <li>Scrum : zdarzenia, role, artefakty</li>
                <li>Warsztat pracy SM</li>
                <ul>
                    - monitorowanie przebiegu prac (metryki)<br/>
                    - rozwiązywanie problemów<br/>
                    - pomysły na retrospekcje<br/>
                    - planowanie w Agile<br/>
                    - praca z zespołem<br/>
                    - cechy zespołu developerów, jak je rozwijać ?<br/>
                    - cechy Scrum Mastera<br/>
                </ul>
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

export default Scrum;



