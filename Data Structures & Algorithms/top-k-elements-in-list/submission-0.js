class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = new Map();
        for(var i=0;i<nums.length;i++){
            if(myMap.has(nums[i])){
                myMap.set(nums[i],myMap.get(nums[i])+1);
            }else{
                myMap.set(nums[i],1);
            }
        }

        const topKElement = [...myMap].sort((a,b)=> b[1]-a[1]).slice(0,k).map(entry=>Number(entry[0]));
        return topKElement;
    }
}
