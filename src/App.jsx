import { useState } from 'react';
// a React renderer for Three.js
import { Canvas } from '@react-three/fiber';
// useful helpers for react-three-fiber
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
// physics library 'cannon' - physics based hooks
import { Physics, useBox, usePlane } from '@react-three/cannon';

import './App.css';


function Box() {
  // use canon hook
  {/*
      useBox is physics-only, it comes from the physics library 'cannon'.
      It approximates a shape and links it to arbitrary geometry. The physics
      engine now manages a literal box, a cube, and subjects it to gravity and other.
      Pick a shape that suits your objects contact surface, it could be a box, plane, sphere, etc.
      (if your shape resembles something like a sphere you'd use useSphere instead and so on.) 
      Give it a mass.
  */}
  // get a ref to the physics box representation - use useBox() then give it a callback, from this callback
  // we return an object that has props: position, mass (it will now be affected by gravity)
   const [ref, api] = useBox(() => ({ 
    mass: 1, 
    position: [0, 12, 0]
  }));

  // Hold state for clicked and hovered
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);

  return (
    // define mesh - equivalent to new THREE.Mesh()
    // tie mesh to the reference you have just received. It will now be affected by gravity 
    // and other objects inside the physics world.
    <mesh 
      ref={ref}
      position={[0, 12, 0]}
      scale={clicked ? 3 : 1}
      onClick={(e) => {
        api.velocity.set(0, 10, 0);
      }}
      onContextMenu={(e) => click(!clicked)}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}
    > 
      <boxBufferGeometry attach='geometry' /> {/* define boxBufferGeometry */}
      <meshLambertMaterial attach='material' color={ hovered ? 'darkblue' : 'darkred'} /> {/* define meshLambertMaterial */}
    </mesh>
  );
}

function Plane() {
  // use canon hook
  // get a ref to the physics plane representation - use usePlane() then give it a callback, from this callback
  // we return an object that has props: rotation
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));

  return (
    // define mesh
    // tie mesh to the reference you have just received. It will now be affected by gravity 
    // and other objects inside the physics world.
    <mesh 
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]}/> {/* define planeBufferGeometry */}
      <meshLambertMaterial attach='material' color='grey' /> {/* define meshLambertMaterial */}
    </mesh>
  );
}

function App() {
  const cameraConfig = { 
    fov: 25,
    position: [40, 3, -20],
    near: 10,
    far:1000
  }; // define camera 

  return (
    // Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
    // and renders our scene every frame (no need for traditional render-loop)
    <Canvas>
      {/* Orbit controls allow the camera to orbit around a target. */}
      <OrbitControls /> {/* define OrbitControls */}
      <Stars /> {/* define Stars */}
      <ambientLight intensity={0.5} /> {/* define ambientLight */}
      <spotLight position={[10, 15, 10]} angle={0.3} /> {/* define spotLight with position and angle */}
      <PerspectiveCamera 
        makeDefault 
        {...cameraConfig}
      /> {/* define Perspective camema (can set itself as default) */}
      <Physics> {/* create a physics world */}
        <Plane /> {/* define Plane */}
        <Box /> {/* define Box */}
      </Physics>
    </Canvas>
  );
}

export default App;
