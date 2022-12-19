import React  from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function TrailerModel(props) {
  const model = useLoader(FBXLoader, '/models/super-nintendo.fbx')
  return (
    <>
    <mesh {...props} receiveShadow={true} scale={40}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
