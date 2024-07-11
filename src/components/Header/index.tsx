import {HeaderContainer,HeaderWrapper,Hambuguer,MenuLogoWrapper,NavIcon,SideBarContainer, SideBarTop, TelephoneSideBarWrapper, NavSearch, PhoneWrapper} from './styles';

import {Link, createSearchParams, useNavigate} from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import {AiOutlineHome} from 'react-icons/ai';
import {VscDashboard} from 'react-icons/vsc';
import {AiOutlineUser} from 'react-icons/ai';
import {IoIosArrowForward} from 'react-icons/io';
import {IoSettingsOutline} from 'react-icons/io5';
import { useState } from 'react';
import logo from '../../assets/images/logo-branca.jpg';
import {GrFormClose} from 'react-icons/gr';
import {BsTelephone} from 'react-icons/bs';
import { MdWhatsapp } from 'react-icons/md';


type Prop = {
 onChange:Function;
}

const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname:any, params:any) =>
      navigate(`${pathname}/?${createSearchParams(params)}`);
  };

const Header = ({onChange}:Prop) =>{

    const navigateSearch = useNavigateSearch();
    const[goalParam,setgoalparam]= useState('');

    const handleToSearchSale = () => { 
        onChange('2') 
        setgoalparam('2'); 
        setSidebar(false)     
        navigateSearch('/properties',{'goal': '2', type: '', name:''});
     

    }

    const handleToSearchRent = () => {  
        onChange('1');
        setgoalparam('1');
        setSidebar(false)         
        navigateSearch('/properties',{'goal': '1', type: '', name:''});
    }

    const navigate = useNavigate();
   
    const [imageUser,setImageUser]= useState<string>("");



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sidebar, setSidebar] =useState(false);
    const showSidebar = () => setSidebar(!sidebar);

   

    return(
        <HeaderContainer>
            <HeaderWrapper>
            <Link to="/"><img src={logo} className="logo"  alt='logo optimus' /></Link>
                <MenuLogoWrapper>
                <TelephoneSideBarWrapper>
                    <BsTelephone className='telephone-icon-header'/>
                   <span>(88) 99317-0211</span>
                </TelephoneSideBarWrapper>
                <Hambuguer onClick={showSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hambuguer>              
                </MenuLogoWrapper>           
            </HeaderWrapper>
         
            <SideBarContainer sidebar={sidebar} className="sidebar-container" >
            <GrFormClose className='icon-close-sidebar' onClick={showSidebar}/>
                <SideBarTop >                                   
                    <img src={logo} className="logo"  alt='logo dynamous' />                                   
                </SideBarTop>
              
            <NavIcon to="/"  className='first-item-sidebar limit-border-sidebar'>        
            <p className='description-icon' >Inicio</p>
            </NavIcon>

            <NavSearch onClick={handleToSearchSale}>      
            <p className='description-icon'  >Imóveis para Venda</p>
            </NavSearch>

            <NavSearch onClick={handleToSearchRent}>      
            <p className='description-icon' >Imóveis para Alugar</p>
            </NavSearch>
       
         
       
            <PhoneWrapper >
            <a href='#'><MdWhatsapp className='whatsapp-icon-sidebar'/><p className='description-icon'>(88) 99317-0211</p></a>
            </PhoneWrapper>  
         

        </SideBarContainer>
       
        </HeaderContainer>
        
    )

}
export default Header;