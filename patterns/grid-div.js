import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props

const GridDivStyle = styled.div` 
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    width:100%;
    height:100% ;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};
    backdrop-filter:blur(4px);
    -webkit-backdrop-filter:blur(4px);
    border-radius:10px;
    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.column || "column-reverse"};
        align-items:flex-start;
        justify-content:center;
    }
`
export default function GridDiv(props) {
    return (
        <GridDivStyle
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        column={props.column}>
            {props.children}
        </GridDivStyle>
    )
}

