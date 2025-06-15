import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

import mtlFile from '/models/f15c/f15c.mtl?url'
import objFile from '/models/f15c/f15c.obj?url'

let jet //referencia global ao modelo f15

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true })
const container = document.querySelector('.container3d')
const {width,height} = container.getBoundingClientRect()
// console.dir(container.getBoundingClientRect())

renderer.setSize(width, height)
container.appendChild(renderer.domElement)

const scene = new THREE.Scene()

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  75, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);
camera.position.z = 7 

//Luz
var light = new THREE.AmbientLight(0xffffff, 20);
scene.add(light);

//Ponto de Luz
var plight = new THREE.PointLight(0xffffff, 10);
plight.position.set(10, 10, 0);
scene.add(plight);

const manager = new THREE.LoadingManager()
const mtlLoader = new MTLLoader(manager)
const objLoader = new OBJLoader()

manager.onProgress = (item, loaded, total)=> {
  let percentLoaded = Number(loaded/total*100).toFixed()
  console.log(item, percentLoaded+'%')
};

mtlLoader.load(mtlFile, handleMaterialLoaded)
function handleMaterialLoaded(materials) {
  materials.preload()
  objLoader.setMaterials(materials)
  objLoader.load(objFile, handleObjectLoaded)
}

function handleObjectLoaded(object) {
  jet = object
  jet.position.x = 0
  jet.position.y = .05
  jet.position.z = 5
  jet.rotation.y = .78
  jet.rotateZ(.78)
  jet.rotateX(.45)
  jet.scale.setScalar(1)
  scene.add(jet)
  animate()
}

function animate() {
  renderer.render(scene, camera)
  jet.rotation.z += .01
  requestAnimationFrame(animate)
}