import { useEffect } from "react";
import Animated, { 
    Easing,
    useAnimatedStyle,
    useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated"

export function LoaderSquareImageWithHooks(){

    const rotateDegree = useSharedValue(0);

    useEffect(() => {
        rotateDegree.value = withRepeat( //similar ao animation-iteration-count
            withSequence( //similar aos keyframes
                withTiming(0, { duration: 150 , easing: Easing.steps(1, true)}), //valor da propriedade e duracao de cada frame
                withTiming(90, { duration: 150 , easing: Easing.steps(1, true)}),
                withTiming(180, { duration: 150 , easing: Easing.steps(1, true)}),
                withTiming(270, { duration: 150 , easing: Easing.steps(1, true)}),
                withTiming(360, { duration: 150 , easing: Easing.steps(1, true)})
            ),
            - 1 // valor negativo e igual ao infinite com animacao em loop
        );//fim repeat
    }, []);

    //aplicando o estilo animado
    //useAnimatedStyle retorna um objeto com o estilo animado
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { rotate: `${rotateDegree.value}deg` },
        ],
    }));

    return (
        <Animated.View style={{
            backgroundColor: 'white',
            width: 100,
            height: 100,
        }}>
            <Animated.Image
                source={require('@/assets/images/loader.png')}
                style={{
                    ...animatedStyle,
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                }}
            />
        </Animated.View>
    )
}

export default LoaderSquareImageWithHooks
