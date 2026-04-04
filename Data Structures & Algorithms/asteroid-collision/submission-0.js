class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack=[]
        for(let p of asteroids){
            if(p>0){
                  stack.push(p)
            }else{
                console.log(p)
                 while(stack.length>0&&stack[stack.length-1]>0&&stack[stack.length-1]<Math.abs(p)){
                    stack.pop();
                 }
                 if(stack.length>0&&stack[stack.length-1]>0&&stack[stack.length-1]===Math.abs(p)){
                    stack.pop()
                 }
                else if(stack.length===0||(stack.length>0&&stack[stack.length-1]<0)){
                    stack.push(p)
                 }
                
            }
        }
        return stack;
    }
}
