class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
let mp=new Map()
mp.set(0,1)
let sum=0;
let cnt=0;
   for(let i=0;i<nums.length;i++){
     sum+=nums[i]
     
     if(mp.has(sum-k)){
        cnt+=mp.get(sum-k)
       
     }
 mp.set(sum,(mp.get(sum)||0)+1)
   }
   return cnt
    }
}
