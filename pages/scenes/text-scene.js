import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls,RandomizedLight} from '@react-three/drei'

import TextModel from '../../models-js/text'
import LinkModels from '../../components/link-models/link-models'

export default function TextScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - 3D Text"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[0,0,8]}} shadows={true}>
            <ambientLight color="white" intensity={0.1} position={[10,10,10]} castShadow={true}/> 
            <RandomizedLight castShadow={true} amount={8} frames={100} position={[5, 5, -10]} /> 
            <Center>
              <TextModel/>
            </Center>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
