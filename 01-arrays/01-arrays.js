
function invertirOrden(array) {
    // [1,2,"x"]
    // ["x",2,1]
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO 
    // debera ser devuelto
    // No vale usar el metodo "reverse"
    // [1, 4, 24, 10, 8, 6]
    let inverted = []
    for (let i=0; i<array.length; i++){
        if(array[i]>=0 && array[i]<10){
            inverted.unshift(array[i])
        }
    }
    return inverted
  };


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let commonNum
    array1.forEach(element => {
        array2.forEach(element2 => {
            if(element===element2){
                commonNum = element
            }else{
                commonNum = Math.min.apply(null, array1, array2)
                }
        })
        
    });
    return commonNum
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]
    let newArray = []
    
    for(let i=0; i<array.length; i++){
        if(typeof array[i] === 'object'){
            let sum = 0
            array[i].forEach(element => sum += element)
            newArray.push(sum)
        }
        else newArray.push(array[i])
    }
    return newArray
};


function mismoValorMismosElementos(numero, divisor) {
// Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
    // vemos que todos los elementos deben tener el mismo valor
    // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
    // es decir Si el resultado de la division no es un entero, deben devolver false
    let newArray = []
    
    if(numero%divisor!==0){
        return false
        }
        else{
            do{
                let result = numero/divisor
                newArray.push(result)
                }while(newArray.length<divisor)
            }
    return newArray
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let newArray = []

    let minElement = Math.min(...array)
    let maxElement = Math.max(...array)

    newArray.push(minElement, maxElement)

    return newArray
   
};


/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */


module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};

