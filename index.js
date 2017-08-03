function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  let min = findMinAndRemove(array)
  var sortedArray = [min]
  while (array.length > 0){
    var nextValue = findMinAndRemove(array)
    sortedArray.push(nextValue)
  }
  return sortedArray
}
