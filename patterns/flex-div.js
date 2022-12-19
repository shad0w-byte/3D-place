import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props

const FlexDivStyle = styled.div`
    width:${props => props.width || "auto"};
    height:${props => props.height|| "auto"};
    display:flex;
    flex-wrap:${props => props.wrap || "no-wrap"};
    flex-direction:${props => props.direction || "row"};
    justify-content:${props => props.justify || "baseline"};
    align-items:${props => props.align || "baseline"};
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};
    
    @media(max-width:576px){
        width: 100%;
        flex-direction:column;
        align-items:baseline;
        justify-content:baseline;
        padding:10px;
    }

`
export default function FlexDiv(props) {
    return (
        <FlexDivStyle 
        width={props.width}
        height={props.height}
        direction={props.direction} 
        justify={props.justify}  
        align={props.align}  
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        mediaFlexDisplay={props.mediaFlexDisplay}
        wrap={props.wrap}>
            {props.children}
        </FlexDivStyle>
    )
}

