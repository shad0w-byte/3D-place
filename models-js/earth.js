import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function EarthModel(props) {
  const texture = useLoader(TextureLoader,'/textures/earth.jpg')
    return (
      <mesh {...props} >
        <sphereBufferGeometry args={[6, 60, 20]} />
        <meshStandardMaterial map={texture}/>
      </mesh>
    );
  }
  