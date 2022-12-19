import React from 'react'
import {GradientTexture,Text3D} from '@react-three/drei'
import font from '../public/font/Zen_ Dots_Regular.json'

export default function TextModel(props) {
  const options = {
    size:1.5,
    lineHeight:1,
    letterSpacing:0.1,
  }

  return (
    <mesh {...props} receiveShadow={true}>
          <ambientLight castShadow={true} color='white' intensity={0.2}/>
          <Text3D font={font} {...options}>
             3D Place
             <meshBasicMaterial>
              <GradientTexture stops={[0,1]} colors={['deepSkyBlue','#97dece']}/>
             </meshBasicMaterial>
          </Text3D>
    </mesh>
  )
}
