import React, {useState} from 'react'
import {Card} from 'primereact/card';
import {Dropdown} from 'primereact/dropdown';

import ansibleLogo from '../assets/images/courses/ANSIBLE_logo.png'
import dockerLogo from '../assets/images/courses/DOCKER_logo.png'
import hapiLogo from '../assets/images/courses/HAPI_logo.png'
import iotLogo from '../assets/images/courses/IOT_logo.png'
import netLogo from '../assets/images/courses/NET_logo.png'
import reactLogo from '../assets/images/courses/REACT_logo.png'
import scrumLogo from '../assets/images/courses/SCRUM_logo.png'
import springLogo from '../assets/images/courses/SPRING_logo.png'
import {isMobile} from "react-device-detect";

export default function Schedule(){

    const courses = [
        { name: 'Ansible'},
        { name: 'Docker'},
        { name: 'Hapi JS'},
        { name: 'IoT'},
        { name: '.Net mikroserwisy'},
        { name: 'React JS'},
        { name: 'Scrum'},
        { name: 'Spring mikroserwisy'}
    ];

    const coursesAndDates = [
        { name: 'React JS', date: '7-9 Grudzień 2020', logo: reactLogo},
        { name: 'Spring mikroserwisy', date: '14-16 Grudzień 2020', logo: springLogo}
    ]

    const [selectedCourse, setSelectedCourse] = useState('');

    return(
        <div className={!isMobile ? "schedule" : "schedule-mobile"}>
            <br/>
            <Dropdown className={!isMobile ? "schedule-dropdown" : "schedule-dropdown-mobile"} value={selectedCourse} options={courses}
                      onChange={(event) => {setSelectedCourse(event.value)}}
                      optionLabel="name" placeholder="Znajdź kurs"/>
            <br/>

                {coursesAndDates.map((item) => {

                       if(selectedCourse === '' || selectedCourse.name === item.name){
                            return (<div>
                                    <Card title={item.name} className={!isMobile ? "schedule-card" : "schedule-card-mobile"}>
                                        <img src={item.logo} className="schedule-card-logo"/>
                                        <p style={{lineHeight: '1.5'}}>
                                            data: {item.date}
                                        </p>
                                    </Card>
                                    <br/>
                                    </div>)
                        }

                })}

        </div>
    );
}