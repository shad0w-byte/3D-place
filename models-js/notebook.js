import React from 'react'
import { useLoader} from "@react-three/fiber";
import {FBXLoader} from  'three/examples/jsm/loaders/FBXLoader'


export default function NotebookModel(props) {
  return (
    <>
        <mesh {...props}  receiveShadow={true} scale={0.3}>
            <primitive object={model}/>
        </mesh>
    </>
  )
}
