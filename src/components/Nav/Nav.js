import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";
import './Nav.css'

const Nav = props => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (

        <nav className="NavbarItems">
        <h5 className="logo">SZKOŁA PROGRAMOWANIA</h5>

            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <div key={index}>
                            <Link className={item.className} to={item.url}>{item.title}</Link>
                        </div>
                    )
                })}
            </div>
        </nav>  );

};

export default Nav;

