import { EventEmitter } from "events";

//crear una instancia de EventEmitter
const emisor = new EventEmitter();

//definir un evento personalizado
emisor.on("Saludo", (nombre) => {
  console.log(`Hola, ${nombre}`);
});

//emitir el evento 'saludo'
emisor.emit("Saludo", "Mundo");
