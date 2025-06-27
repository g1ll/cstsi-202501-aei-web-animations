
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

function RotatedBox() {

 const rotateMesh = useRef()
  useFrame(() => {
    const rotateY = rotateMesh.current.rotation.y;
    rotateMesh.current.rotation.y = rotateY + 0.01
  })


  return (
    <mesh ref={rotateMesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  )
}

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <pointLight color="white" position={[0, 2, 2]} intensity={1.5} />
        <RotatedBox/>
      </Canvas>
    </div>
  )
}

export default App
