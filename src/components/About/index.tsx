import { useState } from "react";
import { AnswerWrapper, ModalLinkQuestion, QuestionContainer, QuestionWrapper } from "./styles"
import {BsPlus} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';

const About = () => {

    const [openAnswer,setOpenAnswer]= useState(false);
    const handleOpenAnswer = () => {
        setOpenAnswer(openAnswer => !openAnswer);
    }

    const [openModalLink,setOpenModalLink]= useState(false);
    const handleOpenModalLink = () => {
        setOpenModalLink(openModalLink => !openModalLink);
    }

    return(
        <QuestionContainer>
            <QuestionWrapper onClick={handleOpenAnswer}>
             <span>Sobre nós</span>
             <BsPlus className="icon-plus-question"/>
            </QuestionWrapper>
            <AnswerWrapper open={openAnswer} onClick={handleOpenModalLink}>
                <h2>Ajudamos você a encontrar o seu lar em Ubajara e toda Serra da Ibiapaba!</h2>
                <p>Atuante no ramo imobiliário há alguns anos, somos uma empresa
                   especializada na locação e venda de imóveis em Ubajara e região,
                   100% dedicados à credibilidade e transparência. Com alto rigor profissional, 
                   contamos com colaboradores competentes e qualificados para melhor atendê-los.
                   Levamos aos nossos clientes toda
                   praticidade para organizar e agilizar todos os processos imobiliários.
                   Todas as nossas visitas são acompanhadas, 
                   trazendo assim segurança do início ao fim, tanto no aluguel, quanto na venda.</p>

                   <span>Ubaldovasconcelos@gmail.com</span>
                   <span>Av. Cel. Francisco Cavalcante, Centro Ubajara</span>
               
                   <span>Ubajara - CE</span>
                   <span>(88) 99317-02011</span>
            </AnswerWrapper>
   
           
        </QuestionContainer>
        
    )

}

export default About;