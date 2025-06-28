
import { Canvas } from '@react-three/fiber'
import './App.css'
import { TextureBox } from './components/TextureBox'
import textureImage from '/img/crate.jpg?url'
// import rocksTexture from './assets/textures/rocks.jpg?url'
import rocksTexture from '/img/rocks.jpg?url'
import { UseTextureBox } from './components/UseTextureBox'

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={3}/>
        <directionalLight color="white" position={[0, 0, 5]} />
        <pointLight color="white" position={[0, 2, 2]} intensity={2.5} />
        <TextureBox texture={textureImage}/>
        <UseTextureBox texture={rocksTexture} y={-2.1}/>
      </Canvas>
    </div>
  )
}

export default App
