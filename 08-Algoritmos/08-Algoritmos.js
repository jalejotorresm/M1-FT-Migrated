"use strict";
const array = [3, 4, 1, 9, 2, 5, 7, 8, 6];
//             a  b  c  d
//             0  1  2  3
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
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
  return array;
}
// bubbleSort(array);

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let index = 1;

  while (index < array.length) {
    let index1 = index;

    while (index1 >= 1 && array[index1] < array[index1 - 1]) {
      [array[index1], array[index1 - 1]] = [array[index1 - 1], array[index1]];
      index1--;
    }
    index++;
  }
  return array;
}
// insertionSort(array);

// optimo en menor cantidad de espacio (menos variables)
// ya que su var se encuentra fuera del for
// mas exacto en su recorrido igual al gráfico de ejemplo
// y menos pasos que el código viejo de insertionSort
// ejemplo: en let array = [3,6,5,9,1,2] tiene 99 pasos
// y el viejo insertionSort tiene 103 pasos

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const list = [...array];
  const len = list.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [list[i], list[min]] = [list[min], list[i]];
    }
  }
  return list;
}
// selectionSort(array);

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
// quickSort(array);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let half = parseInt(array.length / 2);
  let left = mergeSort(array.slice(0, half));
  let right = mergeSort(array.slice(half, array.length));

  function merge(left, right) {
    let data = [];
  
    while (left.length > 0 && right.length > 0) {
      data.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
  
    return data.concat(left).concat(right);
  }

  return merge(left, right);
}


//console.log("merge sort is: ",mergeSort(array));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};
