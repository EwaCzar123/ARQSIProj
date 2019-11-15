import ImportObj from "./lib/ImportObject.js";
let manager;
export default function createFactory(scene, objectPosition, path, mtlFileName, objFileName) {
    // new ImportObj(scene, factoryPosition, path, mtlFileName, objFileName);
    manager = new THREE.LoadingManager();
    manager.addHandler(/\.dds$/i, new THREE.DDSLoader());

    new THREE.MTLLoader(manager)
        .setPath(path)
        .load(mtlFileName, function (materials) {

            materials.preload();

            new THREE.OBJLoader(manager)
                .setMaterials(materials)
                .setPath(path)
                .load(objFileName, function (object) {

                    object.translateX(objectPosition.x);
                    object.translateY(objectPosition.y);
                    object.translateZ(objectPosition.z);
                    
                    object.rotateY(1.18);

                    scene.add(object);

                }, THREE.onProgress, THREE.onError);
        });

        
}