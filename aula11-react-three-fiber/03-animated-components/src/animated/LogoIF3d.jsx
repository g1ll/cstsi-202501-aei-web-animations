import React from 'react'
import { RotatedBox } from './RotatedBox'

const LogoIF3d = () => {
    return (
        <>
            <RotatedBox y={1.1} x={-1.1} color={0xff0000} />
            <RotatedBox x={-1.1} />
            <RotatedBox y={-1.1} x={-1.1} />
            <RotatedBox y={-2.2} x={-1.1} />

            <RotatedBox y={1.1} x={0.1} />
            <RotatedBox x={0.1} />
            <RotatedBox y={-1.1} x={0.1} />
            <RotatedBox y={-2.2} x={0.1} />

            <RotatedBox y={1.1} x={1.3} />
            <RotatedBox y={-1.1} x={1.3} />
        </>
    )
}

export default LogoIF3d