import React  from 'react'
import { useLoader } from "@react-three/fiber";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

export default function MustangModel(props) {
  const model = useLoader(FBXLoader, '/models/mustang.fbx')
  return (
    <>
    <mesh {...props} receiveShadow={true}>
        <primitive object={model} />
    </mesh>
    </>
  )
}
