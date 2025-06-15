import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import jungleImg from "/img/jungle.jpg?url"

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const texture = new THREE.TextureLoader()

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  75, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);

camera.position.z = 2

// //Luz
var light = new THREE.AmbientLight(0x333333, 10);
scene.add(light);

//Ponto de Luz
const plight = new THREE.PointLight(0xffffff, 100);
plight.position.set(5, 1, 0)
plight.distance = 10
scene.add(plight);

const helper = new THREE.PointLightHelper(plight)
scene.add(helper)


const modelPath = 'models/monkey2/'
const objFile = 'monkey_blender2.obj'

const manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const objLoader = new OBJLoader(manager);

const monkey = {};

objLoader.setPath(modelPath)
  .load(objFile, (object) => {
    // object.traverse(child =>child.material?.color.setHex(0x110055));
    object.traverse(child => {
      let monkeyMaterial = {}
      monkeyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
      // monkeyMaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 })
      // monkeyMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 })
      // monkeyMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
      child.material = monkeyMaterial
      return child
    });
    monkey.model = object
    monkey.model.scale.setScalar(.75)
    scene.add(object)
    texture.load(jungleImg, (textureLoaded) => {
      console.log('Carregou imagem!')
      scene.background = textureLoaded
      animate()
    });
  })

function animate() {
  plight.position.x -= .01
  monkey.model.rotation.y += .01
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}