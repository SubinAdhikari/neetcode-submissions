class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = [];
        let maxRight = [];

        let left = 0;
        for(var i=0;i<height.length;i++){
        if(i==0){
            maxLeft.push(0);
        }else{
            left=height[i-1] > left ? height[i-1]: left;
            maxLeft.push(left);
        }
        }

        let right = 0;
        for(var j=height.length-1;j>=0;j--){
        if(j==height-1){
            maxRight.push(0);
        }else{
            right=height[j+1] > right ? height[j+1]: right;
            maxRight.unshift(right);
        }
        }

        var totalCapacity=0;
        for(var i=0;i<height.length;i++){
        var cap = Math.min(maxLeft[i],maxRight[i])-height[i] > 0 ? Math.min(maxLeft[i],maxRight[i])-height[i] : 0;
        totalCapacity += cap;
        }
        return totalCapacity;
    }
}
