// let pokemon=pokemon.filter (pokemon=> {
//     if(pokemon-type-includes("grass")){
//         return true;
//     }else {
//         return false
//     }
// })
// ///let nombrespokemonestiposgrass

// console.log()
// console.log()

let array1 =['a','b','c'];
let array2 =['d','e','f'];
let array3 =array1.concat(array2);



console.log(array3)

let  array4 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

// let fruta =['manzan','naranja'];
// fruta.push('banana','uva');
// console.log(fruta);

let frutas = ['manzana','naranja','uva','sandia'];
let frutasSeleccionada = frutas.slice(1,4);
console.log(frutas);


let numeros=[23,54]
function sumar(numeros) {
    let suma=numeros[0]+numeros[1]
    console.log(suma)
    return suma
}

sumar(numeros)
    
let fruta =['manzana','naranja','uva','kiwi'];
fruta.splice(1,1,'kiwi','uva');
console.log(fruta)

let fruta1=['manzana','banana','naranja'];


let persona ={
    nombres:'marcos',
    edad:34,
    domicilio:'carlos gardel',
    gmail:'mar.gmail.com',
};
for (let clave in persona){
    console.log(clave+':'+persona[clave]);
}


                                    



