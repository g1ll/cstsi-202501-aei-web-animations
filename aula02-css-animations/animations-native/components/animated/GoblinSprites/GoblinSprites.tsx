
import React from 'react';
import {
    Skia,
    Canvas,
    Atlas,
    rect,
    useRectBuffer,
    useImage,
    useRSXformBuffer,
    Circle
} from "@shopify/react-native-skia"
import { useEffect, useState } from 'react';
import { useSharedValue } from "react-native-reanimated"
import { StyleSheet } from 'react-native';


function GoblinSprites({ image }) {

    console.log('GoblinSprites', image)

    const [ready, setReady] = useState(false);

    const counter = useSharedValue(0)
    const spriteMap = useImage(image?.uri?image.uri:image)
    // const spriteMap = false

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            counter.value = (counter.value + 1) % 3
        }, 100)
        console.log("counter", counter.value)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('canvas ready', ready)
        console.log('loaded sprite', spriteMap)
    }, [spriteMap, ready]);

    const numberOfSprites = 1
    const sprites = useRectBuffer(numberOfSprites, (rect, i) => {
        "worklet"
        let frameSelect
        if (!counter) { frameSelect = 0 }
        else { frameSelect = 160 * Math.floor(counter.value) }
        rect.setXYWH(frameSelect, 0, 160, 180)
    })

    const transforms = [Skia.RSXform(.8, 0, 0, 0)]

    if (!ready || !spriteMap?.width) return null;

    return (<Canvas
        style={styles.container} >
        <Atlas
                    image={spriteMap}
                    sprites={sprites}
                    transforms={transforms}
                />
        {/* <Circle cx={100} cy={100} r={50} color="red" /> */}
    </Canvas>
    );
}


const styles = StyleSheet.create({
    container: { height: 450, width: 350, borderWidth: 3, borderColor: 'gray' }
})

export default GoblinSprites;