class FreqStack {
    constructor() {
        this.stack=[]
        this.freq=new Map()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
          this.stack.push(val)
           if(this.freq.has(val)){this.freq.set(val,this.freq.get(val)+1)}
           else this.freq.set(val,1);
    }  

    /**
     * @return {number}
     */
    pop() {
        let m=0;
        for(let [key,value] of this.freq){
            if(value>m)m=value;
        }
       let p=new Map();
       for(let [key,value] of this.freq){
        if(value===m){p.set(key,1);}
       }
       for(let i=this.stack.length-1;i>=0;i--){
              if(p.has(this.stack[i])&&p.get(this.stack[i])>0){
                this.freq.set(this.stack[i],this.freq.get(this.stack[i])-1);
                let t=this.stack[i];
                         this.stack.splice(i,1);
                         return t;
              }
       }
       return null;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
