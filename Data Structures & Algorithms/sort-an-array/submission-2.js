class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   merge(left,right){
    let arr=[]
    let i=0,j=0;
  while(i<left.length&&j<right.length){
    if(left[i]<right[j]){
      arr.push(left[i])
      i++
    }else{
      arr.push(right[j])
      j++;
    }
  }
  return arr.concat(left.slice(i)).concat(right.slice(j))
   }
    sortArray(nums) {
      if(nums.length<=1)return nums
    let m=Math.floor(nums.length/2)
let left=this.sortArray(nums.slice(0,m))
let right =this.sortArray(nums.slice(m))
return this.merge(left,right)

    }

}
