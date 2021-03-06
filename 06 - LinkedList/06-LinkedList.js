const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");
// LinkedList es como las mamushkas de la lista
// agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  // Tu código acá
  let current = this.head, 
    count = 0;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let array = [],
    current = this.head;

  while (current) {
    array.push(current.value);
    current = current.next;
  }

  var len = 0;

  while (len < array.length - 1) {
    let len1 = 0;
    while (len1 < array.length - 1) {
      if (array[len1] > array[len1 + 1]) {
        [array[len1], array[len1 + 1]] = [array[len1 + 1], array[len1]];
      }
      len1++;
    }
    len++;
  }

  array.reverse();

  this.head = null;

  for (let i = 0; i < array.length; i++) {
    let newNode = new Node(array[i]);

    if (!this.head) {
      this.head = newNode;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = newNode;
    }
  }

  return this;
};

// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) {
  if (pos > 0 && pos > this.size) {
    return;
  }

  if (pos === 0) {
    this.head = new Node(data, this.head);
    return;
  }

  const node = new Node(data);
  let current,
    previous,
    count = 0;

  current = this.head;

  while (cou knt < pos) {
    previous = current;
    count++;
    current = current.next;
  }
  node.next = current;
  previous.next = node;
};

const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(22);
miListitaEnlazada.add(66);
console.log(miListitaEnlazada);
console.log(JSON.stringify(miListitaEnlazada));
miListitaEnlazada.insert(777, 1);
console.log(miListitaEnlazada);
console.log(stringify(miListitaEnlazada));

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Vemos lo ya implementado en el archivo estructuras.js
// function LinkedList() {
//   this.head = null
// }

// function Node(value){
// this.value = value;
// this.next = null
// }

/* ////////////////////////----- ----- --------/////////////////// */

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:

};



module.exports = {
  LinkedList,
};
