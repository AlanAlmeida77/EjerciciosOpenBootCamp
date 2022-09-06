const ListaProgramadores = ["Juan", "Pepe", "Pablo]
    

    //Programación imperativa
    let nombres = []
    ListaProgramadores.forEach((programador, posición)){
        nombres[posición] = programador
    })

    //Programación declarativa
   let nombres = [ListaProgramadores]
////////////////////////////////////////////////////////

//suma procedimental

let suma = 0

for (let i = 1; i <= 10; i++){
    suma = suma + i
}

//suma = 55

/////////////////////////////////////

//suma funcional
// 1. Definimos la función:
function sumar_los_diez_primeros_enteros(){
    let suma = 0
    for (let i = 1 ; i <= 10; i++){
        suma = suma + i
    }
return suma; 
}
//2.Utilizamos la función:
let suma = sumar_los_diez_primeros_enteros()

//suma = 55