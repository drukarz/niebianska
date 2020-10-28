import React, { useState} from 'react'
import ansible from '../assets/images/courses/ANSIBLE.png'
import ansible_h from '../assets/images/courses/ANSIBLE_mouse over.png'
import docker from '../assets/images/courses/DOCKER.png'
import docker_h from '../assets/images/courses/DOCKER_mouse over.png'
import hapi from '../assets/images/courses/HAPI.png'
import hapi_h from '../assets/images/courses/HAPI_mouse over.png'
import iot from '../assets/images/courses/IoT.png'
import iot_h from '../assets/images/courses/IoT_mouse over.png'
import net from '../assets/images/courses/NET.png'
import net_h from '../assets/images/courses/NET_mouse over.png'
import react from '../assets/images/courses/REACT.png'
import react_h from '../assets/images/courses/REACT_mouse over.png'
import scrum from '../assets/images/courses/SCRUM.png'
import scrum_h from '../assets/images/courses/SCRUM_mouse over.png'
import spring from '../assets/images/courses/SPRING.png'
import spring_h from '../assets/images/courses/SPRING_mouse over.png'
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {usePageTitle} from "../hooks/usePageTitle";
import {isMobile} from "react-device-detect";

const Courses = ()=> {

    const [ansibleImage, setAnsibleImage] = useState(ansible);
    const [dockerImage, setDockerImage] = useState(docker);
    const [hapiImage, setHapiImage] = useState(hapi);
    const [iotImage, setIotImage] = useState(iot);

    const [netImage, setNetImage] = useState(net);
    const [reactImage, setReactImage] = useState(react);
    const [scrumImage, setScrumImage] = useState(scrum);
    const [springImage, setSpringImage] = useState(spring);

    let history = useHistory();

    let pageTitle = usePageTitle("KURSY");

    if(isMobile) {
        pageTitle = <div style={{textAlign: "center"}}>KURSY</div>;
     }

    return(

            <div>
                <br/>
                {pageTitle}
                <br/>
                <br/>
                <p style={{ textAlign: 'center'}}>
                    <img src={ansibleImage} onMouseOver={() => setAnsibleImage(ansible_h)}
                         onMouseLeave={() => setAnsibleImage(ansible)}
                         onClick={() => history.push("/ansible")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={dockerImage} onMouseOver={() => setDockerImage(docker_h)}
                         onMouseLeave={() => setDockerImage(docker)}
                         onClick={() => history.push("/docker")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={hapiImage} onMouseOver={() => setHapiImage(hapi_h)}
                         onMouseLeave={() => setHapiImage(hapi)}
                         onClick={() => history.push("/hapi")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={iotImage} onMouseOver={() => setIotImage(iot_h)}
                         onMouseLeave={() => setIotImage(iot)}
                         onClick={() => history.push("/iot")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <br/>
                    <img src={netImage} onMouseOver={() => setNetImage(net_h)}
                         onMouseLeave={() => setNetImage(net)}
                         onClick={() => history.push("/net")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={reactImage} onMouseOver={() => setReactImage(react_h)}
                         onMouseLeave={() => setReactImage(react)}
                         onClick={() => history.push("/react")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={scrumImage} onMouseOver={() => setScrumImage(scrum_h)}
                         onMouseLeave={() => setScrumImage(scrum)}
                         onClick={() => history.push("/scrum")}
                         className="img-space" style={{width: 200, height: 200}}/>
                    <img src={springImage} onMouseOver={() => setSpringImage(spring_h)}
                         onMouseLeave={() => setSpringImage(spring)}
                         onClick={() => history.push("/spring")}
                         className="img-space" style={{width: 200, height: 200}}/>
                </p>
                <br/>
                <div style={{ textAlign: 'center'}}>
                    <Link className="link-text" to="/harmonogram">TERMINY</Link>
                </div>
             </div>

    );
}

export default Courses;