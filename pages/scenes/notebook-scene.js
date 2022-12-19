import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls,RandomizedLight,Center} from '@react-three/drei'

import NotebookModel from '../../models-js/notebook'
import LinkModels from '../../components/link-models/link-models'

export default function NotebookScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Notebook"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[0,0,15]}} shadows={true}>
            <ambientLight color="white" intensity={0.2}/>
            <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} />
            <Center>
              <NotebookModel/>
              </Center>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
