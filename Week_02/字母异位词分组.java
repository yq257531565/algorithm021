class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        int len = strs.length;
        if (len ==0){
            return new ArrayList();
        }
        Map<String, List> res = new HashMap<>(); 
        for (String s: strs){
            char []temp = s.toCharArray();
            Arrays.sort(temp);
            String key = String.valueOf(temp);
            if (!res.containsKey(key)){
                res.put(key, new ArrayList<>());
            }
            res.get(key).add(s);
        }
        List<List<String>> result = new ArrayList<>();
        for(Map.Entry<String, List> entry : res.entrySet()){
            result.add(entry.getValue());
        }
        return result;
    }
}