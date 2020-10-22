import React, {useEffect, useState} from 'react'
import {Line} from 'react-lineto';

export default function Offer(){

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    const textStyle = {

        columnCount: "2",
        columnGap: "100px",
        marginLeft: "25%",
        marginRight: "25%",
        textAlign: "justify",
        fontSize: "15px",
        height: "50%"
    }

    const mobileTextStyle = {

        columnCount: "1",
        columnGap: "10px",
        marginLeft: "25%",
        marginRight: "25%",
        textAlign: "justify",
        fontSize: "10px",
        height: "50%"
    }

    return(
        <div>
            <br/>
            <Line x0={width * 0.2} y0={110} x1={width - width * 0.2} y1={110} borderColor='black'/>
            <h1 className="page-header">OFERTA</h1>
            <Line x0={width * 0.2} y0={160} x1={width - width * 0.2} y1={160} borderColor='black'/>
            <br/>
            <div style={textStyle}>
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