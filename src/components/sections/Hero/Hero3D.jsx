import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const ACCENT = "#f2f2ed";
const DIM = "#6b6b66";

function FieldShapes({ scrollRef }) {
  const group = useRef(null);
  const ico = useRef(null);
  const torus = useRef(null);
  const octa = useRef(null);

  useFrame((state) => {
    const scroll = scrollRef?.current ?? 0;
    const t = state.clock.elapsedTime;

    if (ico.current) {
      ico.current.rotation.x = t * 0.16 + scroll * 1.8;
      ico.current.rotation.y = t * 0.22 + scroll * 1.3;
    }
    if (torus.current) {
      torus.current.rotation.x = t * 0.1 - scroll * 1.2;
      torus.current.rotation.z = t * 0.13 + scroll * 1.5;
    }
    if (octa.current) {
      octa.current.rotation.y = t * 0.2 + scroll * 2;
      octa.current.rotation.x = t * 0.1;
    }
    if (group.current) {
      group.current.position.y = scroll * 1.6;
      group.current.rotation.y = state.pointer.x * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* kept clear of the copy column (right side / corners only) */}
      <mesh ref={ico} position={[3.4, 2.6, -2.6]}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.5} toneMapped={false} />
      </mesh>
      <mesh ref={torus} position={[3.9, -2.5, -3]}>
        <torusGeometry args={[0.55, 0.17, 8, 28]} />
        <meshBasicMaterial color={DIM} wireframe transparent opacity={0.55} toneMapped={false} />
      </mesh>
      <mesh ref={octa} position={[5, 0.2, -3.6]}>
        <octahedronGeometry args={[0.34, 0]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.45} toneMapped={false} />
      </mesh>
    </group>
  );
}

export function Hero3DField({ scrollRef }) {
  return (
    <Canvas
      className="hero3d-field-canvas"
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <FieldShapes scrollRef={scrollRef} />
    </Canvas>
  );
}
