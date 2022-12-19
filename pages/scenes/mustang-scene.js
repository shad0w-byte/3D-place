import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls,Center} from '@react-three/drei'

import MustangModel from '../../models-js/mustang'
import LinkModels from '../../components/link-models/link-models'

export default function MustangScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Mustang"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[5,0,5]}} shadows={true}>
            <ambientLight color="white" intensity={0.3}/>
            <Center>
              <MustangModel/>
            </Center>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}