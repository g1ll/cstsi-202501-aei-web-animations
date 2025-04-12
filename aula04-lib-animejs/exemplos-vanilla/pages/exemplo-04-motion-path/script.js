import { animate, utils, svg} from 'https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm';
const $ = utils.$;
const $pathKart = svg.createMotionPath('.circuit svg path');
const $marioKart =  $('#marioDiv')
const $luigiKart =  $('#luigiDiv')

const runLuigi = animate($luigiKart,{
  ...$pathKart,
  ease: 'outQuad',
  duration: 3500,
  delay:1000,
  autoplay: false,
});

const runMario  = animate(
  $marioKart,
  {
  ...$pathKart,
  ease: 'in',
  duration: 3500,
  autoplay: false,
  onBegin: ()=>runLuigi.play(),
});

$marioKart[0].onclick = ()=>runMario.play();
// $luigiKart[0].onclick = ()=>runLuigi.play();