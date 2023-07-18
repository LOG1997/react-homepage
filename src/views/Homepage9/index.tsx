import React, { useRef, useEffect } from "react";
import * as BABYLON from 'babylonjs';
import type { Scene } from 'babylonjs/scene';
// import 'babylonjs-loaders';

export default function MyScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new BABYLON.WebGPUEngine(canvasRef.current!);
    engine.initAsync().then(() => {
        
    createAndRenderScene();
    return () => {
        engine.dispose();
      };
    });
    

    const createScene = async () => {
        const scene = new BABYLON.Scene(engine);

        //Adding a light
        const light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
    
        //Adding an Arc Rotate Camera
        const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvasRef.current, false);
    
        // The first parameter can be used to specify which mesh to import. Here we import all meshes
        BABYLON.SceneLoader.ImportMesh("", "src/assets/images/", "skull.babylon", scene, function (newMeshes) {
            // Set the target of the camera to the first imported mesh
            camera.target= newMeshes[0] as any;
        });
    
        // Move the light with the camera
        scene.registerBeforeRender(function () {
            light.position = camera.position;
        });
    
        return scene;
    };

    const createAndRenderScene = async () => {
      const scene = await createScene();
      engine.runRenderLoop(() => {
        scene.render();
      });
    };



  }, []);

  return <canvas ref={canvasRef} />;
}