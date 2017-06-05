function findMinAndRemove(array){
  let min = array[0],
    minI = 0
  array.forEach( (n, i) => {
    if(n < min) {
      min = n
      minI = i
    }
  })
  array.splice(minI, 1)
  return min
}

function insertionSort(array, sortedArray = []){
  if( array.length > 0 ) {
    sortedArray.push(findMinAndRemove(array))
    return insertionSort(array, sortedArray)
  }
  return sortedArray
}
