
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
      <Canvas camera={{rotation:[0,1,0], position:[.5,1,-4]}}>
        <ambientLight intensity={3}/>
        <directionalLight color="yellow" position={[0, 0, 1]} intensity={3} />
        <pointLight color="yellow" position={[0, 1, 1]} intensity={2.5} />
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
