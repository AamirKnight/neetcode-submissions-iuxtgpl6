class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let mp=new Map()
        for(let i=0;i<nums.length;i++){
           
                mp.set(nums[i],(mp.get(nums[i])||0)+1)
        }
        let ans=[];
        for(let [key,value] of mp){
            console.log(key,value)
            let m=Math.floor(nums.length/3)
            if(value>m)ans.push(key)
        }
        return ans;
    }
}
