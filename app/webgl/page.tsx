"use client";
import React, { useRef, useState }  from 'react';
import { lusitana } from '@/app/ui/fonts';

import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Text3D, OrbitControls, useMatcapTexture, Plane, SpotLightShadow, SpotLight, Environment, Sky, Circle, Text } from '@react-three/drei';
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber';
import { Bloom } from '@react-three/postprocessing';
import {Physics  } from '@react-three/cannon';



function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
  
function Bemil () {
    const [matcapTexture] = useMatcapTexture("304FB1_69A1EF_5081DF_5C8CE6");
    return (
        <Text3D
            font={'lusitana.json'}
            position={[0, 0, 0]}
            scale={[1, 1, 0.3]}
            curveSegments={25}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.03}
            height={1}
            lineHeight={0.9}
            castShadow
        >
            {`Bemil`}
            <meshMatcapMaterial color="white" matcap={matcapTexture} />
        </Text3D>
    );

}

function Ground() {
    
    return (
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
            <meshStandardMaterial color="lightblue" />
        </Plane>
    );
}



export default function Page() {
    const orbitRef = useRef(null);
    return (
        <Canvas 
            shadows 
            dpr={[1, 2]} 
            camera={{ 
                position: [-8, 8, 8], 
                fov: 30 
            }} 
            onCreated={({ camera }) => camera.lookAt(0, 50, 50)}
        >
            <SpotLight
                distance={20}
                intensity={500}
                angle={THREE.MathUtils.degToRad(45)}
                color={"#fadcb9"}
                position={[-1, 6, 7]}
                volumetric={true}
            >
                <SpotLightShadow
                    scale={4}
                    distance={0.4}
                    width={2048}
                    height={2048}
                    shader={/* glsl */ `
                    `}
                />
            </SpotLight>
            <hemisphereLight
                args={[0x7095c1, 0xcbc1b2, 1.5]} //
                position={[0, 50, 0]}
            />
            <Box position={[-1, 0, 0]} castShadow receiveShadow />
            <Bemil />
            <Ground />
            <OrbitControls ref={orbitRef} target={[1.5, 0.5, 0]}/>
        </Canvas>
    );
}