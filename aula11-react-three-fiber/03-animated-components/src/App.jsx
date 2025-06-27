
import { Canvas } from '@react-three/fiber'
import './App.css'
import { RotatedBox } from './animated/RotatedBox'
import LogoIF3d from './animated/LogoIF3d'
function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <pointLight color="white" position={[0, 2, 2]} intensity={1.5} />
        {/* <RotatedBox/> */}
      <LogoIF3d/>
      </Canvas>
    </div>
  )
}

export default App
