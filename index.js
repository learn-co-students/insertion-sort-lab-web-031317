function findMinAndRemove(arr) {
  // set first element as default min
  // track the index of the current min
  let min = arr[0]
  let minIndex = 0

  // iterate over the array
  for(let i = 0; i < arr.length; i++) {
    // if the val at cur element is less than min, set min equal to cur element
    if(arr[i] < min) {
      min = arr[i]
      minIndex = i
    }
  }

  // starting at the minIndex, destructively remove 1 element and return the min
  // (using splice will both destructively remove and return the min value)
  arr.splice(minIndex, 1)
  return min
}

function insertionSort(arr) {
  // declare sorted arr variable, which will be returned once arr has been sorted
  let sorted = []

  // while there are elements to sort, push the return value of findMinAndRemove(arr)
  // to sorted var
  while(arr.length > 0) {
    sorted.push(findMinAndRemove(arr))
  }

  // return the sorted arr
  return sorted
}
