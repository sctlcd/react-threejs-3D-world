import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './App.css'


function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>

        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  );
}

export default App
