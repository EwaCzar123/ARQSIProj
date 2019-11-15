let texture = THREE.ImageUtils.loadTexture("./assets/belt.jpg");

export default function createBelt(scene, beltSize, beltPos, rotX) {
    
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

    // belt.position.y = 0.51;

    animate();

    scene.add(belt)



    return belt;
}

function animate() {
    requestAnimationFrame(animate);
    texture.offset.y -= .01;
}