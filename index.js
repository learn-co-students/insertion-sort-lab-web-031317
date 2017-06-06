function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for(var i = 0; i < array.length; i++){
    var currentEl = array[i]
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  var newMin
  var sortedArr = []
  while(array.length != 0) {
    newMin = findMinAndRemove(array)
    sortedArr.push(newMin)
  }
  return sortedArr
}
