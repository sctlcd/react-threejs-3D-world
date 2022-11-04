// a React renderer for Three.js
import { Canvas } from '@react-three/fiber';
// useful helpers for react-three-fiber
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
// physics library 'cannon' - physics based hooks
import { Physics } from '@react-three/cannon';
import { Box } from './components/Box';
import { Plane } from './components/Plane';
import { Controls } from './components/Controls';

import './App.css';

function App() {
  const cameraConfig = { 
    fov: 25,
    position: [40, 3, -20],
    near: 10,
    far:1000
  }; // define camera 

  return (
    <>
      {/* Canvas component: sets up a Scene and a Camera (basic building blocks necessary for rendering)
      and renders our scene every frame (no need for traditional render-loop) */}
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
      <Controls />
    </>
  );
}

export default App;
