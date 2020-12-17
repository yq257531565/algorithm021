var combine = function (n, k) {
    const res = [];
    function dfs(num, arr) {
        if (arr.length === k) {
            res.push(arr.slice());
            return;
        }
        if (num > n) return
  
        arr.push(num);
        dfs(num + 1, arr);
        arr.pop();
        dfs(num + 1, arr);
    }
    dfs(1, []);
    return res;
 }