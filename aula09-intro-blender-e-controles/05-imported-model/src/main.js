import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import AppleParkImg from '/imgs/apple-park.jpeg?url'


const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

scene.background = new THREE.Color(0x000000)

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  75, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);
let ww = window.innerWidth
let zi = 2
camera.position.z = zi
//Ajuste da camera de acordo com redimensionamento da tela
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  // não muda ao aumentar a tela novamente
  // camera.position.z += (ww - window.innerWidth)*.00001
  //modelar com a divisão (porcentagem da tela)
  if(window.innerWidth/ww<.3){
    camera.position.z +=.2
  }else{
    camera.position.z = 2
  }
  //z inversamente proporcional ao tamanho de tela mais o z inicial
  camera.position.z = 1000/window.innerWidth+zi
  renderer.setSize(window.innerWidth, window.innerHeight)
}, false)

//Luz
var light = new THREE.AmbientLight(0xffffff, 10);
scene.add(light);

//Ponto de Luz
var plight = new THREE.PointLight(0xffffff, 5);
plight.position.set(3,20,-15);
scene.add(plight);

const controls = new OrbitControls(camera, renderer.domElement);

const modelPath = 'laptop/'
const filename = 'laptop'

const manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();
const textureLoader = new THREE.TextureLoader()

let jet
let anglo = 0


function loadObj(){
  mtlLoader.setPath(modelPath)
  .load(filename+'.mtl', (materials) => {
    materials.preload()
    objLoader.setMaterials(materials)
    objLoader.setPath(modelPath)
      .load(filename+'.obj', (object) => {
        jet = object
        jet.rotation.x = 0
        jet.rotation.y = 90*Math.PI/180
        jet.position.z = -.5
        console.log(camera.position.z)
        scene.add(jet)
        console.log(`Carregou ${filename}.obj`)
        // renderer.render(scene, camera)
        textureLoader.load(AppleParkImg,texture=>{
          // scene.background = texture;
          document.body.style.backgroundImage = `url(${AppleParkImg})`
          animate()
        })
      })
  })
}

function animate() {
  
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

loadObj()