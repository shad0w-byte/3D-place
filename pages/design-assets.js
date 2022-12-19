import React from 'react'
import Navbar from '../components/navbar/navbar'
import Head from '../components/head'

import FlexDiv from '../patterns/flex-div'
import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'
import styled from  'styled-components'
import Footer from "../components/footer/footer"

const ColorArea = styled.div`
  width:32px;
  height:32px;
  margin-right:5px;
  background:${props => props.background || "transparent"} ;
`

export default function DesignAssets() {
  return (
    <div>
        <header>
            <Head title="3D Place - Design Assets"/>
            <Navbar/>
        </header>
        <GridDiv padding="60px 20px">
            <FlexDiv direction="column" justify="center" align="baseline">
              <div>
                  <h1>Design Assets</h1>
                  <p>View informations about 3D space's design:</p>
                  <ul>
                    <li>Font: <a href="https://fonts.google.com/specimen/Inconsolata?query=inco" rel="noreferrer" target="_blank">Inconsolata</a> </li>

                    <li>Images: <a href="https://undraw.co/" rel="noreferrer" target="_blank">Undraw</a> </li>

                    <li>
                      Colors: <ColorArea background="#97dece"/> #97dece <ColorArea background="#212121"/> #212121 <ColorArea background="#00bfff"/> #00bfff
                    </li>

                    <li>Styled With: <a href="https://styled-components.com/" rel="noreferrer" target="_blank">Styled-Components</a> and <a href="https://react-bootstrap.github.io/" rel="noreferrer" target="_blank">React-Bootstrap</a></li>
                  </ul>
              </div>
            </FlexDiv>
            <Div>
              <Img src="/image2.svg" alt="image2" />
            </Div>
        </GridDiv>
        <Footer/>
    </div>
  )
}
