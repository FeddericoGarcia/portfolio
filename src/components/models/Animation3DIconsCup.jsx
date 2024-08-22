import React, { useRef, useEffect  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Para poder rotar la cámara manualmente
import { gsap } from 'gsap';
// import * as THREE from 'three';

const Icon3D = ({ url }) => {
  const meshRef = useRef();
  const fbx = useLoader(FBXLoader, url);

  // useEffect(() => {
  //   fbx.traverse((child) => {
  //     if (child.isMesh) {
  //       child.material = new THREE.MeshStandardMaterial({
  //         color: new THREE.Color(0xff0000), // Cambia el color a rojo
  //         metalness: 0.5,
  //         roughness: 0.5,
  //       });
  //     }
  //   });
  // }, [fbx]);

  // Ajusta la escala y posición del modelo
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.5;
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      gsap.to(meshRef.current.rotation, {
        x: scrollY * 0.002,
        z: scrollY * 0.002,
        ease: 'power1.out',
      });
      // gsap.to(meshRef.current.position, {
      //   y: -scrollY * 0.05,
      //   ease: 'power1.out',
      // });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <mesh ref={meshRef} scale={[0.01, 0.01, 0.01]} position={[0, 0, 0]}>
      <primitive object={fbx} />
    </mesh>
  );
};

const Animation3DIcons = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Icon3D url="/models/cup.fbx" />
        <OrbitControls enableZoom={false} /> {/* Permite rotar la vista con el mouse */}
      </Canvas>
    </div>
  );
};

export default Animation3DIcons;