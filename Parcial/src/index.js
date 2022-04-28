import fs from 'fs';
import { aRecibos } from "./modelo/array.js";

let arrayR = [];

setTimeout(() => {
    console.log("Pasaron 7 segundos! Comenzó el examen!");

    console.log("");

    console.log("Recorrer e imprimir con foreach:")
function recorrerImprimir() {
    aRecibos.forEach(recibo => {
        console.log("Cliente: " + recibo.cliente + ", " + "importe: " + recibo.importe);
    });
}
recorrerImprimir();
console.log("----------------------------------------------");


console.log("Ordenar importe con sort");
function ordenarImporte() {
    return aRecibos.sort((a,b) => a.importe - b.importe);
}
/* ordenarImporte(); */
console.log(ordenarImporte());
console.log("----------------------------------------------");


console.log("Nuevo array con clientes que empiezan con 'R' con filter");
function filtrar() {
    arrayR = aRecibos.filter(recibo => recibo.cliente.charAt(0) == 'R');
}
filtrar();
console.log(arrayR);
console.log("----------------------------------------------");


console.log("Nuevo array con aumento de 30% en importe");
function aumentarImporte() {
    return aRecibos.map(
        recibo => {return {
            id : recibo.cliente,
            numero : recibo.numero,
            importe : recibo.importe * 1.30,
            cliente : recibo.cliente
        }});
}
console.log(aumentarImporte());
console.log("----------------------------------------------");


console.log("Archivo de forma sincronica:");
const text = fs.readFileSync("./src/service/texto.txt","utf-8");
console.log(text);
}, 7000);





