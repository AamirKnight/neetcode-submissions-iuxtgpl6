class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]
        for(let p of s){
            if(p==='{'||p==='['||p==='('){
                stack.push(p)
            }
            else {
                if(p===')'&&stack[stack.length-1]==='('){stack.pop();}
                else if(p==='}'&&stack[stack.length-1]==='{'){stack.pop();}
                else if(p===']'&&stack[stack.length-1]==='['){stack.pop();}
                else return false;
            }
        }
        if(stack.length===0){return true;}
         else return false;
    }
}
