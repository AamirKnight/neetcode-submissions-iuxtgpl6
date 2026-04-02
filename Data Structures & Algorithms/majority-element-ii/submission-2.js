class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
       let nums1=-1,nums2=-1,cnt1=0,cnt2=0
       for(let i=0;i<nums.length;i++){
           if(nums[i]===nums1){cnt1++;}
           else if(nums[i]===nums2){cnt2++}
           else if(cnt1===0){cnt1=1;nums1=nums[i]}
           else if(cnt2===0){cnt2=1;nums2=nums[i]}
           else{cnt1--;cnt2--;}
       }
        cnt1=0,cnt2=0
        for(const num of nums){
            if(num===nums1)cnt1++;
              else if(num===nums2)cnt2++;
        }
       
        let ans=[]
       if(Math.floor(nums.length/3)<cnt1)ans.push(nums1)
       if(Math.floor(nums.length/3)<cnt2)ans.push(nums2)
       return ans
    }
}
