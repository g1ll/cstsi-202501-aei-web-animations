
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <pointLight color="white" position={[0, 2, 2]} intensity={1.5}/>
        <mesh rotation-y={1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={0x00ff00}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
