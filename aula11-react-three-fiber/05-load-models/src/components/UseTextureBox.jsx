import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react";
import { useTexture } from "@react-three/drei"; //https://drei.docs.pmnd.rs/getting-started/introduction

function UseTextureBox({ x, y, z, color, texture }) {

  const rotateMesh = useRef()
  const direction = useRef(true)
  const limit = 3.14;
  const speed = 0.01;
  console.log(texture)
  const textureProps = useTexture({map:texture})

  useFrame(() => {
    const rotateY = rotateMesh.current.rotation.y;
    if (rotateY > limit && direction.current) {
      direction.current = false
    }
    if (rotateY < -limit && !direction.current) {
      direction.current = true
    }
    const rotateFactor = direction.current ? 1 : -1;
    rotateMesh.current.rotation.y = rotateY + speed * rotateFactor
  })

  return (
    <Suspense fallback={null}>
      <mesh ref={rotateMesh}
        position-y={y}
        position-x={x}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial {...textureProps}/>
      </mesh>
    </Suspense>
  )
}
export { UseTextureBox };
