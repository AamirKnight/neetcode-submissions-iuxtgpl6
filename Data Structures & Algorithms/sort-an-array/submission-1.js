class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    sortArray(nums) {
      let maxi=Math.max(...nums)
      let mini=Math.min(...nums)
      let s=maxi-mini+1
      let arr=new Array(s).fill(0)
      for(let i=0;i<nums.length;i++){
        let ind=nums[i]-mini
        arr[ind]++
      }
      let ans=[]
      for(let i=0;i<arr.length;i++){
           while(arr[i]>0){
            let val=i+mini
            ans.push(val)
            arr[i]--
           }
      }
      return ans

    }
}
