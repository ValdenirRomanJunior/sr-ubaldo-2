import { useState } from "react";
import { AnswerWrapper, ModalLinkQuestion, QuestionContainer, QuestionWrapper } from "./styles"
import {BsPlus} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';

const Question = () => {

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
             <span>Políticas</span>
             <BsPlus className="icon-plus-question"/>
            </QuestionWrapper>
            <AnswerWrapper open={openAnswer} onClick={handleOpenModalLink}>
                <p>Política de privacidade</p>
            </AnswerWrapper>
        <ModalLinkQuestion openLink={openModalLink}>
      
            <div className="header-modal-link-question">
            <GrFormClose onClick={handleOpenModalLink} className="icon-close-modal-link-question"/>
            <h2 className="title-modal-link-question">Política de Privacidade</h2>
            </div>
            <div className="text-wrapper-modal-link-question">
            <h3 className="subtitle-modal-link-question">1. INFORMAÇÕES QUE COLETAMOS</h3>
            <p className="text-modal-link-question">Não custa lembrar, prezamos muito pela sua privacidade. 
                Por isso, todos os dados e informações sobre você são tratadas como confidenciais, 
                e somente as usaremos para os fins aqui descritos e autorizados por você, principalmente para que você possa utilizar nosso site de forma plena,
                visando sempre melhorar a sua experiência como usuário.</p>

                <h3  className="subtitle-modal-link-question">2. O que você deve saber em relação ao nosso site</h3>
                <p className="text-modal-link-question">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
                 exceto quando exigido por lei.O nosso site pode ter links para sites externos, que não são
                 operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses
                 sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                 Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
                 possamos fornecer alguns dos serviços desejados.
                 O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade
                 e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
                 pessoais, entre em contato conosco.</p>

                 <h3  className="subtitle-modal-link-question">3. O que são cookies?</h3>
                 <p className="text-modal-link-question">São arquivos de computador ou pacote de dados pessoais enviados por um site para o navegador do usuário
                 quando o utilizador visita determinado site.</p>
                 <h3  className="subtitle-modal-link-question">4. Para que servem?</h3>
                 <p className="text-modal-link-question">São ferramentas essenciais que coletam informações como quais sites você visitou, bem como formulários, de 
                    modo a tornar mais rápidos e eficientes o preenchimento de dados em sites.
                 Também são utilizados para rastrear informações dos visitantes, essenciais ao marketing da empresa, já que
                  quanto mais dados coletar, maior a chance de assertividade no negócio.</p>
                  <h3 className="subtitle-modal-link-question"></h3>
                  <p className="text-modal-link-question"></p>
                </div>

            

        </ModalLinkQuestion>
           
        </QuestionContainer>
        
    )

}

export default Question;