var canJump = function(nums) {
    let maxCanReach = 0
    const len = nums.length
    for (let i = 0; i < len; i++){
        if (nums[i] === 0 && maxCanReach === i) break
        if (i + nums[i] > maxCanReach) maxCanReach = i + nums[i]
    }
    return maxCanReach >= len - 1
};