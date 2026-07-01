import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
import LiquidBlob from "./HeroBlob";
import FloatingLights from "./FloatingLights";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <color attach="background" args={["#F8F6F1"]} />

        <LiquidBlob />
        <FloatingLights />

        <OrbitControls
    enableZoom={false}
    enableRotate={false}
    enablePan={false}
/>
    <pointLight
    position={[3,3,3]}
    intensity={35}
    color="#ffd9b5"
/>

<pointLight
    position={[-3,-2,2]}
    intensity={18}
    color="#ffffff"
/>
      </Canvas>

    </div>
  );
}