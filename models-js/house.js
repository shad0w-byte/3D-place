import React from 'react'

import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function House(props) {
    const model = useLoader(FBXLoader,'/models/casa.fbx')
  return (
    <>
    <mesh {...props} receiveShadow={true} scale={0.11}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
