import React from 'react'
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Suspense } from "react";


import jetModelMTL from '/models/f15c/f15c.mtl?url'
import jetModelOBJ from '/models/f15c/f15c.obj?url'

const JetModel = () => {

    const materials = useLoader(MTLLoader, jetModelMTL);
    const obj = useLoader(OBJLoader, jetModelOBJ, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <Suspense fallback={null}>
            <primitive object={obj} scale={3} />
        </Suspense>
    )
}

export {JetModel}
