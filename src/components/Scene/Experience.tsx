import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

import HeroBlob from "./HeroBlob";
import FloatingParticles from "./FloatingParticles";

export default function Experience() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 38,
        }}
      >
        <color attach="background" args={["#F8F6F1"]} />

        {/* Lighting */}
        <ambientLight intensity={2} />

        <directionalLight
          position={[4, 4, 4]}
          intensity={2.8}
        />

        <pointLight
          position={[5, 4, 2]}
          intensity={35}
          color="#ffd7b2"
        />

        <pointLight
          position={[-4, -3, 3]}
          intensity={18}
          color="#ffffff"
        />

        <Environment preset="sunset" />

        {/* Main Sculpture */}
        <HeroBlob position={[0, 0.5, 0]} />

        {/* Floating Dust */}
        <FloatingParticles />

        {/* Floating Glass Shapes */}

        <Float speed={1} rotationIntensity={0.3}>
          <mesh position={[-5, -2, -3]}>
            <icosahedronGeometry args={[0.35, 5]} />
            <meshPhysicalMaterial
              color="#D9B08C"
              transparent
              opacity={0.4}
              transmission={1}
              roughness={0}
            />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.4}>
          <mesh position={[5, 2, -4]}>
            <sphereGeometry args={[0.25, 64, 64]} />
            <meshPhysicalMaterial
              color="#EBD6C4"
              transparent
              opacity={0.5}
              transmission={1}
              roughness={0}
            />
          </mesh>
        </Float>

        <Float speed={2}>
          <mesh position={[2, -4, -3]}>
            <octahedronGeometry args={[0.45]} />
            <meshPhysicalMaterial
              color="#F2E8DD"
              transparent
              opacity={0.45}
              transmission={1}
              roughness={0}
            />
          </mesh>
        </Float>

        <Float speed={1.2}>
          <mesh position={[-2, 4, -5]}>
            <torusGeometry args={[0.4, 0.04, 32, 120]} />
            <meshStandardMaterial
              color="#B98773"
            />
          </mesh>
        </Float>

        {/* Background Floor */}

        <mesh position={[0, -3.8, -5]} rotation={[-Math.PI / 2.5, 0, 0]}>
          <planeGeometry args={[30, 30]} />

          <meshBasicMaterial
            color="#efe8dc"
            transparent
            opacity={0.45}
          />
        </mesh>

      </Canvas>

    </div>
  );
}