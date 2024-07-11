import styled from "styled-components";


export const ContactContainer = styled.div`
    width:100%;
    position: relative;
`

export const ContactModalContainer=styled.div<{openModal:boolean}>`
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

.header-modal-contact-wrapper-component{
    border-bottom:.0625rem solid #e5e5e5;
    height: 3.5rem;

    display: flex;
    justify-content: center;
    align-items:center;
    
    .close-button-modal-contact-component{
        position: absolute;
        top:2%;
        right:5%;

        font-size:20px;
        cursor: pointer;
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
.cod-property-component{
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
        font-weight:200;
        padding:.5rem;
        min-width: 100%;
    }
    textarea:focus{
        border-color: #9797ff;
    }

    textarea::placeholder{
       font-weight:200;
       font-size:14px;
       
    }


    button{           
        margin-top:1rem;
        font-family:${({theme})=> theme.fonts.font_primary};
        background: #0064e5;
        padding:8px;
        color:#fff;
        border: 0.0625rem solid #d2d2d2;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        font-size:14px;
        text-transform: uppercase;
        cursor: pointer;

    }

    button:focus{
       border-color: #9797ff;
       box-shadow: 0px 0px 3px #0064e5;
       outline-none;
      
    }
}


.message{
    width:200px;
    height:40px;
    -webkit-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    -moz-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    font-weight:300;
    background: #629a7f;
  
    z-index:1;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    bottom:10%;
    left:50%;
    transform: translate(-50%,-50%);

}
.success{
    font-family:${({theme})=> theme.fonts.font_primary};
    color: #fff;
}

.other-error{
    width:200px;
    height:40px;
    -webkit-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    -moz-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
    font-weight:300;
    background: rgb(227 60 60 / 68%);
   
    z-index:1;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    bottom:10%;
    left:50%;
    transform: translate(-50%,-50%);
    font-family:${({theme})=> theme.fonts.font_primary};
    color: #fff;
}

.formField__error{
  
    color:red;
    font-family:${({theme})=> theme.fonts.font_primary};
    font-weight:300;
    font-size:12px;
  
   
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

    .header-modal-contact-wrapper-component{
        border-bottom:.0625rem solid #e5e5e5;
        min-height: 2.3rem;
        max-height: 2.5rem;
    
        display: flex;
        justify-content: center;
        align-items:center;
        
        .close-button-modal-contact-component{
            position: absolute;
            top:2%;
            right:5%;
    
            font-size:20px;
            cursor: pointer;
        }
    
        h1{
            font-family:${({theme})=> theme.fonts.font_primary};
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
          
            
        }
    
    }
    
    h2{
        font-family:${({theme})=> theme.fonts.font_primary};
        font-weight: 300;
        font-size: .9rem;
        line-height: 150%;
        margin-bottom:.5rem; 
        text-align: center;
        margin-top:10px;
    }
    .cod-property-component{
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

        .input-modal-wrapper{
            position:relative;
        }
    
     
        input{
            font-family:${({theme})=> theme.fonts.font_primary};
            transition: border-color .2s ease-in-out;
         
            font-size: 1rem;
            line-height: 150%;     
            border-radius: 2px;
            border: 0.0625rem solid #d2d2d2;
            background-color: #fff;
            padding: 0.625rem;
            height: 2.45rem;
            font-weight: 200;
            display: block;
            min-width: 7.5rem;
            width: 100%;
            background-clip: padding-box;
            outline:#9797ff;
            margin-top:1.2rem;
    
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
            height: 122px;
            margin-top:1rem;
            border-radius:2px;
            background-clip: padding-box;
            border: 0.0625rem solid #d2d2d2;
            font-weight:200;
            padding:.5rem;
            min-width: 100%;
        }
        textarea:focus{
            border-color: #9797ff;
        }
    
        textarea::placeholder{
           font-weight:200;
           font-size:14px;
           
        }
    
    
        button{           
            margin-top:1rem;
            font-family:${({theme})=> theme.fonts.font_primary};
            background:  #0064e5;
            padding:8px;
            color:#fff;
            border: 0.0625rem solid #d2d2d2;
            -webkit-user-select: none;
            user-select: none;
            cursor: pointer;
            font-size:14px;
            text-transform: uppercase;
            cursor: pointer;
    
        }
    
        button:focus{
           border-color: #9797ff;
           box-shadow: 0px 0px 3px #0064e5;
           outline-none;
          
        }
    }
    
    
    .message{
        width:200px;
        height:30px;
        -webkit-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        -moz-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        font-weight:300;
        background: #629a7f;
       
        z-index:1;
    
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: fixed;
        bottom:-1%;
        left:50%;
        transform: translate(-50%,-50%);
    
    }
    .success{
        font-family:${({theme})=> theme.fonts.font_primary};
        color: #fff;
    }
    
    .other-error{
        width:200px;
        height:40px;
        -webkit-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        -moz-box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        box-shadow: 0px 6px 8px -2px rgba(209,209,209,1);
        font-weight:300;
        background: rgb(227 60 60 / 68%);
       
        z-index:1;
    
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: fixed;
        bottom:10%;
        left:50%;
        transform: translate(-50%,-50%);
        font-family:${({theme})=> theme.fonts.font_primary};
        color: #fff;
    }
    
    .formField__error{
      
        color:red;
        font-family:${({theme})=> theme.fonts.font_primary};
        font-weight:300;
        font-size:12px;
      
    }
    .formField__error.textarea-class{
        position: absolute;
        bottom:-10%;
        left:0;
    }
    .formField__error.error-name{
        position: absolute;
        bottom:-27%;
        left:0;
    }
    .formField__error.error-phone{
        position: absolute;
        bottom:-27%;
        left:0;
    }
}

`

export const ContactButtonOpenWrapper = styled.div`
    width:100%;
    text-align: center;


    .button-open-modal-home-contact{
        width:80%;
        font-family: ${({theme}) => theme.fonts.font_primary};
        background:rgb(165 166 0 / 69%);
        border-radius:20px;
        color:#fff;
        border:none;
        padding:10px ;
        margin-top:20px;
        text-transform: uppercase;
        font-size:11px;
        cursor:pointer;
    }

    @media screen and (min-width:550px){
     
        .button-open-modal-home-contact{
            width:280px;
        }

    }

`