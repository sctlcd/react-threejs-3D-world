import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import './App.css'
import { Physics, useBox, usePlane } from '@react-three/cannon';


function Box() {
  // use canon hook
  const [ref] = useBox(() => ({ 
    mass: 1, 
    position: [0, 6, 0] 
  }));

  return (
    // define mesh - equivalent to new THREE.Mesh()
    <mesh 
      ref={ref}
      position={[0, 6, 0]}
    > 
      <boxBufferGeometry attach="geometry" /> // define boxBufferGeometry
      <meshLambertMaterial attach="material" color="darkred" /> // define meshLambertMaterial
    </mesh>
  );
}

function Plane() {
  // use canon hook
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));

  return (
     // define mesh
    <mesh 
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]}/> // define planeBufferGeometry
      <meshLambertMaterial attach="material" color="grey" /> // define meshLambertMaterial
    </mesh>
  );
}

function App(props) {
  return (
    // Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
    // and renders our scene every frame (no need for traditional render-loop)
    <Canvas>
      {/* Orbit controls allow the camera to orbit around a target. */}
      <OrbitControls /> // define OrbitControls
      <Stars /> // define Stars
      <ambientLight intensity={0.5} /> // define ambientLight
      <spotLight position={[10, 15, 10]} angle={0.3} /> // define spotLight with position and angle props
      <Physics> // create a physics world
        <Plane /> // define Plane
        <Box /> // define Box
      </Physics>
    </Canvas>
  );
}

export default App
