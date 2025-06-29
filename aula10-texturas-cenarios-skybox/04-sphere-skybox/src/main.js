import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

let aspecto = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(
  40, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  1000000 //Plano distante
);
camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);


//Luz
var light = new THREE.AmbientLight(0xffffff, 10);
scene.add(light);

//Ponto de Luz
var plight = new THREE.PointLight(0xffffff, 5);
plight.position.set(-1, 1, 0);
scene.add(plight);

// const skyTexture = await new THREE.TextureLoader().loadAsync(
//   "img/milk-way-bg.jpg"
// );

//Textura esférica estrelas: https://svs.gsfc.nasa.gov/4851/
const skyTexture = await new THREE.TextureLoader().loadAsync(
  // "img/milk-way-2020-nasa-4k.jpg"
  "img/NightSkyHDRI014_4K-TONEMAPPED.jpg"  //https://ambientcg.com/view?id=NightSkyHDRI014
);
// scene.background = skyTexture; //Imagem de fundo, não é um skyBox
const skyGeometry = new THREE.SphereGeometry(10000, 60, 64);
const skyMaterial = new THREE.MeshBasicMaterial({
  map: skyTexture,
  side: THREE.BackSide, //Para que a textura fique do lado de dentro da esfera
});
const skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
skyBox.position.set(0, 0, -1000); //Posição do skyBox
scene.add(skyBox);
//Textura para objetos esféricos
const moonGeometry = new THREE.SphereGeometry(1200, 60, 64);
const moonTerrain = await new THREE.TextureLoader().loadAsync("img/moon.jpg");
const moonTexture = new THREE.MeshBasicMaterial({
  map: moonTerrain,
  side: THREE.BackSide,
});
const moon = new THREE.Mesh(moonGeometry, moonTexture);
moon.position.set(-1000, 500, -9500);
moon.move = function () {
  this.rotation.y += 0.0001;
  this.rotation.z += 0.0001;
};
scene.add(moon);

let spaceship;
let anglo = 0;
const modelPath = "models/unitron/";
const gltfFile = modelPath + "free_spaceship_unitron.glb";
//site modelo: https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&q=spaceship&type=models
//Necessário cadastrar uma conta para baixar o asset
//Procurar gratuitos (FREE) com licença Creative Commons (CC) ou derivadas

const manager = new THREE.LoadingManager();
manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);

//Exemplos com formatos GLB ou GLTF
//https://threejs.org/docs/#manual/en/introduction/Loading-3D-models
//https://threejs.org/docs/#examples/en/loaders/GLTFLoader
//https://github.com/mrdoob/three.js/blob/dev/examples/webgl_loader_gltf.html
const gltfLoader = new GLTFLoader(manager);
let gltfModel = await gltfLoader.loadAsync(gltfFile);

spaceship = gltfModel.scene; //Neste caso a propriedade scene representa o modelo
console.log(spaceship);
spaceship.scale.setScalar(0.2); //redimensiona o objeto
spaceship.position.y = -0.5;
spaceship.rotation.x = 0.5;
spaceship.position.z = -4;
spaceship.move = function () {
  let vel = 0.1;
  anglo = anglo > 360 ? 0 : anglo + vel;
  this.rotation.z = Math.sin((anglo * Math.PI) / 180) / 4;
};
scene.add(spaceship);

animate();

function animate() {
  renderer.render(scene, camera);
  if (moon) moon.move();
  if (spaceship) spaceship.move();
  controls.update();
  requestAnimationFrame(animate);
}

//controle da nave com mouse
window.addEventListener("mousemove", (event) => {
  let wh = window.innerHeight;
  let my = event.clientY;
  if (spaceship) spaceship.rotation.x += (my - wh / 2) / wh / 100;
});

//Ajuste da camera de acordo com redimensionamento da tela
window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  false
);
