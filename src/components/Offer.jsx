import React from 'react'
import {usePageTitle} from "../hooks/usePageTitle";
import {isMobile} from "react-device-detect";

export default function Offer(){

    let pageTitle = usePageTitle("OFERTA");
    let className = "offer-text common-font-15";

    if(isMobile) {
        pageTitle = <div style={{textAlign: "center"}}>OFERTA</div>;
        className = "offer-text-mobile common-font-15";
    }

    return(
        <div>
            <br/>
            {pageTitle}
            <br/>
            <br/>
            <div className={className}>
                Jeśli jesteś osobą związaną z branżą IT, bądź masz takie aspiracje to byc może zainteresuje Cię nasza oferta.
                <br/>
                <br/>
                W świecie dynamicznych zmian technologii informatycznych poszerzanie wiedzy jest niezbędnym elementem w naszej
                pracy.
                <br/>
                Nowe narzędzia, języki programowania, biblioteki, architektury, frameworki - uff. Do tego realizacja codziennych
                zadań - kodu domenowego, testów, utrzymania.
                <br/>
                <br/>
                Efekt - uczymy się nowych technologii i narzędzi w pośpiechu, "ślizgając" sie po szczycie rozwiązania, bo
                wykres spalania jest najważniejszy.
                <br/>
                <br/>

                A może choć na chwilę zamieszkać w górskim zaciszu, odciąć się od supportu i w spokoju nauczyć się czegoś
                nowego?
                <br/>
                Poszerzyć swoją wiedzę w kilkuosobowej grupie a po zajęciach wyskoczyć na narty na pobliski stok
                w Kasinie. Albo wybrać się na wycieczkę w okolicach Śnieżnicy, pieszo, a dla "nieco zwariowanych" downhill
                na stoku Śnieżnicy.
                    Oferujemy także miły wypoczynek w naszym przytulnym SPA.
                <br/>
                <br/>
                My, programiści i scrum masterzy mamy wiele lat doświadczenia w kodowaniu, scrumowaniu i prowadzeniu kursów.
                    Podzielimy się z Wami wiedzą. Odcięci od biura nauczycie się czegoś pożytecznego. Nie będzieci musieli
                wertować dokumentacji, nie stracicie czasu, nie pozwolimy Wam trafić na "koniec internetu".
                <br/>
                <br/>
                Nasza kuchnia, wygodnie pokoje i świeże
                powietrze na pewno pomoże Wam w zdobyciu wiedzy.
            </div>
        </div>
    );
}