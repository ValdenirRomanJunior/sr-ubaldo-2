import styled from "styled-components";


export const PseudoSearchContainer = styled.div`
    width: 100%;
    height:3rem;
    background:#fff;
    border-radius: 2.75rem;
    padding-left:1rem;
    padding-right:1rem;
    text-align:left;
    position: relative;
    display: flex;
    align-items: center;

  
    .arrow-location-pseudoSearch{
        position: absolute;
        left: 0.75rem;
        top: 0.9375rem;
    }

    button{
        background: transparent;
        border:none;
        color:#b2b2b2;
        font-size: 1rem;
        padding-left: 2.3rem;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding-right:2.3rem;
       
        font-family: ${({theme}) => theme.fonts.font_primary}
    }

    .input-rent-sale-wrapper-desktop{
        display: none;
    }

    .input-search-desktop{
        display: none;
    }

    .search-icon-pseudo-search{
     
    position: absolute;
    right: .75rem;
    top: .8125rem;

        color:gray;
        font-size:25px;
        line-height: 1;
        cursor: pointer;
     
    }
    .result-list-wrapper-desktop{
        display:none;
    }

   @media screen and (min-width:1000px){
        width: 70%;
        height:3rem;

        button{
            display:none;
        }

        .input-rent-sale-wrapper-desktop{
            position: relative;
            font-family: "Outfit", sans-serif;
            min-height: 3rem;
            display: flex;
            text-transform: uppercase;
            border-bottom: 1px solid rgb(229, 229, 229);
            margin-left:2rem;
            width:45%;

             label{
                width:33%;
             
                display: flex;
                align-items: center;
                    justify-content: center;
                    position: relative;
                    border-left: 1px solid rgb(229, 229, 229); 
            }
             input{
                position:absolute;
                top:50%;
                left:50%;
                visibility: hidden;
           
            }
     
      
            .label-class.activeRent .rent-span{
                border-radius:3px;
                display: flex;
                align-items: center;
                height:60%;              
                color:#fff;
                background:rgb(100, 100, 100);
                padding:0 10px;
             
            }
            .label-class.activeSale .sale-span{ 
                border-radius:3px;
                display: flex;
                align-items: center;
                height:60%;              
                color:#fff;
                background: rgb(100, 100, 100); 
                padding:0 10px;         
            }
            .label-class.activeRent .rent-span:hover{
                border-radius:3px;
                display: flex;
                align-items: center;
                height:60%;              
                color:#fff;
                background:#000;
                padding:0 10px;
             
            }
            .label-class.activeSale .sale-span:hover{ 
                border-radius:3px;
                display: flex;
                align-items: center;
                height:60%;              
                color:#fff;
                background:#000; 
                padding:0 10px;         
            }
      
            .rent-span{
               cursor: pointer;
                font-size: 12px;
                }
                .sale-span{
                    cursor: pointer;
                    font-size: 12px;
                }
                .select-half{
                    cursor: pointer;
                    text-align: center;
                    border:none;
                    font-family: "Outfit", sans-serif;
                    font-size:14px;
                    text-transform: uppercase;
                    width: 100%;
                    outline:none;
                   
                }
                .select-half option {
                  font-size: 12px;
                  outline:none;
                  border:none;
                }
              
        }

        .input-search-desktop{
            background: transparent;
            border:none;
            color:rgb(118 118 118);
            font-size: 1rem;
            padding-left: 2.3rem;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            padding-right:2.3rem;
            outline:none;     
            font-family: ${({theme}) => theme.fonts.font_primary};
            font-weight:300 !important;
            flex:1;

            
        }
        input::-webkit-input-placeholder{
            font-weight:200 !important;
        }
        input:-moz-placeholder{
            font-weight: 200 !important;
        }

        .result-list-wrapper-desktop{
            display:block;
            position: absolute;
            bottom: -100px;
            left:50%;
            z-index:1;
            width:300px;
          
        }
        .result-list-wrapper-desktop ul{
            width:300px;
        }
        .result-list-wrapper-desktop li{
            width:300px;
            background:#fff;
        }
        .result-list-wrapper-desktop input{
            width:300px;
        }
      
   }

   @media screen and (min-width:1300px){
    width: 65%;
    height:3rem;

    button{
        display:none;
    }

    .input-rent-sale-wrapper-desktop{
        position: relative;
        font-family: "Outfit", sans-serif;
        min-height: 3rem;
        display: flex;
        text-transform: uppercase;
        border-bottom: 1px solid rgb(229, 229, 229);
        margin-left:2rem;
        width:45%;

         label{
            width:33%;
         
            display: flex;
            align-items: center;
                justify-content: center;
                position: relative;
                border-left: 1px solid rgb(229, 229, 229); 
        }
         input{
            position:absolute;
            top:50%;
            left:50%;
            visibility: hidden;
       
        }
 
  
        .label-class.activeRent .rent-span{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:rgb(100, 100, 100);
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background: rgb(100, 100, 100); 
            padding:0 10px;         
        }
        .label-class.activeRent .rent-span:hover{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000;
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span:hover{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000; 
            padding:0 10px;         
        }
  
        .rent-span{
           cursor: pointer;
            font-size: 12px;
            }
            .sale-span{
                cursor: pointer;
                font-size: 12px;
            }
            .select-half{
                cursor: pointer;
                text-align: center;
                border:none;
                font-family: "Outfit", sans-serif;
                font-size:14px;
                text-transform: uppercase;
                width: 100%;
                outline:none;
               
            }
            .select-half option {
              font-size: 12px;
              outline:none;
              border:none;
            }
          
    }

    .input-search-desktop{
        background: transparent;
        border:none;
        color:rgb(118 118 118);
        font-size: 1rem;
        padding-left: 2.3rem;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding-right:2.3rem;
        outline:none;     
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:300 !important;
        flex:1;

        
    }
    input::-webkit-input-placeholder{
        font-weight:200 !important;
    }
    input:-moz-placeholder{
        font-weight: 200 !important;
    }

    .result-list-wrapper-desktop{
        display:block;
        position: absolute;
        bottom: -100px;
        left:50%;
        z-index:1;
        width:300px;
      
    }
    .result-list-wrapper-desktop ul{
        width:300px;
    }
    .result-list-wrapper-desktop li{
        width:300px;
        background:#fff;
    }
    .result-list-wrapper-desktop input{
        width:300px;
    }
  
}

@media screen and (min-width:1400px){
    width: 60%;
    height:3rem;

    button{
        display:none;
    }

    .input-rent-sale-wrapper-desktop{
        position: relative;
        font-family: "Outfit", sans-serif;
        min-height: 3rem;
        display: flex;
        text-transform: uppercase;
        border-bottom: 1px solid rgb(229, 229, 229);
        margin-left:2rem;
        width:45%;

         label{
            width:33%;
         
            display: flex;
            align-items: center;
                justify-content: center;
                position: relative;
                border-left: 1px solid rgb(229, 229, 229); 
        }
         input{
            position:absolute;
            top:50%;
            left:50%;
            visibility: hidden;
       
        }
 
  
        .label-class.activeRent .rent-span{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:rgb(100, 100, 100);
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background: rgb(100, 100, 100); 
            padding:0 10px;         
        }
        .label-class.activeRent .rent-span:hover{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000;
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span:hover{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000; 
            padding:0 10px;         
        }
  
        .rent-span{
           cursor: pointer;
            font-size: 12px;
            }
            .sale-span{
                cursor: pointer;
                font-size: 12px;
            }
            .select-half{
                cursor: pointer;
                text-align: center;
                border:none;
                font-family: "Outfit", sans-serif;
                font-size:14px;
                text-transform: uppercase;
                width: 100%;
                outline:none;
               
            }
            .select-half option {
              font-size: 12px;
              outline:none;
              border:none;
            }
          
    }

    .input-search-desktop{
        background: transparent;
        border:none;
        color:rgb(118 118 118);
        font-size: 1rem;
        padding-left: 2.3rem;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding-right:2.3rem;
        outline:none;     
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:300 !important;
        flex:1;

        
    }
    input::-webkit-input-placeholder{
        font-weight:200 !important;
    }
    input:-moz-placeholder{
        font-weight: 200 !important;
    }

    .result-list-wrapper-desktop{
        display:block;
        position: absolute;
        bottom: -100px;
        left:50%;
        z-index:1;
        width:300px;
      
    }
    .result-list-wrapper-desktop ul{
        width:300px;
    }
    .result-list-wrapper-desktop li{
        width:300px;
        background:#fff;
    }
    .result-list-wrapper-desktop input{
        width:300px;
    }
  
}

@media screen and (min-width:1700px){
    width: 50%;
    height:3rem;

    button{
        display:none;
    }

    .input-rent-sale-wrapper-desktop{
        position: relative;
        font-family: "Outfit", sans-serif;
        min-height: 3rem;
        display: flex;
        text-transform: uppercase;
        border-bottom: 1px solid rgb(229, 229, 229);
        margin-left:2rem;
        width:45%;

         label{
            width:33%;
         
            display: flex;
            align-items: center;
                justify-content: center;
                position: relative;
                border-left: 1px solid rgb(229, 229, 229); 
        }
         input{
            position:absolute;
            top:50%;
            left:50%;
            visibility: hidden;
       
        }
 
  
        .label-class.activeRent .rent-span{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:rgb(100, 100, 100);
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background: rgb(100, 100, 100); 
            padding:0 10px;         
        }
        .label-class.activeRent .rent-span:hover{
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000;
            padding:0 10px;
         
        }
        .label-class.activeSale .sale-span:hover{ 
            border-radius:3px;
            display: flex;
            align-items: center;
            height:60%;              
            color:#fff;
            background:#000; 
            padding:0 10px;         
        }
  
        .rent-span{
           cursor: pointer;
            font-size: 12px;
            }
            .sale-span{
                cursor: pointer;
                font-size: 12px;
            }
            .select-half{
                cursor: pointer;
                text-align: center;
                border:none;
                font-family: "Outfit", sans-serif;
                font-size:14px;
                text-transform: uppercase;
                width: 100%;
                outline:none;
               
            }
            .select-half option {
              font-size: 12px;
              outline:none;
              border:none;
            }
          
    }

    .input-search-desktop{
        background: transparent;
        border:none;
        color:rgb(118 118 118);
        font-size: 1rem;
        padding-left: 2.3rem;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding-right:2.3rem;
        outline:none;     
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-weight:300 !important;
        flex:1;

        
    }
    input::-webkit-input-placeholder{
        font-weight:200 !important;
    }
    input:-moz-placeholder{
        font-weight: 200 !important;
    }

    .result-list-wrapper-desktop{
        display:block;
        position: absolute;
        bottom: -100px;
        left:50%;
        z-index:1;
        width:300px;
      
    }
    .result-list-wrapper-desktop ul{
        width:300px;
    }
    .result-list-wrapper-desktop li{
        width:300px;
        background:#fff;
    }
    .result-list-wrapper-desktop input{
        width:300px;
    }
  
}
`
