import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls,RandomizedLight} from '@react-three/drei'

import HouseModel from '../../models-js/house'
import LinkModels from '../../components/link-models/link-models'

export default function CatScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - House"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[20,20,30]}} shadows={true}>
            <ambientLight color="white" intensity={0.1} position={[10,10,10]} castShadow={true}/> 
            <RandomizedLight castShadow={true} amount={8} frames={100} position={[10, 10, 10]} /> 
              <HouseModel/>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
