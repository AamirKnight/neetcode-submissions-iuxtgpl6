class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans=strs[0]
        for(let i=1;i<strs.length;i++){
            let p=ans.split("");
            let l=strs[i].split("");
            let arr=""
             let k=p.length
             for(let j=0;j<k;j++){
                if(p[j]===l[j])arr+=p[j]
                else break
             }
             console.log(arr)
             ans=arr;

        }
        return ans;
    }
}
