class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Deque <TreeNode> deque = new LinkedList<>();

        while(!deque.isEmpty() || root != null){
            while(root != null){
                res.add(root.val);
                deque.push(root);
                root = root.left;
            }
            root = deque.pop();
            root = root.right;
        }
        return res;
    }
}