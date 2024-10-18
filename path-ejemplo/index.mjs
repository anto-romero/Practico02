import path from "path";

//definir una ruta de archivo de ejemplo
const filepath = "./data/example.txt";

//obtener el directorio base
const dirName = path.dirname(filepath);
console.log("Directorio base:", dirName);

//obtener el nombre del archivo sin extension
const baseName = path.basename(filepath, ".txt");
console.log("Nombre del archivo:", baseName);

//obtener la extension del archivo
const extName = path.extname(filepath);
console.log("Extensión del archivo:", extName);

// crear una ruta unida
const newPath = path.join("/user", "docs", "newfile.txt");
console.log("Nueva ruta:", newPath);
