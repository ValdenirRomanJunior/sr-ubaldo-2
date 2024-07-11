import styled from "styled-components";


export const CardContainer = styled.div<{focus:boolean,focusSecond:boolean,focusTertiary:boolean}>`
    width:100%;



    .subtitle-session-cards{
        font-family:${({theme})=> theme.fonts.font_primary};
        line-height: 28px;
        margin-bottom: 24px; 
        font-size:16px;
       
        font-weight:500;
        text-align: left;
        

    }

    .buttons-wrapper-service{
        
         padding-right: 16px;
         position: relative;
         width: 100%;
    }

    button{    
        font-weight:200;
        border-radius: 36px;
        border: 1px solid rgb(117, 117, 117);
        padding: 0px 16px;
        height: 36px;
        touch-action: manipulation;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 10px; 
        cursor: pointer;
          
      
    }

    .button-service-first{
        background: ${({focus}) => (focus ? '#000' : '#fff')};
        color: ${({focus}) => (focus ? '#fff' : '#000')};

    }
    .button-service-second{
        background: ${({focusSecond}) => (focusSecond ? '#000' : '#fff')};
        color: ${({focusSecond}) => (focusSecond ? '#fff' : '#000')};

    }

    .button-service-tertiary{
        background: ${({focusTertiary}) => (focusTertiary ? '#000' : '#fff')};
        color: ${({focusTertiary}) => (focusTertiary ? '#fff' : '#000')};

    }

    .card-1-border {
        margin-top:23px;
        border: ${({focus}) => (focus ? '1px solid black': '1px solid rgb(202, 202, 202)')};
        border-radius: 6px;
        min-height: 195px;
        height:195px;

    }
    .card-2-border {
        margin-top:23px;
        border: ${({focusSecond}) => (focusSecond ? '1px solid black': '1px solid rgb(202, 202, 202)')};
        border-radius: 6px;
        min-height: 195px;
        height:195px;

    }
    .card-3-border {
        margin-top:23px;
        border: ${({focusTertiary}) => (focusTertiary ? '1px solid black': '1px solid rgb(202, 202, 202)')};
        border-radius: 6px;
        min-height: 195px;
        height:195px;

    }

    @media screen and (min-width:480px){
        .card-1-border {    
            min-height: 140px;
    
        }
        .card-2-border {       
            min-height: 140px;
    
        }
        .card-3-border {
            min-height: 140px;
    
        }

    }

    @media screen and (min-width:720px){
        max-width: 720px;
        width:720px;
        padding:0 16px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .card-1-border {    
            min-height: 140px;
            min-width:720px;
            width:720px;
           
    
        }
        .card-2-border {       
            min-height: 140px;
            min-width:720px;
            width:720px;
             
        }
        .card-3-border {
            min-height: 140px;
            min-width:720px;
            width:720px;
         
        }

        .subtitle-session-cards{       
            font-size: 20px;
            width:100%;          
        }

        .buttons-wrapper-service{
            padding-left: 0;
            padding-right: 0;
    
       }

    }

    @media screen and (min-width:780px){
        max-width: 780px;
        width:780px;
        padding:0 16px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .card-1-border {    
            min-height: 140px;
            min-width:100%;
            width:780px;
           
    
        }
        .card-2-border {       
            min-height: 140px;
            min-width:100%;
            width:780px;
             
        }
        .card-3-border {
            min-height: 140px;
            min-width:100%;
            width:780px;
         
        }

        .subtitle-session-cards{       
            font-size: 24px;
            width:100%;          
        }

        .buttons-wrapper-service{
            padding-left: 0;
            padding-right: 0;
    
       }

    }

    @media screen and (min-width:1000px){
        min-width: 880px;
            width: 880px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        .subtitle-session-cards{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 32px;
            margin-bottom: 30px; 
            font-size:24px !important;
            font-weight:600;
            text-align: left;
            
    
        }
    

        .card-1-border {    
            min-height: 250px;
            max-width:32%;
            width:32%;
            min-width:32%;
          
           
            
        }
        .card-2-border {       
            min-height: 250px;
            max-width:32%;
            width:32%;
            min-width:32%;
            
             
        }
        .card-3-border {
            min-height: 250px;
            max-width:32%;
            width:32%;
            min-width:32%;
          
                 
        }

        .cards-wrapper-service{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        }


        @media screen and (min-width:1100px){
            min-width: 880px;
            width: 880px;
    
            display: flex;
            justify-content: space-around;
            align-items: center;

            .subtitle-session-cards{
                font-family:${({theme})=> theme.fonts.font_primary};
                line-height: 28px;
                margin-bottom: 30px; 
                font-size:24px !important;
                
                font-weight:600;
                text-align: left;
                
        
            }
        
    
            .card-1-border {    
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
              
               
                
            }
            .card-2-border {       
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
                
                 
            }
            .card-3-border {
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
              
                     
            }
    
            .cards-wrapper-service{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
        }

        @media screen and (min-width:1200px){
            min-width: 1100px;
            width: 1100px;
    
            display: flex;
            justify-content: space-around;
            align-items: center;
        
    
            .card-1-border {    
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
              
               
                
            }
            .card-2-border {       
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
                
                 
            }
            .card-3-border {
                min-height: 250px;
                max-width:32%;
                width:32%;
                min-width:32%;
              
                     
            }
    
            .cards-wrapper-service{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
        }

`

export const CardWrapper = styled.div<{focus:boolean,focusSecond:boolean,focusTertiary:boolean}>`
    width:100%;  
    position: relative;
    padding: 16px; 
    position: relative;
    display: flex;
    justify-content:start;
    flex-direction:column;
    align-items:end;   
    text-align: left;
    font-family:${({theme})=> theme.fonts.font_primary};
   
  

    .header-card-wrapper-service{
        display: flex;
        width:100%;
        display: flex;
        justify-content:end;
      
        

        h1{
            width:75%;
            font-size:16px;
            line-break: auto;
            font-weight:600;
            
        }
      
        .icon-header-card-service{
            position: absolute;
            top:15%;
            left:5%;    
            width:56px;
        }
    }

    .subtitle-card-service{
        width:75%;
        font-size:16px;
        line-break: auto;
        font-weight:400;
        margin-top:15px;
     
    }

    .false-link-card-service{
        text-decoration: underline;
        font-weight: 500;
        line-break: auto;
        width:75%;
        margin-top:25px;
        font-size: 16px;

    }

    @media screen and (min-width:720px){
        .icon-header-card-service{
            position: absolute;
            top:15%;
            left:5%;    
            width:65px !important;
        }
    }
    @media screen and (min-width:1000px){
        padding: 14px; 
        min-height: 250px;

        display: flex;
        justify-content:stretch;
        flex-direction:column;
        align-items:stretch;  

        .header-card-wrapper-service{
          
            width:100%;
            display: flex;
            justify-content:space-between;
            flex-direction: row-reverse;
            align-items: start;
                   
    
            h1{
                
                font-size:18px;
                line-break: auto;
                font-weight:600;
                max-width: 216px;
            }
          
            .icon-header-card-service{
                position: relative;
                top:unset;
                left:unset;    
                width: 75px;
            }
        }
    
        .subtitle-card-service{
            width:100%;
            font-size:16px;
            line-break: auto;
            font-weight:300;
            margin-top:15px;
            text-align: left;
            line-height: 24px;
            font-style: normal;
        }
    
        .false-link-card-service{
            text-decoration: underline;
            font-weight: 500;
            line-break: auto;
            width:100%;
            margin-top:25px;
            font-size: 16px;

            position: absolute;
            bottom: 16px;
    
        }
       
        
        }


`