class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
       let n=nums.length
        for(let i=0;i<nums.length;i++){
                while(nums[i]>0&&
                nums[i]<=n
                && nums[i]!==nums[nums[i]-1]
                ){
                      let p=nums[i]-1;
                      [nums[p],nums[i]]=[nums[i],nums[p]]
                }
        }
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==i+1){return i+1}
        }
        return n+1
        
    }
}
