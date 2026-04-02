class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp=new Map()
        for(let i=0;i<nums.length;i++){
                mp.set(nums[i],(mp.get(nums[i])||0)+1)
            
        }
        
        let arr= new Array(nums.length+1).fill().map(()=>[])
        for(let [key,value] of mp){
             arr[value].push(key)
        }
        let ans=[]
        for(let i=arr.length-1;i>=0;i--){
            for(let nu of arr[i]){
                ans.push(nu)
                 if(ans.length===k)return ans
            }
           
        }
        return ans;
    }
}
