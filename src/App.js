import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Offer from "./components/Offer";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Nav from "./components/Nav/Nav";
import Courses from "./components/Courses";
import Ansible from "./components/Courses/Ansible";
import Docker from "./components/Courses/Docker";
import Hapi from "./components/Courses/Hapi";
import Iot from "./components/Courses/Iot";
import Net from "./components/Courses/Net";
import ReactJs from "./components/Courses/React";
import Scrum from "./components/Courses/Scrum";
import Spring from "./components/Courses/Spring";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {

    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 1000));
    }

    useEffect(() => {
        fakeRequest().then(() => {
            const el = document.querySelector(".loader-container");
            if (el) {
                el.remove();
                setLoading(!isLoading);
            }
        });
    }, []);

    if (isLoading) {
        return null;
    }

    let content = <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/o-nas" component={AboutUs}/>
                    <Route path="/oferta" component={Offer} />
                    <Route path="/galeria" component={Gallery}/>
                    <Route path="/kursy" component={Courses} />
                    <Route path="/kontakt" component={Contact}/>
                    <Route path="/ansible" component={Ansible}/>
                    <Route path="/docker" component={Docker}/>
                    <Route path="/hapi" component={Hapi}/>
                    <Route path="/iot" component={Iot}/>
                    <Route path="/net" component={Net}/>
                    <Route path="/react" component={ReactJs}/>
                    <Route path="/scrum" component={Scrum}/>
                    <Route path="/spring" component={Spring}/>
                    <Route path="/harmonogram" component={Schedule}/>
                </Switch>
            </Router>
        </div>


    return content;
}

export default App;
