class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr=[]
        for(let i=0;i<position.length;i++){
            let p=[position[i],speed[i]];
              arr.push(p)
        }
        arr.sort((a,b)=>a[0]-b[0]);
        let m=[];
       for(let p of arr){
        let s=(target-p[0])/p[1];
           m.push(s)
       }
         let ans=[]
          for(let t of m){
            while(ans.length>0&&ans[ans.length-1]<=t){
                ans.pop();
            }
            ans.push(t)
          }
return ans.length;

    }
}
