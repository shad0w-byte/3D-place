import React  from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function CatModel(props) {
  const model = useLoader(FBXLoader, '/models/cat.FBX')
  return (
    <>
    <mesh {...props} receiveShadow={true} scale={0.2}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
