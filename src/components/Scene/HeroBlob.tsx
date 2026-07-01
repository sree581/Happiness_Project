import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  position?: [number, number, number];
};

export default function HeroBlob({
  position = [0, 0, 0],
}: Props) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ mouse, clock }) => {
    if (!mesh.current) return;

    // Gentle breathing
    const scale = 2.45 + Math.sin(clock.elapsedTime * 1.2) * 0.08;

    mesh.current.scale.set(scale, scale, scale);

    // Slow continuous rotation
    mesh.current.rotation.y += 0.0015;
    mesh.current.rotation.x += 0.0005;

    // Cursor interaction
    mesh.current.rotation.x +=
      (mouse.y * 0.25 - mesh.current.rotation.x) * 0.03;

    mesh.current.rotation.y +=
      (mouse.x * 0.25 - mesh.current.rotation.y) * 0.03;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.15}
      floatIntensity={0.45}
    >
      <mesh
        ref={mesh}
        position={position}
      >
        <icosahedronGeometry args={[1, 128]} />

        <MeshDistortMaterial
          color="#D9B08C"
          distort={0.55}
          speed={2.4}
          roughness={0}
          metalness={0}
          transmission={1}
          thickness={0.7}
          transparent
          opacity={0.58}
        />
      </mesh>
    </Float>
  );
}