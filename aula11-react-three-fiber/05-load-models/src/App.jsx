
import { Canvas } from '@react-three/fiber'
import './App.css'

import { Environment, OrbitControls } from "@react-three/drei";
// import pz from '/img/skyboxes/bluesky/lf.png?url'
// import nz from '/img/skyboxes/bluesky/rt.png?url'
// import py from '/img/skyboxes/bluesky/up.png?url'
// import ny from '/img/skyboxes/bluesky/dw.png?url'
// import px from '/img/skyboxes/bluesky/ft.png?url'
// import nx from '/img/skyboxes/bluesky/back.png?url'
import { JetModel } from './components/JetModel';

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={15}/>
        <directionalLight color="white" position={[0, 0, 5]} />
        <pointLight color="white" position={[0, 2, 2]} intensity={2.5} />
        <OrbitControls />
        <JetModel/>
        {/* <Environment background files={[px, nx, py, ny, pz, nz]} /> */}
        <Environment 
          background 
          files={[
              'ft.png',
              'back.png',
              'up.png',
              'dw.png',
              'lf.png',
              'rt.png'
            ]}
            path="/img/skyboxes/sunset/"
         /> 
      </Canvas>
    </div>
  )
}

export default App
