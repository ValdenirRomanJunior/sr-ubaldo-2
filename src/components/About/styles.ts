import styled from "styled-components";

export const QuestionContainer = styled.div`
    width:100%;
   
`

export const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    border-top: 0.0625rem solid #e5e5e5;
    padding:.7rem 1rem;
    position: relative;
    z-index:1;
    cursor:pointer;


    span{
        font-family: ${({theme}) => theme.fonts.font_primary};
    }
    .icon-plus-question{
        font-size:27px;
    }
`
export const AnswerWrapper = styled.div<{open:boolean}>`
    width:100%;
    display: ${({open}) => (open ? 'block' : 'none')}; 
    border-top: 0.0625rem solid #e5e5e5;
    transition: 1s;

    padding:1rem 0;

    h2{
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:500;
        padding:1rem 1rem;
        font-size:15px;
        margin-top:10px;

    }

    p{
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:200;
        padding:1rem 1rem;
        font-size:13px;
            
    }
    
    span{
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:200;
        padding:.5rem 1rem;
        font-size:13px;
        display:block;
    }
`

export const  ModalLinkQuestion = styled.div<{openLink:boolean}>`
        width:100%;     
        background: #fff;
        z-index:9999999;
        height:100vh;
        position: fixed;
        top:0;
        left:0;
        overflow: scroll;

        display: ${({openLink}) => (openLink ? 'block' : 'none')};
        
        .header-modal-link-question{
            width:100%;
            height:50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top:2rem;

            .icon-close-modal-link-question{
                position: absolute;
                top:-7%;
                right: 7%;

                font-size:25px;
            }

            .title-modal-link-question{
                font-family: ${({theme}) => theme.fonts.font_primary};
                font-size:19px;
            }
        }

        .subtitle-modal-link-question{
            font-size:14px;
            font-family: ${({theme}) => theme.fonts.font_primary};
            text-transform: uppercase;
            margin-top:1rem;

        }

        .text-modal-link-question{
            font-family: ${({theme}) => theme.fonts.font_primary};
            margin-top:10px;
            font-size:14px;
        }
        .text-wrapper-modal-link-question{
            padding:1rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
          

        }

`