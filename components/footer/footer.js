import React from 'react'
import {FooterStyle} from './style'
import FlexDiv from '../../patterns/flex-div'
import Div from '../../patterns/div'
import  Img from '../../patterns/img'
import Button from '../buttons/external-link-button'

export default function Footer() {
    return (
        <FooterStyle>
            <FlexDiv  justify="center" align="center" width="100%" height="100%">
              <Div 
              margin="10px" padding="10px" width="50%">
                    <span>Creator</span>
                    <p>Hello World! I&apos;m ssik, a brazilian web developer focused on ui/ux, webdesign and front-end projects!</p>
                    <p>Discover more about me visiting my website: <a href='https://ssik824.vercel.app/' rel='noreferrer' target="_blank">Click Here</a></p>
              </Div>
              <Div 
              margin="10px" padding="10px" width="50%">
                <span>Models From:</span>
                 <Button url="https://clara.io/"  social_media="Clara.io"/>
                 <Button url="https://free3d.com/" social_media="Free 3D"/>
              </Div>
            </FlexDiv>
        </FooterStyle>
    )
}
