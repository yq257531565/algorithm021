
class Solution {
    public int trap(int[] height) {
        int len = height.length;
        if (len<=2){
            return 0;
        }
        int res = 0;
        Deque <Integer> stack = new ArrayDeque<>();
        for (int i =0;i<len;i++){
            while(!stack.isEmpty() && height[i] > height[stack.peekLast()]){
                int curr = stack.pollLast();
                while (!stack.isEmpty() && height[stack.peekLast()] == height[curr]){
                    stack.pollLast();
                }
                if (!stack.isEmpty()){
                    int possible = height[stack.peekLast()];
                    res += (Math.min(possible, height[i]) - height[curr]) * (i-stack.peekLast() - 1);
                }
            }
            stack.offerLast(i);
        }
        return res;
    }
}