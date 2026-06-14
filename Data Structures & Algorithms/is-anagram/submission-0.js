class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var sortedS = [...s].sort().join("");
        var sortedT = [...t].sort().join("");

        if(sortedS == sortedT){
            return true;
        }else{
            return false;
        }
    }
}
