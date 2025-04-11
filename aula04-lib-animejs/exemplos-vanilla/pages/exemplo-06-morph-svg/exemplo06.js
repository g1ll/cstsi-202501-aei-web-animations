const { animate, svg, utils } = anime;
const $ = utils.$;
//Animação 5.1
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
        keyframes: [
            { d: svg.morphTo($jsPath), duration: 500 },
            { d: svg.morphTo($ecmaPath), duration: 500 },
        ],
        loop: true, 			//animação em loop (animation-count:infinite)
        direction: 'alternate',
        autoplay: false,
        alternate: true,
        // easing: 'easeInOutExpo'	//função de tempo  (animation-timing-function)
        // easing: 'linear'	//função de tempo  (animation-timing-function)
        easing: 'easeInQuad'	//função de tempo  (animation-timing-function)
    });

$('#svg_js_logo')[0].onmouseenter = () => {
    anime3.play();
    anime4.play();
}

$('#svg_js_logo')[0].onmouseleave = () => anime3.pause();

anime3.onPause = () => {
    const [path] = anime3.targets;
    path.setAttribute('fill', '#F7DF1E');
    anime4.pause();
}

//Animação 5.2
const $pathsTargetsOdd = $("#btnOpen path:nth-of-type(odd)");
const $pathTargetEven = $("#btnOpen path:nth-of-type(even)");
const $pathTargetClose = $("#btnClose");

const anime5 = animate($pathsTargetsOdd,
    {
        opacity: [1, 0],
        duration: 250,
        delay: 500,
        autoplay: false,
        easing: 'linear',
    });

const anime6 = animate($pathTargetEven,
    {
        d: svg.morphTo($pathTargetClose),
        duration: 500,
        delay: 250,
        autoplay: false,
        easing: 'linear'
    });

$("#container-svg-3 svg")[0].onclick = () => {
    if (anime5.targets[0].style.opacity == 1) {
        anime5.play();
        anime6.play();
    } else {
        anime6.reverse();
        anime5.reverse();
    }
}