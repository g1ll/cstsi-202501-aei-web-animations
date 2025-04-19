import { useEffect, useRef } from "react"
import { ContainerExamples } from "../../styles/ContainerExamples.styeld"
import { Exemplo06Styles } from "./Exemplo06ToMorph.styled"
import { animate, createScope, svg, utils } from "animejs"

const Exemplo06ToMorph = () => {

    const rootScope = useRef(null)
    const scope = useRef(null)

    useEffect(() => {
        scope.current = createScope({ rootScope }).add(self => {
            const $ = utils.$;
            const [$squarePath, $jsPath, $jsPathBkp, $ecmaPath, $sPath] = $('#svg_js_logo path');

            console.log([$squarePath, $jsPath, $jsPathBkp, $ecmaPath, $sPath])

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
                    alternate: true,
                    autoplay: false,
                    // easing: 'easeInOutExpo'	//função de tempo  (animation-timing-function)
                    // easing: 'linear'	//função de tempo  (animation-timing-function)
                    ease: 'inQuad'	//função de tempo  (animation-timing-function)
                });

            const anime4 = animate($jsPath,  //alvo da animação (elemento svg
                {
                    // keyframes: [
                    //     { d: svg.morphTo($ecmaPath), duration: 500 },
                    //     { d: svg.morphTo($jsPathBkp), duration: 500 },
                    // ],
                    d:{
                        from: svg.morphTo($jsPathBkp),
                        to: svg.morphTo($ecmaPath),
                    },
                    duration: 1000,
                    loop: true, 			//animação em loop (animation-count:infinite)
                    autoplay: false,
                    alternate: true,
                    ease: 'linear'	//função de tempo  (animation-timing-function)
                    // ease: 'outQuad'	    //função de tempo  (animation-timing-function)
                });

            anime3.onPause = () => {
                const [path] = anime3.targets;
                path.setAttribute('fill', '#F7DF1E');
                anime4.pause();
            }

            self.add('startJsLogoAnimation', () => {
                anime3.play();
                anime4.play();
                // alert("startJsLogoAnimation !!!");
            })

            self.add('stopJsLogoAnimation', () => anime3.pause())


            //Animação 5.2
            const $pathsTargetsOdd = $("#btnOpen path:nth-of-type(odd)");
            const $pathTargetEven = $("#btnOpen path:nth-of-type(even)");
            const $pathTargetClose = $("#btnClose");
            const $pathIdleBtnOpen = $("#idleBtnOpen");

            const anime5 = animate($pathsTargetsOdd,
                {
                    opacity: [1, 0],
                    duration: 250,
                    delay: 500,
                    autoplay: false,
                    ease: 'linear',
                });

            const anime6 = animate($pathTargetEven,
                {
                    d: {
                        from: svg.morphTo($pathIdleBtnOpen), 
                        to: svg.morphTo($pathTargetClose)
                    },
                    duration: 500,
                    delay: 250,
                    autoplay: false,
                    ease: 'linear',
                    reverse: true
                });

            // $("#container-svg-3 svg")[0].onclick = () => {
            //     if (anime5.targets[0].style.opacity == 1) {
            //         anime5.play();
            //         anime6.play();
            //     } else {
            //         anime6.reverse();
            //         anime5.reverse();
            //     }
            // }

            self.add('runAnimationBtn', () => {
                if (anime5.targets[0].style.opacity == 1) {
                    anime5.play();
                    anime6.play();
                } else {
                    anime6.reverse();
                    anime5.reverse();
                }
            })

        })//fim scope

        return () => {
            scope.current.revert()
        }
    }, [])

    const handleMouseEnterJsLogo = (e) => {
        console.log(e.target)
        scope.current.methods.startJsLogoAnimation()
        console.log(scope.current)
    }

    const handleAnimationBtn = (e) => {
        scope.current.methods.runAnimationBtn()
    }


    return (
        <>
            <Exemplo06Styles />
            <title>CSTSI-LPAW Aula 04: Biblioteca AnimeJS</title>
            <h2 className="nes-text is-primary">
                Exemplo de Animação SVG com a Animejs - toMorph
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples ref={rootScope}>
                <div className="nes-container with-title nes-pointer">
                    <span className="title">Exemplo 6.1</span>
                    <div id="container-svg-2">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="svg_js_logo"
                                onMouseEnter={handleMouseEnterJsLogo}
                                // onMouseEnter={() => scope.current.methods.startJsLogoAnimation()}
                                onMouseLeave={() => scope.current.methods.stopJsLogoAnimation()}
                            >
                                <path d="M0 0H100V100H0V0Z" fill="#F7DF1E" />
                                <path style={{ opacity: 1 }}
                                    d="M33.946 78.9359L26.2937 83.5672C28.5089 88.266 32.8722 92.1586 40.3898 92.1586C48.714 92.1586 54.4195 87.7281 54.4195 77.9949V45.9098H45.0222V77.8621C45.0222 82.5605 43.075 83.7684 39.9871 83.7684C36.7656 83.7684 35.4226 81.5535 33.946 78.9359Z"
                                    fill="black" />
                                <path style={{ opacity: 0 }}
                                    d="M33.946 78.9359L26.2937 83.5672C28.5089 88.266 32.8722 92.1586 40.3898 92.1586C48.714 92.1586 54.4195 87.7281 54.4195 77.9949V45.9098H45.0222V77.8621C45.0222 82.5605 43.075 83.7684 39.9871 83.7684C36.7656 83.7684 35.4226 81.5535 33.946 78.9359Z"
                                    fill="black" />
                                <path style={{ opacity: 0 }}
                                    d="M53.378 91.3746H27V45.6567H53.378V53.5995H36.7116V63.6373H52.2188V71.5801H36.7116V83.3693H53.378V91.3746Z"
                                    fill="black" />
                                <path style={{ opacity: 1 }}
                                    d="M59.5238 82.5602L67.1754 78.1301C69.1898 81.4195 71.8078 83.8359 76.439 83.8359C80.3332 83.8359 82.816 81.8891 82.816 79.2039C82.816 75.982 80.2652 74.8406 75.9691 72.9617L73.6203 71.9539C66.8402 69.0684 62.3429 65.4434 62.3429 57.791C62.3429 50.7426 67.7129 45.3723 76.1039 45.3723C82.0781 45.3723 86.3742 47.4535 89.4617 52.8906L82.1445 57.5898C80.5332 54.7035 78.7886 53.5625 76.1035 53.5625C73.3511 53.5625 71.6058 55.3078 71.6058 57.5898C71.6058 60.409 73.3512 61.5508 77.3785 63.2961L79.7277 64.3027C87.716 67.7266 92.2133 71.2168 92.2133 79.0699C92.2133 87.5285 85.5679 92.1598 76.6402 92.1598C67.914 92.1598 62.2758 87.9977 59.5238 82.5602Z"
                                    fill="black" />
                                
                            </g>
                        </svg>
                    </div>
                </div>

                <div className="nes-container with-title nes-pointer">
                    <span className="title">Exemplo 6.2</span>
                    <div id="container-svg-3"
                        onClick={handleAnimationBtn}
                        >
                        <svg width="100" height="70" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="AnimationButtonPoligon">
                                <rect width="40" height="29" fill="white" />
                                <g id="btnOpen">
                                    <path d="M5 3.72778H35V8.72778H5V3.72778Z" fill="#0a0909" fillOpacity="0.85" />
                                    <path d="M5 11.7278H35V16.7278H5V11.7278Z" fill="#0a0909" fillOpacity="0.85" />
                                    <path d="M5 19.7278H35V24.7278H5V19.7278Z" fill="#0a0909" fillOpacity="0.85" />
                                </g>
                                <path id="btnClose"
                                    d="M11.5 2L20.25 10.7278L29 2L32.5 5.5L24 14.5L32.5 23.2278L29 27L20.25 17.5L11 27L7.5 23.5L16.5 14.2278L8 5.5L11.5 2Z"
                                    fill="#0a0909" style={{ opacity: 0 }} />
                                
                                <path id="idleBtnOpen" d="M5 11.7278H35V16.7278H5V11.7278Z" fill="#0a0909" fillOpacity="0.85" style={{opacity:0}}/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div>
                    <a href="/">
                        <button type="button" title='Voltar ao início!' className="nes-btn is-error btn">Voltar</button>
                    </a>
                </div>
            </ContainerExamples>

        </>
    )
}

export default Exemplo06ToMorph