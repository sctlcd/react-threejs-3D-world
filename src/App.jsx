import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import './App.css'


function Box() {
  return (
    <mesh position={[-2, 1, 2]}> // define mesh - equivalent to new THREE.Mesh() - with position prop
      <boxBufferGeometry attach="geometry" /> // define boxBufferGeometry
      <meshLambertMaterial attach="material" color="darkred" /> // define meshLambertMaterial
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}> // define mesh with position and rotation props
      <planeBufferGeometry attach="geometry" args={[100, 100]}/> // define planeBufferGeometry
      <meshLambertMaterial attach="material" color="darkgrey" /> // define meshLambertMaterial
    </mesh>
  );
}

function App() {
  return (
    // Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
    // and renders our scene every frame (no need for traditional render-loop)
    <Canvas>
      {/* Orbit controls allow the camera to orbit around a target. */}
      <OrbitControls /> // define OrbitControls
      <Stars /> // define Stars
      <ambientLight intensity={0.5} /> // define ambientLight
      <spotLight position={[10, 15, 10]} angle={0.3} /> // define spotLight with position and angle props
      <Box /> // define 
      <Plane />
    </Canvas>
  );
}

export default App
