import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`


    body{
        overflow-x:hidden;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Inconsolata', monospace;
    }
    div.scene-container{
        width:100vw;
        height:100vh;
        overflow-x:hidden ;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:800;
        padding:10px 0;
    }
    a{
        text-decoration:none;
        color:deepskyblue ;
        font-weight:bold;

        &:hover{
            letter-spacing:2px;
            transition: .1s ease-in-out ;
            color:deepskyblue;
        }
    }
    p{
        text-align:left;
        margin:10px 0;
        font-size:20px;
    } 
   
`
export default GlobalStyle