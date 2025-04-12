import { animate, utils, svg} from 'https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm';
const $ = utils.$;
const $pathKart = svg.createMotionPath('.circuit svg path');
const $marioKart =  $('#marioDiv')
const $luigiKart =  $('#luigiDiv')

const runMario  = animate(
  $marioKart,
  {
  ...$pathKart,
  ease: 'linear',
  duration: 3500,
  loop: false,
  //loopDelay: 500,
  autoplay: false,
});

const runLuigi = animate($luigiKart,{
  ...$pathKart,
  ease: 'inQuad',
  duration: 3500,
  loop: false,
  autoplay: false,
});

$marioKart[0].onclick = ()=>runMario.play();
$luigiKart[0].onclick = ()=>runLuigi.play();