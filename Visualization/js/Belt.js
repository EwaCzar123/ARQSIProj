export default function createBelt(scene, beltSize, beltPos, rotX) {
    
    let texture = THREE.ImageUtils.loadTexture("./assets/belt.jpg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 10);

    let material = new THREE.MeshLambertMaterial({
        map: texture
    });

    let geometry = new THREE.BoxGeometry(beltSize.x, beltSize.y, beltSize.z);
    let belt = new THREE.Mesh(geometry, material);
    belt.translateX(beltPos.x);
    belt.translateY(beltPos.y);
    belt.translateZ(beltPos.z);
    if(!(rotX == undefined)) {
        belt.rotateY(rotX);
    }
    
    scene.add(belt)

    return belt;
}