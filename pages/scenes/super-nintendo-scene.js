import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls,RandomizedLight} from '@react-three/drei'

import SuperNintendoModel from '../../models-js/super-nintendo'
import LinkModels from '../../components/link-models/link-models'

export default function SuperNintendoScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Super Nintendo"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[10,10,30]}} shadows={true}>
            <ambientLight color="gray" intensity={0.2} position={[10,10,10]} castShadow={true}/> 
            <RandomizedLight castShadow={true} amount={8} frames={100} position={[10, 5, 10]} /> 
              <SuperNintendoModel/>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
