import Header from "../../components/Header";
import { ContactModalContainerHome, HomeBannerWrapper, HomeBodyContainer, SessionAgent, SessionBannersBottom, SessionCards, SessionContact, SessionFooter, SessionQuestions, SessionSlides, SessionSlidesWrapper} from "./styles";
import principalBanner from '../../assets/images/banner.png';
import PseudoSearch from "../../components/PseudoSearch";
import CardPropertyHome from "../../components/CardPropertyHome";
import HouseImage from '../../assets/images/2928966.png';
import RightHouseImage from '../../assets/images/right-image-house.svg';
import logoHome from '../../assets/images/logo-branca-sem-fundo.png';
import {FaQuoteLeft} from 'react-icons/fa';
import AgentImage from '../../assets/images/perfil-corretor.png';
import {BsArrowRight} from 'react-icons/bs';
import Question from "../../components/Question";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact"; 

import { Suspense, lazy, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CardService from "../../components/CardService";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import WhatsappButton from "../../components/WhatsappButton";
import About from "../../components/About";
import Informations from "../../components/Informations";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import PageNotFound from "../../components/PageNotFound";



const Home = () => {
  

    const [url,setUrl]= useState((window.location.hostname));

    const [openModalContactBottom,setOpenModalContactBottom]=useState(true);


    const handleToOpenModalContact= () =>{
        setOpenModalContactBottom(openModalContactBottom => !openModalContactBottom);
    }

    const ErrorHandler = () => {
        return <PageNotFound/>;
      }

      const getParamHeader = (goal:string) => {
        return goal;
      }

    return (
        <ErrorBoundary FallbackComponent={ErrorHandler}>
        <HomeBodyContainer>
            <Header onChange={getParamHeader}/>
            <HomeBannerWrapper id="search">
                <div className="title-search-container">
                <LazyLoadImage effect="blur" src={logoHome} alt="banner principal"  className="principal-img"/>
                <h1 className="principal-title">Realizando sonhos em toda
                   serra da Ibiapaba.
                </h1>
           
              
                <PseudoSearch/>
                </div>
               

                <LazyLoadImage effect="blur" src={principalBanner} alt="banner principal"  className="img-principal-banner"/>
            </HomeBannerWrapper>

            <SessionCards>
            
                     <CardService/> 
                                 
           </SessionCards>
                    <SessionSlidesWrapper>
           <SessionSlides>
                <h2 className="subtitle">Imóveis em destaque</h2>
              
            <CardPropertyHome url={url}/>
            <a href="#search"><div className="button-wrapper-home" ><button className="button-see-more">PESQUISAR</button></div></a>
           </SessionSlides>
           </SessionSlidesWrapper>

           <SessionContact id="session-contact">
            <div className="houseImage-wrapper">
            <LazyLoadImage effect="opacity"  src={HouseImage} alt=""/>
            
            </div>
            
            <div className="right-side-sessionContact">
            <div className="title-subtitle-wrapper-sessionContact">
                <h2>Mande-nos uma mensagem para mais informações.</h2>
                <p>Vamos receber sua mensagem e entraremos em contato o mais rápido possível</p>
                </div>
                
                <Contact url={url}/>
                
              
                <span className="orClass">OU</span>
                <p className="message-to-open-chat">Caso você deseja mandar uma mensagem
                instantânia é só usar nosso <a href="#" className="link-chat-home">whatsapp</a> ao lado</p>
                </div>
           </SessionContact>

           <SessionAgent>
        
           <div className="session-agent-content-wrapper">   
            <div className="text-agent-wrapper-home">
            <FaQuoteLeft className="quote-icon-agent-home"/>
            <h3>Você tem sonhos, eu tenho a chave da solução!</h3>
            <p>CEO-Ubaldo Vasconcelos</p>
            </div>

            
            <div className="circle-wrapper">
            <div className="circle2-image-agent-home">
           
                <div className="circle1-image-agent-home">
              
                <LazyLoadImage effect="opacity"   src={AgentImage} alt="" className="img-agent-home" />
                  
                </div>
              
            </div>
            </div>
            <p className="agent-name">CEO-Ubaldo Vasconcelos</p>
            </div> 
          
           </SessionAgent>
                  
     
            <SessionBannersBottom>
            
                <div className="image-banner-bottom-wrapper">

                <a href="#session-contact"><div className="text-wrapper-image-banner" onClick={handleToOpenModalContact}>
                        <p className="first-text-image-banner">Entre em contato conosco</p>
                        <span className="second-text-image-banner">Anuncie seu imóvel</span>
                        <a href="#session-contact"><button className="button-banner-bottom">Contactar</button></a>
                        <BsArrowRight className="icon-image-banner-bottom-home"/>
                    </div></a>

             
                </div>          
                
            </SessionBannersBottom>
       
            <SessionQuestions id="about">
                <div className="questions-content-wrapper">
                    <h2  className="title-session-questions">Navegação</h2>      
                <Question/>    
                <About />
            
                </div>
            </SessionQuestions>

            <SessionFooter>
                <Footer />
            </SessionFooter>
          <WhatsappButton/>
        </HomeBodyContainer>
        </ErrorBoundary>
    )
    }
    export default Home;

 