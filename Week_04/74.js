var searchMatrix = function(matrix, target) {
    const arr = matrix.flat()
    const len = arr.length
    let left = 0
    let right = len - 1
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) left = mid + 1
        else right = mid
    }
    if (arr[left] === target) return true
    else return false
};