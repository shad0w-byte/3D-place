import React from "react"
import Navbar from '../components/navbar/navbar'
import Head from '../components/head'

import FlexDiv from '../patterns/flex-div'
import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'
import styled from  'styled-components'
import Footer from "../components/footer/footer"
import LinkModels from "../components/link-models/link-models"

const GradientBg = styled.div`
  width:100%;
  height:auto;
  background: rgb(151,222,206);
  background: linear-gradient(90deg, rgba(151,222,206,1) 1%, rgba(0,191,255,1) 99%);
  color:#fff;
`
const ButtonLink = styled.button`
  width:calc(30%);
  display:block;
  margin:20px 0;
  border-radius:10px;
  padding:5px;
  background:linear-gradient(90deg, rgba(151,222,206,1) 1%, rgba(0,191,255,1) 99%);
  border:none;

  a{
    text-decoration:none;
    color:#fff;
    font-weight:bold;
    text-align:center;
  }
  
  &:hover, &:focus{
    color:#FFF;
    letter-spacing:2px;
    transition: .2s ease-in-out ;
  }
  
  @media(max-width:576px){
    width:auto ;
  }

`

export default function Home() {
  return (
    <>
      <header>
        <Head title="3D Place - by ssik824"/>
        <Navbar/>
      </header>
      <GradientBg>
        <FlexDiv direction="column" align="center" width="100vw" justify="center" padding="60px 20px">
          <div>
              <h1> <i className="bi bi-folder"></i>  Welcome !</h1>
              <p>
                <b>3D Place</b> is a personal project, i hope you like it!
              </p>
              <p>
                The main focus is show the power of 3d models on websites and show how the website was made! 
              </p>
          </div>
        </FlexDiv>
        </GradientBg>
        <GridDiv padding="40px 20px">
            <FlexDiv direction="column" justify="center" align="center">
              <div>
                  <h1> About the Project</h1>
                  <p>This project was made using <a href="https://nextjs.org/" rel="noreferrer" target="_blank">Next.js</a>, <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" rel="noreferrer" target="_blank">React Three Fiber</a>, <a href="https://github.com/pmndrs/drei" rel="noreferrer" target="_blank">React Three Drei</a> and  <a href="https://styled-components.com/" rel="noreferrer" target="_blank">Styled-Components</a>.</p>
                  <p>View models with controls, animations, light, textures, interactions and more! The source code are on my github. </p>
                  <ButtonLink>
                      <a href="https://github.com/victor-kiss/3D-place" rel="noreferrer" target="_blank">View Source Code</a>
                  </ButtonLink>
              </div>
            </FlexDiv>
            <Div>
              <Img src="/image1.svg" alt="image1" />
            </Div>
        </GridDiv>
        <LinkModels/>
        <Footer/>
    </>
  )
}
