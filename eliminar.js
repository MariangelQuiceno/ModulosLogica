


function eliminarExistencias() {
  let item = prompt("Ingrese un producto entre: \narroz \nfrijoles \nlentejas \njabon \nlimpido \nchampu \npescado \nres \ncerdo")
  let cantidadAntes = localStorage.getItem(item);
  let ActualizarCantidad = parseInt(prompt("Ingrese una cantidad para eliminar (Se le restara a los productos actuales)"))

  if (item == "arroz") {
    localStorage.setItem("arroz", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("arroz"))
  }
  if (item == "lentejas") {
    localStorage.setItem("lentejas", parseInt(cantidadAntes) -  ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("lentejas"))
  }
  if (item == "frijoles") {
    localStorage.setItem("frijoles", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("frijoles"))
  }
  if (item == "jabon") {
    localStorage.setItem("jabon", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("jabon"))
  }
  if (item == "limpido") {
    localStorage.setItem("limpido", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("limpido"))
  }
  if (item == "champu") {
    localStorage.setItem("champu", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("champu"))
  }
  if (item == "pescado") {
    localStorage.setItem("pescado", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("pescado"))
  }
  if (item == "res") {
    localStorage.setItem("res", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("res"))
  }
  if (item == "cerdo") {
    localStorage.setItem("cerdo", parseInt(cantidadAntes) - ActualizarCantidad);
    return console.log("La cantidad del producto ha sido actualizada a ", localStorage.getItem("cerdo"))
  }


}

export {eliminarExistencias};