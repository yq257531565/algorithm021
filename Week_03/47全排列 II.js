 
var permuteUnique = function(nums) {
    const res = [];
    const len = nums.length;
    const used = new Array(len)
    nums.sort();
    const helper = (arr) => {
      if (arr.length == len) { 
        res.push(arr.slice()); 
        return;                 
      }
      for (let i = 0; i < len; i++) {
        if (nums[i - 1] == nums[i] && i - 1 >= 0 && !used[i - 1]) { 
          continue;
        }
        if (used[i]) {     
          continue;
        }
        arr.push(nums[i]); 
        used[i] = true;     
        helper(arr);       
        arr.pop();         
        used[i] = false;    
      }
    };
    helper([]);
    return res;
  };