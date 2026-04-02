class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let mp=new Map()
        for(let i=0;i<nums.length;i++){
            if(mp.has(nums[i])){
                mp.set(nums[i],mp.get(nums[i])+1)
            }
            else mp.set(nums[i],1)
        }
      
        let ans=0,res=0;
        for(let [key,value] of mp){
               if(value>res){
               
                res=value;ans=key
               }
        }
        
        return ans
    }
    
}
