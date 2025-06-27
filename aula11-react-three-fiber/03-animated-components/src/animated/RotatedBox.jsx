import { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'

function RotatedBox({ x, y, z, color }) {

   const rotateMesh = useRef()
  const direction = useRef(true)
  const limit = 3.14;
  const speed = 0.01;

  useFrame(() => {
    const rotateY =  rotateMesh.current.rotation.y;
    if(rotateY >limit && direction.current){
      direction.current = false
    }
    if(rotateY <-limit && !direction.current){
      direction.current = true
    }
    const rotateFactor = direction.current?1:-1;
    rotateMesh.current.rotation.y = rotateY+speed*rotateFactor
  })

  return (
    <mesh ref={rotateMesh} 
      position-y={y} 
      position-x={x}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color?color:0x00ff00} />
    </mesh>
  )
}
export {RotatedBox};
