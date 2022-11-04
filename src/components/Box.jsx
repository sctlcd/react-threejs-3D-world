// physics library 'cannon' - physics based hooks
import { useState } from 'react';
import { useBox } from '@react-three/cannon';

export const Box = () => {
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
};
