class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> dic = new HashMap();
        int max = 0;
        for (int x:nums){
            if (!dic.containsKey(x)){
                dic.put(x,1);
            }
            else{
                dic.put(x,dic.get(x)+1);
            }
            max = Math.max(max, dic.get(x));
        }

    ArrayList<Integer>[] buckets = new ArrayList[max+1];
    for (int x: dic.keySet()){
        int frequency = dic.get(x);
        if (buckets[frequency]== null){
            buckets[frequency] = new ArrayList<>();
        }
        buckets[frequency].add(x);
    }
    int index = 0;
    int [] res = new int[k];
    for (int i =max;i>=0;i--){
        if (buckets[i] != null){
            for(int x: buckets[i]){
                if (index != k){
                    res[index++] = x;
                }
            }
        }
    }
    return res;
    }
}