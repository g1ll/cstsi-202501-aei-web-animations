import * as THREE from 'three'
import textureImg from '/img/crate.jpg?url'

const renderer = new THREE.WebGLRenderer()

const container = document.querySelector('.container3d')
const {width,height} = container.getBoundingClientRect()
console.dir(container.getBoundingClientRect())

renderer.setSize(width, height)
container.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)

let aspecto = 1
const camera = new THREE.PerspectiveCamera(
	75, //campo de visao vertical
	aspecto, //aspecto da imagem (Largura/Altura)
	0.1, //Plano proximo
	1000//Plano distante
);
camera.position.z = 35

const geometry = new THREE.BoxGeometry(20, 20, 20)
// const cor = {color:0x0000ff};
// const material = new THREE.MeshBasicMaterial(cor)
const texture = new THREE.TextureLoader()
	.load(textureImg, () => {
		console.log('Carregou imagem!')
		animate()
	});
const material = new THREE.MeshBasicMaterial(
	{ map: texture });
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)


let indo = true;
function move() {
	cube.position.z += indo ? -.5 : .5
	if (!indo && cube.position.z > 5)
		indo = true
	if (indo && cube.position.z < -100)
		indo = false//vindo
}


const animate=()=>{
    renderer.render(scene, camera)
	cube.rotation.x += .01
	cube.rotation.y += .01
	cube.rotation.z += .01

	// move()

	requestAnimationFrame(animate)
}
animate()










