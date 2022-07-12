const Promedio = [5, 7, 3];

const posicion = 1;

listadoNotas[2]; 
listadoNotas[0]; 
listadoNotas[posicion]; 

let contadorDeNotas = 0;

for(let posicion = 0; posicion < 3; posicion++){
    promedio = promedio + listadoNotas[posicion];; 
}
const promedio = sumadorDeNotas/3;
console.log(promedio); 

if(promedio < 6){
    console.log("estas aprobado!! :)")
}else{
    console.log("no aprobaste :, te sacaste un: " + promedio)
}