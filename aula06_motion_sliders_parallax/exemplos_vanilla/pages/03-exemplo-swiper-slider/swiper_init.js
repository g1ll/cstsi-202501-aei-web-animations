import Swiper from 'swiper';
import { Autoplay, EffectCube } from 'swiper/modules'
import 'swiper/css';

// import 'swiper/css/bundle';


const swiper = new Swiper('.slider1', {
    direction: 'horizontal',
    loop: true,
});

const swiper2 = new Swiper('.slider2', {
    modules:[
        EffectCube,
        // Autoplay
    ],   
    direction: 'vertical',
    // autoplay:{
    //     pauseOnMouseEnter:true,
    //     delay:500,
    // },
    loop: true,
    effect: 'cube',
    speed: 500,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});