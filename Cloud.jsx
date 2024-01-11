/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src/assets/models/3D/cloud.glb 
Author: gaelinix (https://sketchfab.com/gaelinix)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-high-poly-7f3c3f525f8e42d3b99dcfe3abbc5e54
Title: CLOUD high poly
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/cloud.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Nube001_Material_0.geometry}
          material={materials.Material}
          position={[677.233, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={58.204}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cloud.glb");