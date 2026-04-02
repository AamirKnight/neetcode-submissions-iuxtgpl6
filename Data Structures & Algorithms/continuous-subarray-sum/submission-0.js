class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let mp=new Map()
         let sum=0;
         mp.set(0,-1)
         for(let i=0;i<nums.length;i++){
            sum+=nums[i]
            if(mp.has(sum%k)){
                let p=mp.get(sum%k)
                if(i-p>1)return true
            }else{
                 mp.set(sum%k,i)
            }
         }
         return false
    }
}
