var lowestCommonAncestor = function(root, p, q) {
    let res = null; 

    const dfs = (root) =>{
        let newFound = false
        if (res) return false
        if (!root) return false
        const foundLeft = dfs(root.left)
        const foundRight = dfs(root.right)
        if (root.val === p.val || root.val === q.val){
            newFound = true
        } 
        if (foundLeft && newFound || foundRight && newFound || foundLeft && foundRight) res = root
        return foundLeft || foundRight || newFound
    }
    dfs(root);
    return res;
};