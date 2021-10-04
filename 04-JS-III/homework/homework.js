// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código: LENGTH-1 
  return array [array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return  (array.length)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var aumento = []
  for( i = 0; i < array.length;i++)
  {aumento.push(array [i] +1)}
  return aumento
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento)
   return array

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // .join es un método de []arrray devueleve todalas palabras en 1 solo string
  // "    " esto es espacio
  return palabras.join(" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //array.includes(elemento) es un método más sencillo
  for (var i = 0;i < array.length;i++) 
  {if (array[i] === elemento) return true}
return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0;i < numeros.length;i++)
  {var suma=suma + numeros[i]}
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //return agregarNumeros(resultadosTest) / resultadosTest.length} así es una forma corta 
  //LLAMANDO LA FUNCIÓN ANTERIOR Q YA TENIA LA SUMA
  var prome = 0;
  for(var i = 0; i < resultadosTest.length; i++)
   { var prome = prome + resultadosTest[i]}
  return prome / resultadosTest.length }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande = 0
  for( var i = 0; i < numeros.length; i++)
  {if (numeros[i] > masgrande) 
  masgrande = numeros[i]} 
  return masgrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1){return 0}
  var mult = 1
  for (var i = 0; i < arguments.length; i++)
  {mult=mult * arguments[i]}
  return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayor18 = 0
  for ( var i = 0; i < arreglo.length; i++)
  { if( arreglo[i] > 18) mayor18++ }
  return mayor18}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  {if (numeroDeDia === 1 || numeroDeDia === 7) {return "Es fin de semana"} }
   {return "Es dia Laboral" } }
 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí TOSTRING CONVIERTE EL # A STRING Y ASI PODER RECORRER Y COMPARAR LOS # Q EMPIECEN POR 9
  var numero = n.toString();
  {if (numero[0] === "9") {return true} }
 return false }


function todosIguales(arreglo){
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var iguales = []
  for(var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === arreglo[0]) {
  iguales.push(arreglo[i])
  }
  if(iguales.length === arreglo.length)
  return true
  }
  return false
  }
//   var iguales= arreglo[0];
//   for (var i = 0; i < arreglo.length; i++) {
//   if (arreglo[i] !== iguales) return false
// }
// return true 
// } 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código: LE AGREGUE CON.PUSH YLUEGO RECORRE NUEVO.LENGTH PARA MIRAR LOS 3 ELEMENTOS Y DEVOLVERLO
  var nuevo = []
  for(i = 0;i < array.length;i++)
  {if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") 
  {nuevo.push (array[i])} }
  {if(nuevo.length === 3) return nuevo}
   return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2 = []
  for (var i= 0; i < array.length;i++){
  if (array[i] > 100) 
  array2.push(array[i])
} 
return array2

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevo = []
  var freno = numero
  for (var i = 0; i < 10; i++) {
  if (freno === i){
  break;  
  }
  nuevo.push(freno += 2)
  if (i === 9){
  return nuevo
  }
  }
  return "Se interrumpió la ejecución"
  }


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevo = []
  for (i=0;i < 10;i++){
  if( i === 5){
  continue;  
  }  
  nuevo.push(numero += 2)
  }
  return nuevo
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
