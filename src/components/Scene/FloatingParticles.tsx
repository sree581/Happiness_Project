import { Float } from "@react-three/drei";

export default function FloatingParticles() {

  return (
    <>

      {[...Array(80)].map((_,i)=>{

        const x=(Math.random()-0.5)*12;
        const y=(Math.random()-0.5)*12;
        const z=(Math.random()-0.5)*8;

        return(

          <Float
          key={i}
          speed={1+Math.random()}
          floatIntensity={2}
          >

            <mesh position={[x,y,z]}>

              <sphereGeometry args={[0.015,16,16]}/>

              <meshBasicMaterial
              color="#e4c6aa"
              />

            </mesh>

          </Float>

        )

      })}

    </>
  )

}