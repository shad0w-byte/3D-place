import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls,RandomizedLight,Center} from '@react-three/drei'

import SpookyValleyModel from '../../models-js/spooky-valley'
import LinkModels from '../../components/link-models/link-models'

export default function SpookyValleyScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Spooky Valley"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[5,5,20]}} shadows={true} color='#1C315E'>
            <ambientLight color="white" intensity={0.2}/>
            <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} />
            <Center>
              <SpookyValleyModel/>
              </Center>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}