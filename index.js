function findMinAndRemove(array){
  let min = array[0]
  let minIndex
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
      minIndex = i
    }
  }
  return array.splice(minIndex, 1)
}

function insertionSort(array){
  let newMin
  let sorted = []
  while (array.length != 0) {
    sorted.push(findMinAndRemove(array))
  }
  return [].concat.apply([], sorted)
}
