import {useEffect, useState} from 'react'
import {Line} from "react-lineto";
import React from "react";

export const usePageTitle = (title) =>{

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return(
        <div>

            <Line x0={width * 0.2} y0={165} x1={width - width * 0.2} y1={165} borderColor='black'/>
            <br/>
            <h1 className="page-header">{title}</h1>
            <Line x0={width * 0.2} y0={225} x1={width - width * 0.2} y1={225} borderColor='black'/>
        </div>);
}