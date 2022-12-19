import React from 'react'


import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

import EarthModel from '../../models-js/earth'
import LinkModels from '../../components/link-models/link-models'

export default function EarthScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Earth"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[0,0,10.5]}} shadows={true}>
            <ambientLight color="white" intensity={0.2}/>
            <EarthModel/>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
