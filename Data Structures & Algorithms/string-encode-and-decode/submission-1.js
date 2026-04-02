class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
          let res=''
          for(let i=0;i<strs.length;i++){
            let r=strs[i].length
                res=res+r+'#'+strs[i]
          }
          return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans=[]
         let i=0
         while(i<str.length){
          let j=i
          while(str[j]!='#'){
               j++
          }
             let len=parseInt(str.slice(i,j))
             let word=str.slice(j+1,len+j+1)
             ans.push(word)
             i=len+j+1
         }
        return ans
    }
}
