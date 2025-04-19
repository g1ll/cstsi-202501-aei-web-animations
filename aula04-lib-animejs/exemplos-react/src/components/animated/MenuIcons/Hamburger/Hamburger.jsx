import { useEffect, useRef } from "react"
import { HamburgerStyled } from "./Hamburger.styled"
import { animate, createScope, svg, utils } from "animejs"

const Hamburger = ({width, height, border}) => {

    const rootScope = useRef(null)
    const scope = useRef(null)

    useEffect(() => {
        scope.current = createScope({ root:rootScope }).add(self => {
            const $ = utils.$;

            const $pathsTargetsOdd = $(".hamburgerIcon path:nth-of-type(odd)");
            const $pathTargetEven = $(".hamburgerIcon path:nth-of-type(even)");
            const $pathTargetClose = $(".closedPath");
            const $pathIdleBtnOpen = $(".idlePath");

            const openToClosed = animate($pathsTargetsOdd,
                {
                    opacity: [1, 0],
                    duration: 150,
                    delay: 200,
                    autoplay: false,
                    ease: 'linear',
                });

            const closeToOpened = animate($pathTargetEven,
                {
                    d: {
                        from: svg.morphTo($pathIdleBtnOpen,1), 
                        to: svg.morphTo($pathTargetClose,1)
                    },
                    duration: 500,
                    delay: 250,
                    autoplay: false,
                    ease: 'inOutQuad',
                    reverse: true
                });

            self.add('runAnimation', () => {
                if (openToClosed.targets[0].style.opacity == 1) {
                    openToClosed.play();
                    closeToOpened.play();
                } else {
                    closeToOpened.reverse();
                    openToClosed.reverse();
                }
            })

        })//fim scope

        return () => scope.current.revert()
    }, [])

    const handleAnimationStart = () => scope.current.methods.runAnimation()

    return (
        <HamburgerStyled ref={rootScope} $hasBorder={border}
            onClick={handleAnimationStart}
        >
            <svg width={width ?? "100"} height={height ?? "70"} viewBox={`0 0 40 29`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect width="40" height="29" fill="transparent" />
                    <g className="hamburgerIcon">
                        <path d="M5 3.72778H35V8.72778H5V3.72778Z" fill="#0a0909" fillOpacity="0.85" />
                        <path d="M5 11.7278H35V16.7278H5V11.7278Z" fill="#0a0909" fillOpacity="0.85" />
                        <path d="M5 19.7278H35V24.7278H5V19.7278Z" fill="#0a0909" fillOpacity="0.85" />
                    </g>
                    <path className="closedPath"
                        d="M11.5 2L20.25 10.7278L29 2L32.5 5.5L24 14.5L32.5 23.2278L29 27L20.25 17.5L11 27L7.5 23.5L16.5 14.2278L8 5.5L11.5 2Z"
                        fill="#0a0909" style={{ opacity: 0 }} />

                    <path className="idlePath" d="M5 11.7278H35V16.7278H5V11.7278Z" fill="#0a0909" fillOpacity="0.85" style={{ opacity: 0 }} />
                </g>
            </svg>
        </HamburgerStyled>
    )
}

export default Hamburger