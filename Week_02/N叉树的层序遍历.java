class Solution {
    List<List<Integer>> res = new ArrayList<>();
    public List<List<Integer>> levelOrder(Node root) {
        if (root == null) return res;
        helper(root, 0);
        return res;
    }

    private void helper(Node root, int level){
        if (root == null){
            return;
        }
        if (level + 1 > res.size()){
            res.add(new ArrayList<>());
        }
        res.get(level).add(root.val);

        for (Node child: root.children){
            if (child == null){
                return;
            }
            helper(child, level+1);
        }
    }
}