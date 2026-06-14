class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var myMap = new Map();

        for(var i=0; i<nums.length;i++){
            if(myMap.has(target - nums[i])){
                return [myMap.get(target - nums[i]),i];
            }else{
                myMap.set(nums[i],i);
            }
        }
    }
}
