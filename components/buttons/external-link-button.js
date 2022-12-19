import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background:transparent;
width:auto;
border:none;
border-radius:10px;
color:#97dece;
display:block;


&:hover{
  transform:scale(1.2);
  transition: .2s ease-in-out;
}

a{text-decoration:none; font-size:18px;font-weight:600; color:#97dece; }

 a > span{
  margin:5px 0;
  vertical-align: middle;
  font-size:18px;
}
`

export default function ExternalLinkButton(props) {
  return (
    <>
    <Button bgColor={props.bgColor}>
        <a href={props.url} target="_blank" rel="noreferrer">
           <span>{props.social_media}</span>
        </a>
    </Button>
    </>
  )
}
