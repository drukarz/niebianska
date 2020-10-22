import React from 'react'

const Iot = () =>{

    return(
        <div style={{marginLeft: '20%'}}>
            <h2>IoT</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie i historia</li>
                <ul>
                    <li>co to IoT</li>
                    <li>przykłady istniejących systemów</li>
                    <li>ewolucja systemów komputerowych, droga od "urządzeń zbierających dane i kontrolujących maszyny" do współczesnego IoT</li>
                    <li>dlaczego IOT to przyszłość automatyzacji?</li>
                </ul>
                <li>czujnik, sterownik, oraz "zarządca" jako podstawa każdego systemu IoT</li>
                <ul>
                    <li>implementacje czujników</li>
                    <li>implementacje sterowników</li>
                    <li>"zarządca" jako punt zbiorczy dla danych i decyzji</li>
                    <li>jak komunikować ze sobą elementy</li>
                    <li>przykład 1 : system do kontroli ogrzewania w budynku</li>
                    <li>jak sprawić by system był rozszerzalny o nowe elementy?</li>
                </ul>
                <li>sterowanie zdalne, rozszerzanie systemu, autonomia elementów IoT</li>
                <ul>
                    <li>typowe implementacje serwisów internetowych dla IoT</li>
                    <li>autonomia składowych systemu</li>
                    <li>przykład 2 : serwis http pozwalający na zarządzanie zdalne elementami z przykładu 1</li>
                    <li>przykład 3 : rozszerzenie systemu o nowe nieplanowane możliwości (kontrola klimatyzacji)</li>
                </ul>
                <li>cięcie kosztów, ograniczania komunikacji, brak scentralizowanego źródła prawdy</li>
                <ul>
                    <li>problemy wynikające z rozproszenia systemu w przestrzeni</li>
                    <li>problemy wynikające z ograniczonego pasma komunikacji</li>
                    <li>problemy wynikające z używania różnorodnych urządzeń i technik</li>
                    <li>typowe implementacje urządzeń pośrednich</li>
                    <li>wykorzystanie telefonów komórkowych</li>
                    <li>mikroserwisy</li>
                    <li>przykład 4 : Sterowanie z systemu android</li>
                    <li>przykład 5 : Sterowanie z urządzenia posiadającego wyświetlacz</li>
                </ul>
                <li>chmura, rozwiązania nietypowe</li>
                <ul>
                    <li>przykłady istniejących gotowych rozwiązań dla branży IoT</li>
                    <li>integracja z zewnętrznymi serwisami</li>
                    <li>HA</li>
                    <li>analiza big data</li>
                    <li>więcej niż zwykłe aktualizacje (mechanizmy samouczące w branży robotycznej)</li>
                    <li>przykłady rozwiązań nietypowych (samochody autonomiczne)</li>
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

