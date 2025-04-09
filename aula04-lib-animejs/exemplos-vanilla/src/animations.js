const { animate, waapi, utils } = anime;

const $ = utils.$; //Inspirado na biblioteca jQuery


export function listLettersAnimation($target,count=10){
    setTimeout(() => {
        animate($target,{
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 10*count }
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0
            },
            delay: (_, i) => i * 15, // Function based value
            ease: count%2==0?'outCirc':'inCirc',
            reversed:count%2==0,
            // loopDelay: 1000,
            // loop: true,
            //https://animejs.com/documentation/animation
        });
    }, 100*count);
}


export function startAnimations() {
    const $container = $('.container');
    const $listElements = $('li');
    const [$jsLogo, $viteLogo] = $('.logo');
    const $animeJsLogo = $('.logoAnimeJs');
    console.log($listElements)
    $listElements.forEach((_,index) => listLettersAnimation($(`li:nth-of-type(${index+1}) span`),index+1));
    
    animate($container, {
        opacity: [0, 1],
        duration: 4000,
        delay: 1000,
        easing: 'easeInOutQuad',
    });


    animate($jsLogo, {
        rotate: '1turn',
        translateX: [-250, 0],
        opacity: [0, 1],
        duration: 2000,
        delay: 500,
        easing: 'easeInOutQuad',
    });

    $viteLogo.style.transformOrigin = 'center center';
    // $viteLogo.style.transform = 'translateX(450px)';
    // $viteLogo.style.opacity = 0;

    // waapi.animate($viteLogo, {
    //     transform: [ 
    //             'rotateZ(360deg) translateX(450px)',
    //             'rotateZ(0deg) translateX(0px)' ],
    //     duration: 2000,
    //     easing: 'easeInOutQuad',
    //     play:'paused',
    // });

    animate($viteLogo, {
        keyframes: [
            { translateX: 450, rotateZ: '0deg', opacity: 0 },
            { translateX: 0, rotateZ: '360deg', opacity: 1 },
        ],
        duration: 2000,
        easing: 'easeInOutQuad',
        play: 'paused',
    });

    animate($animeJsLogo, {
        opacity: 1,
        duration: 2000,
        easing: 'easeIn',
        delay: 2000,
    })
}