let manager;

export default function ImportObj(scene, objectPosition, path, mtlFileName, objFileName) {
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
                    scene.add(object);

                }, THREE.onProgress, THREE.onError);
        });
}