import { Float } from "@react-three/drei";

export default function FloatingLights() {
  return (
    <>
      <Float speed={1.2}>
        <mesh position={[-4, 2, -2]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshBasicMaterial color="#E7B98F" />
        </mesh>
      </Float>

      <Float speed={2}>
        <mesh position={[3, -2, -1]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshBasicMaterial color="#F6F3ED" />
        </mesh>
      </Float>

      <Float speed={1.5}>
        <mesh position={[2, 3, -3]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshBasicMaterial color="#C5A08D" />
        </mesh>
      </Float>
    </>
  );
}