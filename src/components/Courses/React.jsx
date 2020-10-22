import React from 'react'

const ReactJs = () => {

    return (
        <div style={{marginLeft: '20%'}}>
            <h2>React JS</h2>
            <h3>Program</h3>
            <ul>
                <li>wprowadzenie do architektury (virtual DOM, one way binding)</li>
                <li>podstawowowe elementy (JSX, komponenty klasowe i funkcyjne, właściwości komponentu, stan)</li>
                <li>metody cyklu życia</li>
                <li>wzorce projektowe (HOC, render props)</li>
                <li>Hooks</li>
                <li>granice błędów, konteksty, referencje</li>
                <li>zarządzanie stanem aplikacji : Redux, Context API</li>
                <li>popularne biblioteki : React Router, Primereact, Konva</li>
                <li>autentyfikacja i autoryzajca aplikacj w oparciu o JWT</li>
                <li>uruchamianie aplikacji na produkcji</li>
                <li>aplikacja responsywna</li>
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

export default ReactJs;