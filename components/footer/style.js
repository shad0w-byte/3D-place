import styled from 'styled-components'


const FooterStyle = styled.footer`
    height:auto;
    width:100%;
    display:block;
    background-color:#212121;
    color:#fff;
    
    @media(max-width:576px){
        position:${props => props.positionMobile || "relative"};
        text-align:left;
        margin-top: 20px;
        padding-top: 10px;
    }
    @media(max-width:768px){
        margin-top: 30px;
    
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
        text-align:left;
    }
    span{
        font-size:x-large ;
        font-weight:bold ;
    }
    a{
        color:#97dece;
    }
`
export {FooterStyle}