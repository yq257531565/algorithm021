var jump = function(nums) {
    let farthest = 0
    let rightEnd = 0
    let step = 0
    const len = nums.length - 1
    for (let i = 0; i < len; i++){
        farthest = Math.max(farthest, i + nums[i])
        if (farthest >= len){
            step++
            break
        }
        if (i === rightEnd){
            rightEnd = farthest
            step++
        }
    }
    return step
};