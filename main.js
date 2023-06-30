import { ingresarExistencias } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { eliminarExistencias } from "./eliminar.js";
import { esquema } from "./model.js";

esquema();

function start() {
 
  console.log(existenciasDisponibles());
  let opcionIngresar = prompt("¿Desea actualizar algún producto o eliminarlo?\n-1: Ingrese '1' para actualizar \n- 1: Ingrese '2' para eliminar  ");
  if (opcionIngresar == 1){
  let ingresar = ingresarExistencias();
  if (opcionIngresar == "no"){
    console.log("¡Feliz día!, Gracias por usar nuestro programa");
  }else{
    console.log("Gracias por usar nuestro programa");
  }
}
if (opcionIngresar == 2){
  let ingresar = eliminarExistencias();}
}

start();

