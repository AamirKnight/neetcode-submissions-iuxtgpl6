class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let m=s.length
        for(let i=0;i<s.length/2;i++){
            [s[i],s[m-i-1]]=[s[m-i-1],s[i]]
        }
        return
    }
}
