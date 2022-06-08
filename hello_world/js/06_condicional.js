"use strict"

// condicional if
// si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 12;

//si pasa esto...
if(edad1 > edad2){
    //ejecuta esto
    console.log("Edad1 es mayor que edad2");

} else{
    console.log("La edad1 es inferior a edad2");
}

var edad = 18;
var nombre = "david";

/*operadores relacionales
    mayor: >
    menor: <
    mayor o igual: >=
    menor o igual: <=
    igual: ==
    distinto: !=
*/

if(edad >= 18){
    //el usuario es mayor de edad
    console.log(nombre + " tiene " + edad +", Es mayor de edad")

} else{
    console.log(nombre + " tiene " + edad +", Es menor de edad")
}
