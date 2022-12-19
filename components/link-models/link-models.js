import React from 'react'

import FlexDiv from '../../patterns/flex-div'
import Div from '../../patterns/div'

import LinkButton from '../buttons/link-button'

export default function LinkModels() {
  return (
    <FlexDiv direction="column" justify="center" align="center" width="100%" height="auto" margin="20px 0" padding="20px">
        <h2>Models</h2>
        <p>Click with your finger / mouse and slide to see the magic !</p>
        <Div>
        <LinkButton href="/scenes/house-scene">
          House
        </LinkButton>
        <LinkButton href="/scenes/mustang-scene">
            Mustang
        </LinkButton>
        <LinkButton  href="/scenes/cat-scene">
            Cat
        </LinkButton>
        <LinkButton href="/scenes/earth-scene">
            Earth
        </LinkButton>
        <LinkButton href="/scenes/food-scene" >
            Food
        </LinkButton>
        <LinkButton href="/scenes/nefertiti-scene">
            Nefertiti
        </LinkButton>
        <LinkButton href="/scenes/notebook-scene">
           Notebook
        </LinkButton>
        <LinkButton href="/scenes/spooky-valley-scene">
           Spooky Valley
        </LinkButton>
        <LinkButton href="/scenes/super-nintendo-scene">
            Super Nintendo
        </LinkButton>
        <LinkButton href="/scenes/text-scene">
           3D Text
        </LinkButton>
        </Div>
    </FlexDiv>

  )
}
