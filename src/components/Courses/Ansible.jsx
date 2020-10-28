import React from 'react'
import {isMobile} from "react-device-detect";

const Ansible = () => {

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return (
        <div className={className}>
            <h2>Ansible</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do DevOps – ogólny zarys</li>
                <li>Anisble w teorii - podstawowe pojęcia</li>
                <li>Ansible Control Machine (instalacja, uruchomienie połączeń SSH/WinRM do hostów)</li>
                <li>inwentarze : konstruowanie własnych inwentarzy, inwentarze dynamiczne</li>
                <li>deployment : konfiguracja Ansible i połączenie z hostami, komendy ad hoc</li>
                <li>elementy składowe : playbooks, variables, facts, loops, debug</li>
                <li>własne moduły</li>
                <li>Ansible Galaxy</li>
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

export default Ansible;


