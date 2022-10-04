import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './App.css'


function Box() {
  return (
    <mesh> // define mesh
      <boxBufferGeometry attach="geometry" /> // define boxBufferGeometry
      <meshLambertMaterial attach="material" color="red" /> // define meshLambertMaterial
    </mesh>
  );
}

function App() {
  return (
    // Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
    // and renders our scene every frame (no need for traditional render-loop)
    <Canvas>
      {/* Orbit controls allow the camera to orbit around a target. */}
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

export default App
