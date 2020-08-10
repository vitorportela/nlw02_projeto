import React, { FormEvent, useState } from 'react';

import PageHeader from '../../Components/PageHeader';
import TeacherItem,{Teacher} from '../../Components/TeacherItem';
import './styles.css';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';



function TeacherList(){
    const[teacher, setTeachers] = useState([]);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time,
            }
        })
        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                    name="subject" 
                    label="Maréria"
                    value = {subject}
                    onChange={e=>{setSubject(e.target.value)}}
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Biologia', label: 'Bilogia'},
                        { value: 'Ciências', label: 'Ciências'},
                        { value: 'Educação física', label: 'Educação física'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'História', label: 'História'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Física', label: 'Física'},

                    ]}
                />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value = {week_day}
                        onChange={e=>{setWeekDay(e.target.value)}}
                        options={[
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'Terça-feira'},
                            { value: '3', label: 'Quarta-feira'},
                            { value: '4', label: 'Quinta-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'},
                            { value: '0', label: 'Domingo'},                            
                        ]}
                    />

                <Input
                    type="time"
                    name="time"
                    label="Hora"
                    value = {time}
                    onChange={e=>{setTime(e.target.value)}}
                />
                <button type="submit">Buscar</button> 
                </form>
            </PageHeader>

        <main>
            {teacher.map((teacher: Teacher) => {
                return <TeacherItem key={teacher.id} teacher={teacher} />;
            })}
        </main>
        </div>
    )
}

export default TeacherList;