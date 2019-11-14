import ImportObj from "./lib/ImportObject.js";

export default function createFactory(scene, factoryPosition, path, mtlFileName, objFileName) {
    new ImportObj(scene, factoryPosition, path, mtlFileName, objFileName);
}