class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre=[]
        let suff=[]
        for(let i=0;i<nums.length;i++){
            if(i===0)pre.push(1)
            else {
                pre.push(nums[i-1]*pre[i-1])
            }
        }
        for(let i=nums.length-1;i>=0;i--){
            if(i===nums.length-1)suff.push(1)
            else {
                suff.push(nums[i+1]*suff[nums.length-2-i])
            }
        }
    let suff1=suff.reverse()
    let ans=[]
    for(let i=0;i<nums.length;i++){
        ans[i]=suff1[i]*pre[i]
    }
return ans
    }
}
