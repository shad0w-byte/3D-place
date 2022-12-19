import React from 'react'

import Head from '../../components/head'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, RandomizedLight, Center} from '@react-three/drei'

import FoodModel from '../../models-js/food'
import LinkModels from '../../components/link-models/link-models'

export default function FoodScene() {
  return (
    <div className='scene-container'>
        <header>
            <Head title="3D Place - Food"/>
            <Navbar/>
        </header>
        <Canvas camera={{position:[5,0,5]}} shadows={true}>
            <ambientLight color="white" intensity={0.2}/>
            <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, 10]} />
            <Center>
              <FoodModel/>
            </Center>
            <OrbitControls enableZoom={false}/>
        </Canvas>
        <LinkModels/>
        <Footer/>
    </div>
  )
}
