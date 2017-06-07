let sortedArray = []

function findMinAndRemove(array){
  //array = [2, 3, 4, 5, 6, 7]
  let min = array[0] //first number in array
  let minIndex = 0

  for(let i = 0; i < array.length; i++) {
    let currentElement = array[i]
    if(array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min
}

//unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
function insertionSort(array){
  let newMin;
  let sorted = []
  while(array.length != 0){
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted;
}
