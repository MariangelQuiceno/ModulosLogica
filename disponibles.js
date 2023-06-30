/*esta función solo muestra la cantidad de arroz disponible
SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
DISPONIBLES DE TODOS LOS PRODUCTOS 
	
Terminado, muestra todos los elementos*/


function existenciasDisponibles() {
return console.log("La cantidad actual del producto es", 
   "\n-arroz:", localStorage.getItem("arroz"),
   "\n-lentejas:",localStorage.getItem("lentejas"),
   "\n-jabon:", localStorage.getItem("jabon"),
   "\n-limpido:", localStorage.getItem("limpido"), 
   "\n-champu:", localStorage.getItem("champu"),
   "\n-pescado:", localStorage.getItem("pescado"), 
   "\n-res:", localStorage.getItem("res"), 
   "\n-cerdo:", localStorage.getItem("cerdo"));
}

export {existenciasDisponibles};