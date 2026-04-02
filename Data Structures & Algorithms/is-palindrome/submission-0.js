class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let m=''
        for(let i=0;i<s.length;i++){
            if((s.charCodeAt(i)>=48&&s.charCodeAt(i)<=57)||(s.charCodeAt(i)>=65&&s.charCodeAt(i)<=90)||(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122)){
                m+=s[i]
            }
        }
        console.log(m)
        let i=0,j=m.length-1
       while(i<j){
        if(m[i].toLowerCase()===m[j].toLowerCase()){
            i++;j--;
        }else{return false}
       }
       return true
    }
}
