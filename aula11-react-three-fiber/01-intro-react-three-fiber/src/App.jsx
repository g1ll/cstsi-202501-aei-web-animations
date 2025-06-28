
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight  color="white" position={[0, 0, 5]} />
        <pointLight color={0x00ff00} position={[0, 2, 2]} intensity={5}/>
        <mesh rotation={[1,1,1]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={0x00ff00}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
