class StockSpanner {
    constructor() {
        this.stack=[]
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let cnt=0;
        for(let i=this.stack.length-1;i>=0;i--){
               if(price<this.stack[i]){break;}
               cnt++;
        }
    this.stack.push(price)
        return cnt+1;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
