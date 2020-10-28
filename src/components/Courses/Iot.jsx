import React from 'react'
import {isMobile} from "react-device-detect";

const Iot = () =>{

    let className = !isMobile ? "common-font-15 course" : "common-font-15 course-mobile";

    return(
        <div className={className}>
            <h2>IoT</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie i historia</li>
                <ul>
                    - co to jest IoT <br/>
                    - przykłady istniejących systemów <br/>
                    - ewolucja systemów komputerowych, droga od "urządzeń zbierających dane i kontrolujących maszyny" do współczesnego IoT <br/>
                    - dlaczego IOT to przyszłość automatyzacji?<br/>
                </ul>
                <li>czujnik, sterownik, oraz "zarządca" jako podstawa każdego systemu IoT</li>
                <ul>
                    - implementacje czujników <br/>
                    - implementacje sterowników <br/>
                    - "zarządca" jako punt zbiorczy dla danych i decyzji <br/>
                    - jak komunikować ze sobą elementy <br/>
                    - przykład 1 : system do kontroli ogrzewania w budynku <br/>
                    - jak sprawić by system był rozszerzalny o nowe elementy? <br/>
                </ul>
                <li>sterowanie zdalne, rozszerzanie systemu, autonomia elementów IoT</li>
                <ul>
                    - typowe implementacje serwisów internetowych dla IoT <br/>
                    - autonomia składowych systemu <br/>
                    - przykład 2 : serwis http pozwalający na zarządzanie zdalne elementami z przykładu 1 <br/>
                    - przykład 3 : rozszerzenie systemu o nowe nieplanowane możliwości (kontrola klimatyzacji) <br/>
                </ul>
                <li>cięcie kosztów, ograniczania komunikacji, brak scentralizowanego źródła prawdy</li>
                <ul>
                    - problemy wynikające z rozproszenia systemu w przestrzeni <br/>
                    - problemy wynikające z ograniczonego pasma komunikacji <br/>
                    - problemy wynikające z używania różnorodnych urządzeń i technik <br/>
                    - typowe implementacje urządzeń pośrednich <br/>
                    - wykorzystanie telefonów komórkowych <br/>
                    - mikroserwisy <br/>
                    - przykład 4 : Sterowanie z systemu android <br/>
                    - przykład 5 : Sterowanie z urządzenia posiadającego wyświetlacz <br/>
                </ul>
                <li>chmura, rozwiązania nietypowe</li>
                <ul>
                    - przykłady istniejących gotowych rozwiązań dla branży IoT <br/>
                    - integracja z zewnętrznymi serwisami <br/>
                    - HA <br/>
                    - analiza big data <br/>
                    - więcej niż zwykłe aktualizacje (mechanizmy samouczące w branży robotycznej) <br/>
                    - przykłady rozwiązań nietypowych (samochody autonomiczne) <br/>
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

export default Iot;

