import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    CSSAnimationKeyframes,
    Easing,
} from "react-native-reanimated"

const LoaderSquareImage = () => {

    const loader: CSSAnimationKeyframes = {
        '0%': {
          transform: [{ rotate: '0deg' }],
        //   animationTimingFunction: Easing.steps(1, true),
        },
        '25%': {
          transform: [{ rotate: '90deg' }],
        //   animationTimingFunction: Easing.steps(1, true),
        },
        '50%': {
          transform: [{ rotate: '180deg' }],
        //   animationTimingFunction: Easing.steps(1, true),
        },
        '75%': {
          transform: [{ rotate: '270deg' }],
        //   animationTimingFunction: Easing.steps(1, true),
        },
        '100%': {
          transform: [{ rotate: '360deg' }],
        //   animationTimingFunction: Easing.steps(1, true),
        },
      };

    return (
        <Animated.View style={[
            styles.box,
            {
                animationName: loader,
                animationDuration: '750ms',
                animationIterationCount: 'infinite',
                // animationTimingFunction: Easing.steps(4, 'end'),
                animationTimingFunction: 'steps(5,end)',
                animationPlayState:'running',
                // transform: [{ rotate: '90deg' }],
            }
        ]}>
            <Animated.Image
                source={require('@/assets/images/loader.png')}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    // transform: [
                    //     { rotate: '0deg' },
                    //     { rotate: '90deg' },
                    //     { rotate: '180deg' },
                    //     { rotate: '270deg' },
                    //     { rotate: '360deg' },
                    // ]
                }}
            />
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderColor:'red',
        borderWidth: 5
    }
});


export default LoaderSquareImage
