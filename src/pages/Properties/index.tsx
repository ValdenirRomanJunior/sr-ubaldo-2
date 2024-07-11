import React, { useEffect, useState } from 'react'

import Header from '../../components/Header';
import CardProperty from './CardProperty';
import {PropertiesBackground,BodyPropertiesContainer,TitleWrapper} from './styles';

import { Link, useNavigate } from 'react-router-dom';
import {VscHome } from 'react-icons/vsc';
import {IoIosAdd} from 'react-icons/io';


import {BiSearch} from 'react-icons/bi'
import Modal from 'react-modal';
import LoadingPage from '../../components/LoadingPage';
import WhatsappButton from '../../components/WhatsappButton';
import { ErrorBoundary } from 'react-error-boundary';
import PageNotFound from '../../components/PageNotFound';



const Properties = ()=>{

    const navigate = useNavigate();
    const [goal,setGoal]= useState('');

    const getParamHeader = (goal:string) => {
      setGoal(goal);
     
    }

 
    const ErrorHandler = () => {
      return <PageNotFound/>;
    }
    return( 
     
      <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div>
         
    <PropertiesBackground>
       <Header onChange={getParamHeader}/>     
       <BodyPropertiesContainer>           
        <CardProperty goal={goal}/>
       </BodyPropertiesContainer>
    </PropertiesBackground>
    <WhatsappButton/>  
    </div>
   
    </ErrorBoundary>

    )

}

export default Properties;