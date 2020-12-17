var permute = function(nums) {
    const res = []
    const helper = (arr)=>{
        if (arr.length === nums.length){
            res.push(arr.slice())
            return
        }
  
        for (let i = 0 ; i < nums.length; i++){
            if (!arr.includes(nums[i])){
                arr.push(nums[i])
                helper(arr)
                arr.pop(nums[i])
            }
        }
  
    }
    helper([])
    return res
 };
  