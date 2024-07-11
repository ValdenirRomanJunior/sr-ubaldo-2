import { Link } from "react-router-dom";
import { CardContainer, CardWrapper } from "./styles";
import  ImgIconHome from '../../assets/images/sm-sell-1.svg'
import ImgIconTicket from '../../assets/images/sm-rent-2.svg'
import ImgIconChange from '../../assets/images/sm-sell-3.svg'
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



const CardService = () => {

    const [focusButtonFirst,setFocusButtonFirst]= useState(true);

    const handleFocusButton = () => {
        setFocusButtonFirst(true);
        setFocusButtonSecond(false);
        setFocusButtonTertiary(false);
    }

    const [focusButtonSecond,setFocusButtonSecond]= useState(false);

    const handleFocusButtonSecond = () => {
        setFocusButtonSecond(true);
        setFocusButtonFirst(false);
        setFocusButtonTertiary(false);
    }

    const [focusButtonTertiary,setFocusButtonTertiary]= useState(false);

    const handleFocusButtonTertiary = () => {
        setFocusButtonSecond(false);
        setFocusButtonFirst(false);
        setFocusButtonTertiary(true);
    }

    return(

    <CardContainer focus={focusButtonFirst} focusSecond={focusButtonSecond} focusTertiary={focusButtonTertiary}>
        <h2 className="subtitle-session-cards">Como podemos te ajudar</h2>

        <div className="buttons-wrapper-service">
            <button className="button-service-first" onClick={handleFocusButton}>Comprar</button>
            <button className="button-service-second" onClick={handleFocusButtonSecond}>Alugar</button>
            <button className="button-service-tertiary" onClick={handleFocusButtonTertiary}>Avaliação</button>

        </div>
        <div className="cards-wrapper-service">
        <div className="card-1-border">
        <CardWrapper focus={focusButtonFirst} focusSecond={focusButtonSecond}  focusTertiary={focusButtonTertiary}>         
        <div className="header-card-wrapper-service header-card-wrapper-service-first">
            
        <LazyLoadImage effect='opacity' loading="eager" src={ImgIconHome} alt="" className="icon-header-card-service"/>  
            <h1>Encontre um imóvel para Comprar</h1>           
        </div>
        <p className="subtitle-card-service">Veja como podemos ajudar na compra e financiamento de um imóvel para você.</p>
        <p className="false-link-card-service">Veja nossos imóveis</p>
        </CardWrapper>
        </div>

        <div className="card-2-border">
            <CardWrapper focus={focusButtonFirst} focusSecond={focusButtonSecond}  focusTertiary={focusButtonTertiary}>
            <div className="header-card-wrapper-service header-card-wrapper-service-second">
            <LazyLoadImage effect='opacity'  loading="eager" src={ImgIconChange} alt="" className="icon-header-card-service"/>  
            <h1>Encontre um imóvel Para Alugar</h1>           
        </div>
        <p className="subtitle-card-service">Também aqui você encontra imóveis para alugar com total segurança.</p>
        <p className="false-link-card-service">Veja nossos imóveis</p>
                </CardWrapper>
                </div>
                <div className="card-3-border">
        <CardWrapper focus={focusButtonFirst} focusSecond={focusButtonSecond}  focusTertiary={focusButtonTertiary}>
        <div className="header-card-wrapper-service header-card-wrapper-service-tertiary">
        <LazyLoadImage effect='opacity' loading="eager" src={ImgIconTicket} alt="" className="icon-header-card-service"/>  
            <h1>Avaliação imobiliária</h1>           
        </div>
        <p className="subtitle-card-service">Caso queira ajuda profissional, também poderá agendar uma consultoria de avaliação.</p>
        <p className="false-link-card-service">Agende um visita</p>
        </CardWrapper>
        </div>
        </div>

    </CardContainer>
 )
}

export default CardService;
