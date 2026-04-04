class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let m=[]
        for(let p of tokens){
            if(p==='+'||p==='-'||p==='*'||p==='/'){
                if(p==='+'){  
                    let a=m.pop()
                    let b=m.pop()
                    let c=a+b
                    m.push(c);
                }
                if(p==='-'){
                      let a=m.pop()
                    let b=m.pop()
                    let c=b-a
                    m.push(c);
                }
                if(p==='*'){
                     let a=m.pop()
                    let b=m.pop()
                    let c=a*b
                    m.push(c);
                }
                if(p==='/'){
                     let a=m.pop()
                    let b=m.pop()
                    let c=Math.trunc(b/a)
                    m.push(c);
                }

            }
            else m.push(Number(p))
        }
      for(let p of m)console.log(p)
        return m.pop()
    }
}
