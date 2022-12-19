import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const Button = styled.button`
  width:auto;
  border:none;
  padding:5px;
  border-radius:10px;
  display:inline-block;
  margin:10px;
  background:transparent;
  border: 1px solid deepskyblue;

  &:hover, &:focus{
    transition: .1s ease-in-out;
    transform:scale(1.1);
  }

  a{text-decoration:none; font-size:18px;font-weight:600; color:deepskyblue ;padding:5px; letter-spacing:1px;}

`

export default function linkButton(props) {
  return (
    <>
     <Button bgColor={props.bgColor}>
        <Link href={props.href}>
        {props.children}
        </Link>
    </Button>
    </>

  )
}
