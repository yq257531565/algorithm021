class Solution {
    public void rotate(int[] nums, int k) {
        int len = nums.length;
        k = k%len;
        int count = 0;
        for (int start =0;count <len;start++){
            int current = start;
            int next = (current +k)%len;
            int temp1 = nums[next];
            nums[next] = nums[current];
            current = next;
            count ++;
            while(current != start){
                next = (current + k)%len;
                int temp2 = nums[next];
                nums[next] = temp1;
                temp1 = temp2;
                current = next;
                count ++;
            }
        }
    }
}