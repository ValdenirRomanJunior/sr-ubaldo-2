import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderContainer = styled.header`
    width:100%;
    height:60px;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #e6e9ed;   
    position: relative;
    top:0;
    left:0;
  
     
`

export const HeaderWrapper = styled.div`
    width:92%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

      .logo{
        width:50px !important;
        height:50px !important;
        margin-left:8px;
        object-fit:contain;
        
    }

   
    .message-icon{
        position:absolute;
        top:50%;
        right:10%;
        transform:translate(-50%,-50%);
       
    }

    @media screen and (min-width: 550px){
        .message-icon{
            position:absolute;
            top:50%;
            right:8%;
            transform:translate(-50%,-50%);
           
        }
    }

    @media screen and (min-width: 768px){
        .message-icon{
            position:absolute;
            top:50%;
            right:6%;
            transform:translate(-50%,-50%);
           
        }
    }

    @media screen and (min-width: 1000px){
        width:90%;

        .logo{
            width:70px !important;
            height:60px !important;
            margin-left:8px;
            object-fit:contain;
            
        }

    }

    @media screen and (min-width: 1200px){
        width:92%;

    }

    @media screen and (min-width: 1400px){
        width:86%;

    }

    @media screen and (min-width: 1700px){
        width:80%;

    }

   
`

export const MenuLogoWrapper = styled.div`
    display:flex;
    align-items:center;
    
    
`
export const Hambuguer = styled.div`
    width: 30px;
    height:30px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    border:1px solid #acacac;
    border-radius:20px;
    padding:9px;
    cursor: pointer;
  
  
    
    span{
        min-width:17px;
        min-height:2.4px;
        background-color:gray;
        border-radius:2px;
    }

    @media screen and (min-width: 1000px){
      
    }
`

export const SideBarContainer = styled.div<{ sidebar: boolean}>`
    width:100%;
    height:100vh;
    background-color: ${({theme}) => theme.colors.background};
    border-right:1px solid #e6e9ed;
    position:fixed;
    top:0;
    transition: all .5s cubic-bezier(.2,1,.2,1),width .5s cubic-bezier(.2,1,.2,1) .3s,box-shadow .5s cubic-bezier(.2,1,.2,1) .3s;
    right: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    box-shadow: ${({sidebar}) => (sidebar ? '0 30px 50px 0 rgb(0 0 0 / 30%)' : 'none' )};
    z-index:13000;
    
   .icon-close-sidebar{
    position: absolute;
    right:15px;
    top:8px;
    font-size:28px;
   
   }

   .limit-border-sidebar{
    border-bottom:1px solid  rgb(230, 233, 237);
    border-width: thin;

   }

   .first-item-sidebar{
    margin-top:20px;
   }
    

    @media screen and (min-width: 1000px){
        max-width:360px;
        height:100vh;
      
        & ::before{
            content:'';
            width:100%;
            height:100%;
            background:#00000012;
            opacity:${({sidebar}) => (sidebar ? '1' : '0')};
            position: fixed;
            left:${({sidebar}) => (sidebar ? '-360px' : '100%')};
            transition: all .5s cubic-bezier(.2,1,.2,1),width .5s cubic-bezier(.2,1,.2,1) .3s,box-shadow .5s cubic-bezier(.2,1,.2,1) .3s;
            z-index:15000;
            top:0;


        }

    
 
`

export const SideBarTop = styled.div`
    display:none;
    width:100%;
     height:50px;
     border-bottom:1px solid ${({theme}) => theme.colors.border_primary};
    
    display: flex;
    justify-content: center;
    align-items: center;
    

img{
    width:100px;
    height:40px;
    object-fit: contain;
}
    @media screen and (min-width: 1000px){
        img{
          
        }
       
}
  
    `

export const NavIcon = styled(Link)`
    max-width:100%;
    display: flex;
    display: block;
    min-height: 3rem;
   
    
    
    p{
        margin-bottom:0;
        color:${({theme}) => theme.colors.color_link_menu};
        font-size:1rem !important;
        font-weight:200;
        line-height: 1.5rem;
        padding: 0.625rem 2rem 0.625rem 1rem;
        letter-spacing: .45px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        text-decoration: none;
        width: 100%;
        height: 3rem;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width:100%;
        cursor: pointer;
        


    }
    .site-link{
        color:#008ace;
        font-size: 18px;
    }

    @media screen and (min-width: 1000px){

      
    
       }

       p{
      
       
        
       }
    }

    

`

export const NavSearch = styled.div`
    max-width:100%;
    display: flex;
    display: block;
    min-height: 3rem;

   
    
    
    p{
        font-family:${({theme}) => theme.fonts.font_primary};
        margin-bottom:0;
        color:${({theme}) => theme.colors.color_link_menu};
        font-size:1rem !important;
        font-weight:200;
        line-height: 1.5rem;
        padding: 0.625rem 2rem 0.625rem 1rem;
        letter-spacing: .45px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        text-decoration: none;
        width: 100%;
        height: 3rem;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width:100%;
        cursor: pointer;

    }
    .site-link{
        color:#008ace;
        font-size: 18px;
    }

    @media screen and (min-width: 1000px){

      
    
       }

       p{
      
       
        
       }
    }

    

`

export const PhoneWrapper = styled.div`
    max-width:100%;
    display: flex;
    display: block;
    min-height: 3rem;
    padding-left: 1rem;
    margin-top:20px;

  
   
    a{
        display: flex;
        align-items: center;

        .whatsapp-icon-sidebar{
            font-size: 20px;
            color: green;
        }
    }
    
    p{
        font-family:${({theme}) => theme.fonts.font_primary};
        margin-bottom:0;
        color:${({theme}) => theme.colors.color_link_menu};
        font-size:.9rem !important;
        font-weight:200;
        line-height: 1.5rem;
        padding: 0.625rem 2rem 0.625rem .5rem;
        letter-spacing: .45px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        text-decoration: none;
        width: 100%;
        height: 3rem;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width:100%;

    }
    .site-link{
        color:#008ace;
        font-size: 18px;
    }

    @media screen and (min-width: 1000px){

      
    
       }

       p{
      
       
        
       }
    }

    

`

export const TelephoneSideBarWrapper = styled.div`
    width:105px;
    height:40px;
    margin-right:20px;
    font-family:${({theme}) => theme.fonts.font_primary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .telephone-icon-header{
        font-size: 14px;
        color:#808080;
    }

    span{
        font-size:11px;
        color:#808080;
    }

    @media screen and (min-width: 1000px){
        width:112px;
        height:40px;
        margin-right:20px;

        .telephone-icon-header{
            font-size: 13px;
            color:#808080;
        }
    
        span{
            font-size: 12px;
            color:#808080;
        }
    }
`