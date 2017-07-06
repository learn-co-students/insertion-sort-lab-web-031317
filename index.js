const findMinAndRemove = (array) => {
    let min = Math.min.apply(null, array)
    let minIndex = array.indexOf(min)
    array.splice(minIndex, 1)
    return min
}

const insertionSort = (array) => {
    let min
    let sorted = []
    while (array.length !== 0) {
        min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted
}
