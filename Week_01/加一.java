
class Solution {
    public int[] plusOne(int[] digits) {
        int len = digits.length;
        for (int i =len-1;i>=0;i--){
            digits[i]++;
            if (digits[i] == 10){
                digits[i] = 0;
            }
            else{
                return digits;
            }
        }
        digits = new int[len+1];
        digits[0] = 1;
        return digits;
    }
}