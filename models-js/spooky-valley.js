import React  from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function SpookyValleyModel(props) {
  const model = useLoader(FBXLoader, '/models/valley.fbx')
  return (
    <>
    <mesh {...props} receiveShadow={true} scale={1}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
