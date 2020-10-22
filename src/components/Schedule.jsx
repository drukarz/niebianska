import React, {useState} from 'react'
import {Card} from 'primereact/card';
import {Dropdown} from 'primereact/dropdown';

export default function Schedule(){

    const courses = [
        { name: 'Ansible'},
        { name: 'Docker'},
        { name: 'Hapi JS'},
        { name: 'IoT'},
        { name: '.Net'},
        { name: 'React JS'},
        { name: 'Scrum'},
        { name: 'Spring mikroserwisy'}
    ];

    const coursesAndDates = [
        { name: 'Ansible', date: 'xxxx-xx-xx'},
        { name: 'Docker', date: 'xxxx-xx-xx'},
        { name: 'Hapi JS', date: 'xxxx-xx-xx'},
        { name: 'IoT', date: 'xxxx-xx-xx'},
        { name: 'Ansible', date: 'xxxx-xx-xx'},
        { name: 'Docker', date: 'xxxx-xx-xx'},
        { name: '.Net', date: 'xxxx-xx-xx'},
        { name: 'IoT', date: 'xxxx-xx-xx'}
    ]

    const [selectedCourse, setSelectedCourse] = useState('');

    return(
        <div>
            <br/>
            <Dropdown value={selectedCourse} options={courses} onChange={(event) => {setSelectedCourse(event.value)}}
                      optionLabel="name" placeholder="Znajdź kurs" style={{marginLeft: '2em', width: '25rem'}}/>
            <br/>
            <div className="grid-container">
                {  coursesAndDates.map((item, index) => {
                    {
                       if(selectedCourse === '' || selectedCourse.name === item.name){
                            return <Card title={item.name} style={{
                                width: '25rem', marginBottom: '2em',
                                marginTop: '2em', marginLeft: '2em'/*, gridColumn: gridColumn, gridRow: gridRow*/
                            }}>
                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                    data: {item.date}
                                </p>
                            </Card>
                        }
                    }
                })}
            </div>
        </div>
    );
}