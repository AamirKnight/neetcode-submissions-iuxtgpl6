class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let mp=new Map()
        for(let i=0;i<nums.length;i++){
            if(!mp.has(nums[i])){
                mp.set(nums[i],nums[i]+1)
            }
        }
        let ans=0
        for(let i=0;i<nums.length;i++){
            let p=1
            if(mp.has(nums[i]-1)){console.log(mp.get(nums[i]));continue;}
            else{
                let k=mp.get(nums[i])
                while(mp.has(k)){
                    console.log(p,k)
                    k=mp.get(k);p++;
                }
                ans=Math.max(ans,p)
            }
        }
        return ans
    }
}
