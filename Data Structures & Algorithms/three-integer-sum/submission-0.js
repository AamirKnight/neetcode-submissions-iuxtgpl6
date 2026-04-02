class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       nums.sort((a, b) => a - b);
        let res=new Set();

          for(let i=0;i<nums.length;i++){
            let seen=new Set();
            for(let j=i+1;j<nums.length;j++){
                    let m=-(nums[i]+nums[j]);
                    if(seen.has(m)){
                        const tri=[nums[i],nums[j],m].sort((a,b)=>a-b);
                        res.add(tri.toString())
                    }
                    seen.add(nums[j])
            }
          }
         return Array.from(res).map(x => x.split(',').map(Number));
    }
}
