class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0,j=heights.length-1;
        let ans=0;
        while(i<j){
             let p=Math.min(heights[i],heights[j]);
             let arr=p*(j-i);
             ans=Math.max(ans,arr);
             if(heights[i]>heights[j]){j--;}
             else i++;
        }
        return ans;

    }
}
