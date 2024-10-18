import fs from "fs";

//leer un archivo de manera ansicrona
fs.readFile("./data/example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contenido del archivo:", data);
});

//escribir en un nuevo archivo
fs.writeFile("./data/newfile.txt", 'Contenido nuevo', (err) => {
  if (err) throw err;
  console.log("Archivo renombrado y escrito", );
});

// renombrar un archivo
fs.rename("./data/newfile.txt", "./data/renamedfile.txt", (err) => {
  if (err) throw err;
  console.log("Archivo renombrado");
});
