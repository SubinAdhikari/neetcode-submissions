class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var output = [];
        var myMap = new Map();

        for(var i=0;i<strs.length;i++){
            var temp = [];
            if(myMap.has(strs[i])){
                continue;
            }
            temp.push(strs[i]);
            myMap.set(strs[i]);
            var source = [...strs[i]].sort().join("");
            for(var j=i+1;j<strs.length;j++){
                var target = [...strs[j]].sort().join("");
                if(source == target){
                    temp.push(strs[j]);
                    myMap.set(strs[j]);
                }
            }
            output.push(temp);
        }
        return output;
    }
}
