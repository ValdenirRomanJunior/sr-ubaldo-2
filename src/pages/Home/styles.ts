import styled from "styled-components";
import BannerBottomDesktop from '../../assets/images/desktop-bg-banner-bottom.png';
import BannerBottomMobile from '../../assets/images/mobile-bg-banner-bottom.png';


export const HomeBodyContainer = styled.div`
    width:100vw;


`

export const HomeBannerWrapper = styled.div`
    width:100vw;
    height:380px;
    position:relative;
  

    .title-search-container{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width:100%;
        padding:1.5rem;
        z-index:1;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: cener;

         .principal-title{
            display: block;
            text-align: center;
            width: 100%;
            font-family: ${({theme}) => theme.fonts.font_primary};
            color:#fff;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 130%;
            margin-bottom:20px;
            
         
        }
              .principal-img{
              width:30%;
              height: 30%;
                }

        .arrow-location-pseudoSearch{
            transform:rotate(90deg);
            font-size:20px;
            color: #4c4c4c;
        }
    }
    
    .lazy-load-image-background.blur.lazy-load-image-loaded{
        width:100% !important; 
        height:100% !important; 
        display: flex;
       justify-content: center;
       text-align: center;

    }
 

    .img-principal-banner{
        width:100%; 
        object-fit:cover;
        aspect-ratio: 1/1;
        max-height: 100%;
     
    }

     @media screen and (min-width:600px){
      .title-search-container{
         .principal-img{
              width:20%;
              height: 20%;
                }
}
     }

    @media screen and (min-width:1000px){
        min-height:400px;
        .title-search-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

          .principal-title{
                display: block;
                text-align: center;
                width: 100%;
                font-family: ${({theme}) => theme.fonts.font_primary};
                color:#fff;
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 130%;
                margin-bottom:25px;
                
                           
            }
                   .principal-img{
              width:15%;
              height: 15%;
                }
        }


        .img-principal-banner{
        width:100%; 
        object-fit:cover;
        aspect-ratio: 1/1;
        max-height: 100%;
        display: block;

    }
 
    }

    
    @media screen and (min-width:1200px){

        .title-search-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

                  .principal-img{
              width:10%;
              height: 10%;
                }
    
            .principal-title{
                display: block;
                text-align: center;
                width: 100%;
                font-family: ${({theme}) => theme.fonts.font_primary};
                color:#fff;
                font-weight: 500;
                font-size: 2.2rem;
                line-height: 130%;
                margin-bottom:20px;
                
             
            }
        }
    }

    @media screen and (min-width:1400px){
        min-height:440px;
        .title-search-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        .principal-title{
                display: block;
                text-align: center;
                width: 100%;
                font-family: ${({theme}) => theme.fonts.font_primary};
                color:#fff;
                font-weight: 500;
                font-size: 2.1rem;
                line-height: 130%;
                margin-bottom:20px;
                
             
            }
        }
    }

`
export const SessionSlides = styled.div`
    width:100%;
    height:auto;
    padding:2rem 1rem 0 1rem;

    .subtitle{
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-size:16px;   
        font-weight:500;
        text-align: center;
      
    }

    .button-wrapper-home{
        width:100%;
        text-align: center;
        margin-top:60px;
        cursor: pointer;

        .button-see-more{
            background:transparent;
            border:none;
            border: 1px solid #A2A2A2;
            padding:7px 22px;
            font-size:13px;
            color:#8F8F8F;
            cursor: pointer;
        }
    }

    @media screen and (min-width:670px){
        padding:2rem 3rem 0 3rem;

    }
    @media screen and (min-width:720px){
        padding:2rem 5rem 0 5rem;
        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 10px; 
            font-size:20px !important;
            font-weight:500;
            text-align: center;
            padding-left:20px;
          
    
        }

    }
    @media screen and (min-width:770px){
        padding:2rem 6rem 0 6rem;
        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 10px; 
            font-size:24px !important;
            font-weight:500;
            text-align: center;
            padding-left:20px;
          
    
        }

    }
    @media screen and (min-width:820px){
        padding:2rem 7rem 0 7rem;

        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 10px; 
            font-size:24px !important;
            font-weight:500;
            text-align: center;
            padding-left:20px;
          
    
        }

    }
    @media screen and (min-width:920px){
        padding:2rem 2.5rem 0 2.5rem;

    }
    @media screen and (min-width:1000px){
        padding:2rem 5rem 0 5rem;

        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 10px; 
            font-size:24px !important;
            font-weight:600;
            text-align: left;
            padding-left:16px;
          
    
        }

    }

    @media screen and (min-width:1100px){
        min-width: 880px;
        width: 880px;
        padding:2rem 0 0 0;

    }

    @media screen and (min-width:1200px){
        padding:2rem 0 0 0;
        
        min-width: 1100px;
            width: 1100px;

        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 10px; 
            font-size:24px !important;
            font-weight:600;
            text-align: left;
            padding-left:52px;
             
        }      

    }

    @media screen and (min-width:1300px){
        padding:2rem 0 3rem 0;
        
        min-width: 1090px;
            width: 1090px;

        .subtitle{
            font-family:${({theme})=> theme.fonts.font_primary};
            line-height: 28px;
            margin-bottom: 15px; 
            font-size:24px !important;
            font-weight:600;
            text-align: left;
            padding-left:9px;
             
        }      

    }

`

export const SessionSlidesWrapper = styled.div`
    width:100%;

    display: flex;
    justify-content: center;
    align-items: center;

    
  
`
export const SessionContact = styled.div`
    width:100%;
    padding:2rem 2rem;
    border-top: 1px dashed gray;
    margin-top:2rem;
    border-bottom: 1px dashed gray;
   

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .houseImage-wrapper{
        width:270px;
        height:200px;
        position: relative;
  display: flex;
           flex-direction: column;
    justify-content: center;
    align-items: center;

        img{
        width:100%;
        height:100%;
        object-fit:contain;
        }

        .houseImage-right{
            position: absolute;
            bottom:0;
            right:0;

            width:100px;
            height:70px;
            object-fit:contain;
        }
    }

    
    .link-chat-home{
        color: blue;
    }

    .right-side-sessionContact{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background:rgb(251, 251, 251);
      

    }
    
    .title-subtitle-wrapper-sessionContact{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:25px;

        h2{
            font-family: ${({theme}) => theme.fonts.font_primary};
            font-size:17px;
            text-align: center;
        }
        p{
            font-family: ${({theme}) => theme.fonts.font_primary};
            font-size:13px;
            color:#878787;
            text-align: center;
            margin-top:10px;
        }
    }  
    
    .orClass{
        font-family: ${({theme}) => theme.fonts.font_primary};
        text-align: center;
        margin-top:20px;
        font-size:13px;
        font-weight:500;
        color:rgba(2, 44, 108, 0.69);

    }
    .message-to-open-chat{
        font-family: ${({theme}) => theme.fonts.font_primary};
        text-align: center;
        color:#37474F;
        margin-top:10px;
        font-weight:300;
        font-size:12px;
    }

    @media screen and (min-width:500px){
        padding:2rem 3rem;

        .houseImage-wrapper{
            width:260px;
            height:180px;
            position: relative;
    
            img{
            width:100%;
            height:100%;
            object-fit:contain;
            }
    
            .houseImage-right{
                position: absolute;
                bottom:0;
                right:0;
    
                width:100px;
                height:70px;
                object-fit:contain;
            }
        }

    }

    @media screen and (min-width:550px){
        padding:2rem 5rem;
    }

    @media screen and (min-width:1000px){
        flex-direction: row;
        padding:5rem 2rem;

        .houseImage-wrapper{
            width:450px;
            height:350px;
            position: relative;
            margin-right:30px;
    
            img{
            width:100%;
            height:100%;
            object-fit:contain;
            }
    
            .houseImage-right{
                position: absolute;
                bottom:0;
                right:0;
    
                width:140px;
                height:120px;
                object-fit:contain;
            }
        }

        .right-side-sessionContact{
            min-width:370px;
            max-width:370px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 3rem 2rem;
          
            border-radius:10px;
    
        }

        .title-subtitle-wrapper-sessionContact{
          
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:25px;
    
            h2{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:17px;
                text-align: center;
                min-width:100%;
            }
            p{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:13px;
                color:#878787;
                text-align: center;
                margin-top:10px;
                min-width:100%;
            }
        }  
        
        .orClass{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            margin-top:20px;
            font-size:13px;
            font-weight:500;
            color:rgba(2, 44, 108, 0.69);
            min-width:100%;
    
        }
        .message-to-open-chat{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#37474F;
            margin-top:10px;
            font-weight:300;
            font-size:12px;
            min-width:100%;
            max-width:100%;
        }
    }


    @media screen and (min-width:1300px){
        flex-direction: row;
        padding:2rem 0;

      

        .houseImage-wrapper{
            width:550px;
            height:450px;
            position: relative;
            margin-right:60px;
            margin-bottom:70px;

            display: flex;
            align-items: start;
            justify-content: start;
    
            img{
            width:100%;
            height:100%;
            object-fit:contain;
            }
    
            .houseImage-right{
                position: absolute;
                bottom:0;
                right:0;
    
                width:140px;
                height:120px;
                object-fit:contain;
            }
        }

        .right-side-sessionContact{
            min-width:430px;
            max-width:450px;
            min-height: 400px;
           
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;       
            border-radius:10px;
    
        }

        .title-subtitle-wrapper-sessionContact{
          
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:0;
            padding: 0 0 1rem 0;
    
            h2{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:17px;
                text-align: center;
                min-width:100%;
                padding:1rem 0;
            }
            p{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:13px;
                color:#878787;
                text-align: center;
                margin-top:10px;
                min-width:100%;
            }
        }  
        
        .orClass{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            margin-top:20px;
            font-size:13px;
            font-weight:500;
            color:rgba(2, 44, 108, 0.69);
            min-width:100%;
    
        }
        .message-to-open-chat{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#37474F;
            margin-top:10px;
            font-weight:300;
            font-size:12px;
            min-width:100%;
            max-width:100%;
        }
    }

    @media screen and (min-width:1400px){
        flex-direction: row;
        padding:2rem 0;

        align-items: center;
        

      

        .houseImage-wrapper{
            width:600px;
            height:400px;
            position: relative;
            margin-right:100px;
            margin-bottom:130px;

            display: flex;
            align-items: start;
            justify-content: start;
    
            img{
            width:100%;
            height:100%;
            object-fit:contain;
            }
    
            .houseImage-right{
                position: absolute;
                bottom:0;
                right:0;
    
                width:140px;
                height:120px;
                object-fit:contain;
            }
        }

        .right-side-sessionContact{
            min-width:400px;
            max-width:400px;
            min-height: 400px;
           
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;       
            border-radius:10px;
    
        }

        .title-subtitle-wrapper-sessionContact{
          
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:0;
            padding: 0 0 1rem 0;
    
            h2{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:17px;
                text-align: center;
                min-width:100%;
                padding:1rem 0;

            }
            p{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:13px;
                color:#878787;
                text-align: center;
                margin-top:10px;
                min-width:100%;
            }
        }  
        
        .orClass{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            margin-top:20px;
            font-size:13px;
            font-weight:500;
            color:rgba(2, 44, 108, 0.69);
            min-width:100%;
    
        }
        .message-to-open-chat{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#37474F;
            margin-top:10px;
            font-weight:300;
            font-size:12px;
            min-width:100%;
            max-width:100%;
        }
    }
`
export const SessionAgent = styled.div`
    width:100%;
    background:#FBFBFB;
    padding:2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .session-agent-content-wrapper{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .quote-icon-agent-home{
        font-size: 35px;
        color:#94bce036;
    }
    
    .text-agent-wrapper-home{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:0 2rem;
        margin-top:35px;


        h3{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            font-weight:400;
            margin-top:1rem;
        

        }
        p{
            margin-top:15px;
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#A1A1A1;
            display:none;
        }

    }
    .agent-name{
        margin-top:15px;
        font-family: ${({theme}) => theme.fonts.font_primary};
        text-align: center;
        color:#A1A1A1;
        font-size:14px;
    }

    .circle2-image-agent-home {
        width:150px;
        height:150px;
        background:rgb(204,231,245,55%);
        border-radius:50%;
        border: 1px solid #AADEF9;
        margin-top:20px;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;

        .circle1-image-agent-home{
            width:130px;
            height:130px;
            background:rgb(204,231,245,100%);
            border-radius:50%;
            border: 1px solid #AADEF9;

            display: flex;
            justify-content: center;
            align-items: center;
            overflow:hidden;

           .lazy-load-image-background.opacity.lazy-load-image-loaded{
                display: flex !important;
                justify-content: center;
                align-items: center;
                width:100% !important;
                height:100% !important;;

            }
       
        .img-agent-home{
           width:90%;
           height:90%;
           border-radius:50%;
           object-fit:cover; 
           
        }
    }
}

@media screen and (min-width:500px){
    padding:4rem 0;
    .quote-icon-agent-home{
        font-size: 55px;
    }

}

@media screen and (min-width:550px){
    padding:4rem 2rem;
}

@media screen and (min-width:840px){
    padding:1rem 2rem;

    .quote-icon-agent-home{
        font-size: 40px;     
       text-align:left;
    }
    
    .text-agent-wrapper-home{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        padding:2rem 0 0 0;
        margin-top:0;
        width:50%;
        height:100%;
   

        h3{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            margin-top:25px;

        }
        p{
            margin-top:15px;
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#A1A1A1;
            
        }

    }

}

@media screen and (min-width:1000px){
  
    padding:5rem 0;

    flex-direction: row;
    justify-content: center;


    .session-agent-content-wrapper{
        min-width:880px;
        width:880px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
    }

    .quote-icon-agent-home{
        font-size: 40px;     
       text-align:left;
    }
    
    .text-agent-wrapper-home{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: start;
        padding:3rem 2rem 0 0;
        margin-top:0;
        width:50%;
        height:100%;
   

        h3{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: left;
            margin-top:25px;

        }
        p{
            margin-top:15px;
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            color:#A1A1A1;
            display: block;
            
        }

    }

    .circle-wrapper{
        width:50%;
        padding:0 0;

        display:flex;
        justify-content: center;
        align-items: center;
        height:100%;
    }

    .circle2-image-agent-home {
        width:190px;
        height:190px;
        background:rgb(204,231,245,55%);
        border-radius:50%;
        border: 1px solid #AADEF9;
        margin-top:20px;

        display: flex;
        justify-content: center;
        align-items: center;

        .circle1-image-agent-home{
            width:170px;
            height:170px;
            background:rgb(204,231,245,100%);
            border-radius:50%;
            border: 1px solid #AADEF9;

            display: flex;
            justify-content: center;
            align-items: center;
       
        .img-agent-home{
           width:90%;
           height:90%;
           border-radius:50%;
           object-fit:cover; 
           
        }
    }
}

.agent-name{
    margin-top:15px;
    font-family: ${({theme}) => theme.fonts.font_primary};
    text-align: center;
    color:#A1A1A1;
    font-size:14px;
    display:none;
}
}

@media screen and (min-width:1200px){
    padding:4rem 0;
    .session-agent-content-wrapper{
        min-width:1100px;
         width:1100px;
         padding:0 1rem;

    }

    .circle2-image-agent-home {
        width:260px;
        height:260px;
        background:rgb(204,231,245,55%);
        border-radius:50%;
        border: 1px solid #AADEF9;
        margin-top:20px;

        display: flex;
        justify-content: center;
        align-items: center;

        .circle1-image-agent-home{
            width:230px;
            height:230px;
            background:rgb(204,231,245,100%);
            border-radius:50%;
            border: 1px solid #AADEF9;

            display: flex;
            justify-content: center;
            align-items: center;
       
        .img-agent-home{
           width:90%;
           height:90%;
           border-radius:50%;
           object-fit:cover; 
           
        }
    }
}

.quote-icon-agent-home{
    font-size: 45px;
}

.text-agent-wrapper-home{
    display: flex;
    flex-direction: column;
    padding:2rem 1rem;
    margin-top:0;
    width:50%;
    height:100%;


    h3{
        font-family: ${({theme}) => theme.fonts.font_primary};
       
        margin-top:25px;

    }
    p{
        margin-top:25px;
        font-family: ${({theme}) => theme.fonts.font_primary};
       
        color:#A1A1A1;
        
    }

}
    
}
@media screen and (min-width:1300px){
    padding:4rem 0;
    .session-agent-content-wrapper{
        min-width:1100px;
         width:1100px;
         padding:0 1rem;

    }

    .circle2-image-agent-home {
        width:260px;
        height:260px;
        background:rgb(204,231,245,55%);
        border-radius:50%;
        border: 1px solid #AADEF9;
        margin-top:20px;

        display: flex;
        justify-content: center;
        align-items: center;

        .circle1-image-agent-home{
            width:230px;
            height:230px;
            background:rgb(204,231,245,100%);
            border-radius:50%;
            border: 1px solid #AADEF9;

            display: flex;
            justify-content: center;
            align-items: center;
       
        .img-agent-home{
           width:90%;
           height:90%;
           border-radius:50%;
           object-fit:cover; 
           
        }
    }
}

.quote-icon-agent-home{
    font-size: 45px;
}

.text-agent-wrapper-home{
    display: flex;
    flex-direction: column;
    padding:2rem 1rem;
    margin-top:0;
    width:50%;
    height:100%;


    h3{
        font-family: ${({theme}) => theme.fonts.font_primary};
      
        margin-top:25px;

    }
    p{
        margin-top:25px;
        font-family: ${({theme}) => theme.fonts.font_primary};
       
        color:#A1A1A1;
        
    }

}
    
}

`
export const SessionBannersBottom = styled.div`
    width:100%;
    padding:1rem 1rem;
    background-color:rgb(251, 251, 251);

    .image-banner-bottom-wrapper{
        min-width:100%;
        height:130px;
        position: relative;
        
        border-radius:3px;
       
        background-image: url(${BannerBottomMobile});
        background-position:center;
        background-repeat: no-repeat;
        background-size:cover;
        

        
    }

    .text-wrapper-image-banner{
        max-width:100%;
        position: absolute;
        bottom:15%;
        left:3%;
        font-family: ${({theme}) => theme.fonts.font_primary};
        cursor:pointer;
      
        .first-text-image-banner{
            min-width:100%;
            color:rgb(241, 241, 241);
            font-weight:400;
            opacity:.8;
           

        }
        span{
            color:  rgb(241, 241, 241);
            width:100%;
            opacity:.5;
        }
        .icon-image-banner-bottom-home{
            position: absolute;
            bottom:0;
            right:14%;
            color:#fff;
            margin-left:5px;
            font-size:17px;
        }

        .button-banner-bottom{
            display:none;
        }
    }

    @media screen and (min-width:450px){
        width:100%;
        padding:2rem 1rem;

        .image-banner-bottom-wrapper{
            min-width:100%;
            height:150px;
           
          
            
        }
      
    }

    @media screen and (min-width:580px){
        width:100%;
        padding:2rem 2rem;

        .image-banner-bottom-wrapper{
            width:100%;
            height:180px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:180px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }

        .text-wrapper-image-banner{
            position: absolute;
            bottom:15%;
            left:3%;
            font-family: ${({theme}) => theme.fonts.font_primary};
            
          
            .first-text-image-banner{
                width:100%;
                
                font-weight:400;
                font-size:17px;
            }
            span{
              
                width:100%;
                font-size:20px;
            }

            .icon-image-banner-bottom-home{
                position: absolute;
                bottom:0;
                right:2%;
                color:#fff;
                margin-left:5px;
                font-size:19px;
            }
    
        }
    }

    @media screen and (min-width:670px){
        width:100%;
        padding:2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items:center;


        .image-banner-bottom-wrapper{
            width:100%;
            height:230px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:230px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }


    }

    @media screen and (min-width:750px){

        .image-banner-bottom-wrapper{
            width:100%;
            height:230px;
            position: relative;
            margin-top:20px;
            border-radius: 1rem;
            background-image: url(${BannerBottomDesktop});
            
    
            img{
                width:100%;
                height:130px;
                object-fit:cover;
                border-radius:10px;
                display:none;
            }
            
        }
        .text-wrapper-image-banner{
            position: absolute;
            bottom:15%;
            left:3%;
            font-family: ${({theme}) => theme.fonts.font_primary};
            
          
            .first-text-image-banner{
                width:100%;
            
                font-weight:400;
                font-size:20px;
            }
            span{
              
                width:100%;
                font-size:22px;
            }
            .icon-image-banner-bottom-home{
                position: absolute;
                bottom:0;
                right:2%;
                color:#fff;
                margin-left:5px;
                font-size:21px;
            }
    
        }

    }

    @media screen and (min-width:840px){
        width:100%;
        padding:2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items:center;


        .image-banner-bottom-wrapper{
            width:100%;
            height:270px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:270px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }

        .text-wrapper-image-banner{
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-family: ${({theme}) => theme.fonts.font_primary};
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          
            .first-text-image-banner{
                width:100%;
                color: rgb(241, 241, 241);
                font-weight:400;
                font-size:22px;
                text-align:center;
                opacity:.5;
            }
            span{
                color: rgb(241, 241, 241);
                width:100%;
                font-size:20px;
                opacity:.7;
               
            }
            .icon-image-banner-bottom-home{
             display:none;
            }

            .button-banner-bottom{
                display:block;
                color:#fff;
                background-color:rgb(206 207 56);
                border:1px solid rgb(232 201 0);
                border-radius:5px;
                padding:12px 29px;
                margin-top:20px;
                font-size: 16px;
                cursor:pointer;
            }
    
        }
    }

    @media screen and (min-width:1000px){
       
        padding:2rem 3rem;
        display: flex;
        flex-direction: column;
        align-items:center;


        .image-banner-bottom-wrapper{
            min-width:880px;
            width:880px;
            height:320px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:320px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }

        .text-wrapper-image-banner{
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-family: ${({theme}) => theme.fonts.font_primary};
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          
            .first-text-image-banner{
                width:100%;
                color: rgb(241, 241, 241);
                font-weight:400;
                font-size:30px;
                text-align:center;
                opacity:.5;
            }
            span{
                color: rgb(241, 241, 241);
                width:100%;
                font-size:24px;
                opacity:.7;
                margin-top:5px;
               
            }
            .icon-image-banner-bottom-home{
             display:none;
            }

            .button-banner-bottom{
                display:block;
                color:#fff;
               
                border-radius:5px;
                padding:12px 29px;
                margin-top:20px;
                font-size: 16px;
            }
    
        }
        
    }

    @media screen and (min-width:1200px){
        width:100%;
        padding:2rem 3rem;
        display: flex;
        flex-direction: column;
        align-items:center;


        .image-banner-bottom-wrapper{
            min-width:1100px;
            width:1100px;
            height:360px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:360px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }

        
        .text-wrapper-image-banner{
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-family: ${({theme}) => theme.fonts.font_primary};
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          
            .first-text-image-banner{
                width:100%;
                color: rgb(241, 241, 241);
                font-weight:400;
                font-size:30px;
                text-align:center;
                opacity:.5;
            }
            span{
                color: rgb(241, 241, 241);
                width:100%;
                font-size:24px;
                opacity:.7;
                margin-top:5px;
               
            }
            .icon-image-banner-bottom-home{
             display:none;
            }

            .button-banner-bottom{
                display:block;
                color:#fff;
            
                border-radius:5px;
                padding:12px 29px;
                margin-top:20px;
                font-size: 16px;
            }
    
        }
    }

    @media screen and (min-width:1350px){
        width:100%;
        padding:2rem 5rem;
        display: flex;
        flex-direction: column;
        align-items:center;


        .image-banner-bottom-wrapper{
           
            height:360px;
            position: relative;
            margin-top:20px;
    
            img{
                width:100%;
                height:360px;
                object-fit:cover;
                border-radius:10px;
            }
            
        }

        
        .text-wrapper-image-banner{
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-family: ${({theme}) => theme.fonts.font_primary};
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          
            .first-text-image-banner{
                width:100%;
                color: rgb(241, 241, 241);
                font-weight:400;
                font-size:30px;
                text-align:center;
                opacity:.5;
            }
            span{
                color: rgb(241, 241, 241);
                width:100%;
                font-size:24px;
                opacity:.7;
                margin-top:5px;
               
            }
            .icon-image-banner-bottom-home{
             display:none;
            }

            .button-banner-bottom{
                display:block;
                color:#fff;
              
                border-radius:5px;
                padding:12px 29px;
                margin-top:20px;
                font-size: 16px;
            }
    
        }
    }


`

export const SessionQuestions= styled.div`
    width:100%;
    padding:1rem 1rem;

  

    .questions-content-wrapper{
        width:100%;

        .title-session-questions{
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-align: center;
            margin-bottom:1rem;
            display: none;
        }
    }

    @media screen and (min-width:450px){
        padding:0 1rem;
    }
   
    @media screen and (min-width:580px){
        padding:0 2rem;
    }
    @media screen and (min-width:670px){
        
    }
    @media screen and (min-width:750px){
        
    }
     @media screen and (min-width:840px){
        padding:1rem 2rem;
        .questions-content-wrapper{
            width:100%;
    
            .title-session-questions{
                font-family: ${({theme}) => theme.fonts.font_primary};  
                line-height: 28px;
                margin-bottom: 24px;            
                font-weight: 500;
                text-align: center;
                display: block;
                padding-left:16px;
           
                padding: 0 0 1rem 0;

            }
        }
        
    }
    @media screen and (min-width:1000px){
        padding:2rem 0 2rem 0;
        display:flex;
        justify-content: center;
        align-items: center;
        .questions-content-wrapper{
            min-width:780px;
            width:780px;

        }
       
    }
    @media screen and (min-width:1200px){
        .questions-content-wrapper{
            min-width:900px;
            width:900px;

        }
        
    }
    @media screen and (min-width:1350px){
      
    }
    @media screen and (min-width:1450px){
        
    }

    @media screen and (min-width:1850px){
        
    }
`

export const SessionFooter= styled.div`
    margin-top:2rem;
    padding:2rem 0 2rem 0;
    width:100%;
    background-color:#f5f5f5;
    box-shadow: 1px -3px 20px -12px black;
`

export const ContactModalContainerHome = styled.div<{openModal:boolean}>`
    width:100%;
    height:100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:10000000;
    background:#fff;

    display: flex;
    flex-direction:column;
    display: ${({openModal}) => (openModal ? 'none' : 'flex')};

    .header-modal-contact-wrapper-home{
        border-bottom:.0625rem solid #e5e5e5;
        height: 3.5rem;

        display: flex;
        justify-content: center;
        align-items:center;
        
        .close-button-modal-contact-home{
            position: absolute;
            top:2%;
            right:5%;
            font-size:20px;
        }

        h1{
            font-family:${({theme})=> theme.fonts.font_primary};
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 150%;
                   
        }

    }

    h2{
        font-family:${({theme})=> theme.fonts.font_primary};
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 150%;
        margin-bottom:.5rem; 
        text-align: center;
        margin-top:30px;
    }
    .cod-property{
        padding-left:2rem;
        font-family:${({theme})=> theme.fonts.font_primary};
        font-weight: 200;
        font-size:12px;
        margin-top:2rem;
    }

    form{
        display: flex;
        flex-direction:column;
        padding:0 2rem;

     
        input{
            font-family:${({theme})=> theme.fonts.font_primary};
            transition: border-color .2s ease-in-out;
         
            font-size: 1rem;
            line-height: 150%;     
            border-radius: 2px;
            border: 0.0625rem solid #d2d2d2;
            background-color: #fff;
            padding: 0.625rem;
            height: 2.75rem;
            font-weight: 200;
            display: block;
            min-width: 7.5rem;
            width: 100%;
            background-clip: padding-box;
            outline:#9797ff;
            margin-top:1rem;

        }
        input:focus{
            border-color: #9797ff;
        }
        textarea{
            font-family:${({theme})=> theme.fonts.font_primary};
            transition: border-color .2s ease-in-out;
            border-color: #9797ff;
            outline:#9797ff;
            max-width: 100%;
            height: 152px;
            margin-top:1rem;
            border-radius:2px;
            background-clip: padding-box;
            border: 0.0625rem solid #d2d2d2;
            padding:.8rem;
            font-weight:200;
            font-size: 1rem;
        }
        textarea:focus{
            border-color: #9797ff;
        }

        button{           
            margin-top:1rem;
            font-family:${({theme})=> theme.fonts.font_primary};
            background: transparent;
            padding:8px;
            color:#0064e5;
            border: 0.0625rem solid #d2d2d2;
            -webkit-user-select: none;
            user-select: none;
            cursor: pointer;
            font-size:14px;
            text-transform: uppercase;

        }

        button:focus{
           border-color: #9797ff;
           box-shadow: 0px 0px 3px #0064e5;
           outline:none;
          
        }
    }

    @media screen and (min-width: 840px){
        width:400px;
        height:500px;
    
        -webkit-box-shadow: 10px 13px 8px -13px rgba(201,201,201,1);
    -moz-box-shadow: 10px 13px 8px -13px rgba(201,201,201,1);
    box-shadow: 10px 13px 8px -13px rgba(201,201,201,1);
    border:0.0625rem solid rgb(210, 210, 210);
    
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }

`

export const SessionCards= styled.div`
    width:100%;
    padding:1.5rem 1rem;

    @media screen and (min-width:780px){

        width: 100%;
        padding:2.1rem 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width:1000px){
     padding:2.3rem 2rem;
        
    }

    @media screen and (min-width:1280px){
        padding: 4rem 2rem;
           
       }
`


