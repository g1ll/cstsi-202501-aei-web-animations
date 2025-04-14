import { animate, utils, svg } from 'https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm';
const $ = utils.$;
const $pathKartMario = svg.createMotionPath('.circuit svg #pathMario');
const $pathKartLuigi = svg.createMotionPath('.circuit svg #pathLuigi');
const $marioKart = $('#marioDiv')
const $luigiKart = $('#luigiDiv')

const runLuigi = {
  anime:
    animate($luigiKart, {
      ...$pathKartLuigi,
      ease: 'outQuad',
      duration: 3500,
      delay: 1000,
      // zIndex: [{to:11, duration:100}, {to:13, duration:3400}],
      autoplay: false,
    })
}

const runMario = {
  anime: animate(
    $marioKart,
    {
      ...$pathKartMario,
      ease: 'in',
      duration: 3500,
      autoplay: false,
      onBegin: () => runLuigi.anime.play(),
    })
}

$marioKart[0].onclick = () => runMario.anime.play();
// $luigiKart[0].onclick = ()=>runLuigi.play();

window.onresize = () => {
  console.log('resize');
  const resizedPath = svg.createMotionPath('.circuit svg path');
  runMario.anime = animate(
    $marioKart,
    {
      ...resizedPath,
      ease: 'in',
      duration: 3500,
      autoplay: false,
      onBegin: () => runLuigi.anime.play(),
    })

  runLuigi.anime = animate($luigiKart, {
    ...resizedPath,
    ease: 'outQuad',
    duration: 3500,
    delay: 1000,
    // zIndex: [11, 15],
    autoplay: false,
  })
}