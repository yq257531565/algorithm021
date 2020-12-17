var buildTree = function(preorder, inorder) {
    const helper = (preorder, inorder) => {
       if (inorder.length === 0) return null;
       const root = new TreeNode(preorder[0]);
       const rootLocation = inorder.indexOf(root.val);
       root.left = helper(preorder.slice(1, rootLocation + 1), inorder.slice(0, rootLocation));
       root.right = helper(preorder.slice(rootLocation + 1), inorder.slice(rootLocation + 1));
       return root;
    };
    return helper(preorder, inorder);
    };
    