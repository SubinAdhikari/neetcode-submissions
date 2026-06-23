class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var trimedStr = s.split(" ").join('').toLowerCase().replace(/[^a-z0-9]/g, "");
        var left = 0;
        var right = trimedStr.length-1;

        while(left < right){
            if(trimedStr[left]!=trimedStr[right]){
                return false;
            }else{
                left++;
                right--;
            }
        }
        return true;
    }
}
