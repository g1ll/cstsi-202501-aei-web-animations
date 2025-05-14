//Animação 5.1
const { animate, utils } = anime;
const $ = utils.$;
const $svgTarget = $('#phone');

const anime2 = animate(
    $svgTarget, //alvo da animação (elemento svg)
    {
        // translateX:200,
        // translateY:-100,
        rotate: [
            { to: '.1turn', duration: 100 },
            { to: '.08turn', duration: 50 },
            { to: '.2turn', duration: 50 },
            { to: '.08turn', duration: 50 },
            { to: '.2turn', duration: 50 },
            { to: '.08turn', duration: 50 },
            { to: '0turn', duration: 50 },
        ],
        alternate: true,
        duration: 300, 			//duração geral em ms, necessário para o alternate
        //loop: false, 			//animação em loop (animation-count:infinite)
        // loopDelay: 200,			//delay entre repetições do loop
        autoplay: false,		//Inicialiar a animação parada
        ease: 'inBounce',	//função de tempo  (animation-timing-function)
        onComplete: () => anime2.reset()
    });

const $svgElement = $('#svg-container svg')[0]
$svgElement.onmousemove = () => anime2.play();


//Animação 5.2

console.log($('#svg_js_logo path')) 
const [$squarePath, $jsPath, $ecmaPath, $sPath] = $('#svg_js_logo path');

const anime3 = animate($squarePath,  //alvo da animação (elemento svg
    {
        // fill:[							//propriedade a ser modificada (fill)
        // 	{value:'#ff0000', duration:1000},
        // 	{value:'#00ff00', duration:2000},
        // 	{value:'#0000ff', duration:2000}
        // ],
        keyframes: [
            { fill: '#ff0000' },
            { fill: '#00ff00' },
            { fill: '#0000ff' }
        ],
        duration: 1000, 			//duração em ms
        loop: true, 			//animação em loop (animation-count:infinite)
        direction: 'alternate',
        autoplay: false,
        // easing: 'easeInOutExpo'	//função de tempo  (animation-timing-function)
        // easing: 'linear'	//função de tempo  (animation-timing-function)
        easing: 'easeInQuad'	//função de tempo  (animation-timing-function)
    });

const anime4 = animate($jsPath,  //alvo da animação (elemento svg
    {
        translateX: '100px',
        loop: false,
        autoplay: false,
        // easing: 'easeInOutExpo'	//função de tempo  (animation-timing-function)
        // easing: 'linear'	//função de tempo  (animation-timing-function)
        easing: 'easeInQuad',	//função de tempo  (animation-timing-function)
        onBegin: () => {
            animate($ecmaPath,  //alvo da animação (elemento svg
                {
                    opacity: 1,
                    loop: false,
                    autoplay: true,
                    // easing: 'easeInOutExpo'	//função de tempo  (animation-timing-function)
                    // easing: 'linear'	//função de tempo  (animation-timing-function)
                    easing: 'easeInQuad'	//função de tempo  (animation-timing-function)
                })
        }
    });



$('#svg_js_logo')[0].onmouseenter = () => {
    anime3.play();
    anime4.play();
};

$('#svg_js_logo')[0].onmouseleave = () => anime3.pause();

anime3.onPause = () => {
    const [path] = anime3.targets;
    path.setAttribute('fill', '#F7DF1E');
    animate($ecmaPath, {
        opacity: 0,
        autoplay: true,
        onBegin: () => {
            animate($jsPath, {
                    translateX: ['-100px', '0px'],
                    loop: false,
                    autoplay: true,
                    onComplete: () => anime4.reset(),
                })
            }
        })
}

//Animação 5.3
const anime5 = animate($("#btnOpen"),
    {
        opacity: 0,
        duration: 500,
        autoplay: false,
        easing: 'linear'
    });

const anime6 = animate($("#btnClose"),
    {
        opacity: .85,
        duration: 500,
        autoplay: false,
        easing: 'linear'
    });

$("#container-svg-3 svg")[0].onclick = () => {
    if (anime5.targets[0].style.opacity == 1) {
        anime5.play();
        anime5.onBegin = () => anime6.play()
        // anime6.progress = 0;
        anime6.reset();
    } else {
        anime6.reverse();
        anime6.onBegin = () => anime5.targets[0].style.opacity = 1
        // anime5.progress = 0;
        anime5.reset();
    }
}
