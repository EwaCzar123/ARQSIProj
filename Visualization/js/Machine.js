import ImportObj from "./lib/ImportObject.js";

export default function createMachine(scene, machinePosition, path, mtlFileName, objFileName) {
    new ImportObj(scene, machinePosition, path, mtlFileName, objFileName);
}