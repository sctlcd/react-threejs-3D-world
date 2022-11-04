// physics library 'cannon' - physics based hooks
import { usePlane } from '@react-three/cannon';

export const Plane = () => {
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
};