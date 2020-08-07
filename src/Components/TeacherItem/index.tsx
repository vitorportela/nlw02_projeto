import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/19649688" alt="Vitão Portela"/>
        <div> 
            <strong>Vitor Portela</strong>
            <span>Física Quântica</span>
        </div>
        </header>
        <p>
            Frontend Developer ReactJS e JavaScript | Android e Sistemas Web | Scrum Professional
            <br />
            <br />
            dsopfjhndfsohjndfsoighjndfgijndfosghijdophijndfo´shijndfo´sghijndfsghijndfghoóljdkfnglksdfgmnokfgnáofkjhmdflkhnmd´flghkmndfónoj
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}
export default TeacherItem;