import React from 'react'

import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

  
export default function FoodModel(props) {
    const model = useLoader(FBXLoader, '/models/food.fbx')
  return (
    <mesh {...props} receiveShadow={true} scale={0.02}>
        <primitive object={model}/>
    </mesh>
  )
}
