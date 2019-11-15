export default function createFloor(buildingOpts, transX, transY, transZ, rotX) {
    let floorOpts = {
        width: buildingOpts.width,
    };

    let texture = THREE.ImageUtils.loadTexture("./assets/floor.jpg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(30, 30);

    let material = new THREE.MeshLambertMaterial({
        map: texture
    });

    let geometry = new THREE.BoxGeometry(floorOpts.width, floorOpts.width, 0.2);
    let floor = new THREE.Mesh(geometry, material);
    floor.translateX(transX);
    floor.translateY(transY);
    floor.translateZ(transZ);
    floor.rotateX(rotX);
    return floor;
}


