import React  from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function CybertruckModel(props) {
  const model = useLoader(FBXLoader, '/models/cybertruck.fbx')
  return (
    <>
    <mesh {...props} receiveShadow={true} scale={0.12}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
