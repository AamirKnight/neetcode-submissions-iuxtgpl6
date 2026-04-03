class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let m=k%nums.length
        const arr=new Array(nums.length).fill(0)
        for(let i=0;i<nums.length;i++){
            let n=(i+m)%nums.length;
            if(n<0){
                n=nums.length+n;
            }
              arr[n]=nums[i]
        }
           for(let i=0;i<nums.length;i++){
            nums[i]=arr[i]
           }

    }
}
