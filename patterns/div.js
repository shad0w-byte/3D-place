import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props


const DivStyle = styled.div`
    position:${props => props.position || "relative"};
    background:${props => props.background|| "transparent"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    @media(max-width:576px){
        position: relative;
        width:auto;
        height:100%;
        margin:10px;
        padding:10px;
    }
`

export default function Div(props) {
    return (
        <DivStyle
         position={props.position}
         background={props.background}
         width={props.width}
         heigth={props.height}
         margin={props.margin}
         marginMobile={props.marginMobile}
         padding={props.padding}>
            {props.children}
        </DivStyle>
    )
}
