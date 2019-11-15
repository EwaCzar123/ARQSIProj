let texture = THREE.ImageUtils.loadTexture("./assets/belt.jpg");

export default function createBelt(scene, beltSize, beltPos, rotX) {
    
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 10);

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

texture.update = function(dt) {
    var tmp = texture.tmp;

    // Calculate how much to offset the texture
    // Speed * dt
    tmp.set(this.speed.x, this.speed.y);
    tmp.scale(dt);

    // Update the diffuse and normal map offset values
    this.material.diffuseMapOffset = this.material.diffuseMapOffset.add(tmp);
    this.normalMapOffset = this.material.normalMapOffset.add(tmp);
    this.material.update();
};