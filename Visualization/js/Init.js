import createMachine from "./Machine.js";
import createFloor from "./Floor.js";
import createFactory from "./Factory.js";
import createBelt from "./Belt.js";

let camera, scene, renderer, controls;

let machinePosition1 = {x: 8, y: 0.7, z: 0};
let machinePosition2 = {x: 8, y: 0.7, z: 5};
let machinePosition3 = {x: -5, y: 0.7, z: 5, a: Math.PI};

let factoryPosition = {x: 0, y: 0, z: 0};

let beltSize1 = {x: 2, y: 1, z: 25};
let beltPosition1 = {x: 5.4, y: 0.7, z: -2};
let beltSize2 = {x: 2, y: 1, z: 25};
let beltPosition2 = {x: -2.2, y: 0.7, z: -2};

scene = init();
animate();


createMachine(scene, machinePosition1, 'assets/Machine/', 'machine.mtl', 'machine.obj');
createMachine(scene, machinePosition2, 'assets/Machine/', 'machine.mtl', 'machine.obj');
createMachine(scene, machinePosition3, 'assets/Machine/', 'machine.mtl', 'machine.obj');
createFactory(scene, factoryPosition, 'assets/Factory/', 'factory.mtl', 'factory.obj');
createBelt(scene, beltSize1, beltPosition1);
createBelt(scene, beltSize2, beltPosition2);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 30000);
    camera.position.z = 50;
    camera.position.x = 0;
    camera.position.y = 5;
    camera.lookAt(scene.position);
    scene.add(camera);
    scene.add(createFloor({width: 100}, 0, 0, 0, THREE.Math.degToRad(-90)));

    
    


    let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(320,100%,98%)'), 1.0);
    keyLight.position.set(1, 1, 1);
    keyLight.castShadow = true;

    // let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(300,100%,99%)'), 0.75);
    // fillLight.position.set(100, 0, 100);
    //
    let backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-1, -1, -1);
    //
    // let upLight = new THREE.DirectionalLight(new THREE.Color('hsl(251,100%,98%)'), 0.75);
    // fillLight.position.set(-100, 0, -100);

    scene.add(keyLight);
    // scene.add(fillLight);
    scene.add(backLight);
    // scene.add(upLight);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    return scene;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera);
}

