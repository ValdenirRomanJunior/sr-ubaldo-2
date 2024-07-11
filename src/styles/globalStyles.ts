import {createGlobalStyle} from 'styled-components';




const GlobalStyle = createGlobalStyle`



* {
   
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  
}

body {
    background-color: ${({theme}) => theme.colors.background};
    letter-spacing: .45px;
}

a{
    text-decoration: none;
   
    font-family:${({theme}) => theme.fonts.font_primary};
    
    
}

`
export default GlobalStyle