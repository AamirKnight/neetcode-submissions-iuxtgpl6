class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        temperatures.reverse()
        let ans=[]
        let m=[];
       for(let i=0;i<temperatures.length;i++){
        while(m.length!=0&&m[m.length-1].first<=temperatures[i]){
               m.pop()
        }
        if(m.length===0){
              ans.push(0);
        }
        else if(m.length>0){
            let l=m[m.length-1];
            let k=i-l.second;
            ans.push(k) 
        }
         m.push({first:temperatures[i],second:i})
       }
       ans.reverse()
        return ans;
    }
}
