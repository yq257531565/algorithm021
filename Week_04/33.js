var search = function(nums, target) {
    const len = nums.length
    let left = 0
    let right = len - 1
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }
    let res
    if (left === 0) res = binarySearch(0, len - 1, nums, target)
    else if (nums[0] <= target) res= binarySearch(0, left, nums, target)
    else res = binarySearch(left, len - 1, nums, target)
    if (nums[res] === target) return res
    else return -1 
};

function binarySearch(left, right, nums, target){
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) left = mid + 1
        else right = mid
    }
    return left    
}
