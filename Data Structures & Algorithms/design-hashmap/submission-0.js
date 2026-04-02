class MyHashMap {
    constructor() {
        this.size=1000
        this.bucket=new Array(this.size).fill(null).map(()=>[])
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    hash(key){
        return key%this.size
    }
    put(key, value) {
        let m=this.hash(key)
         let bucket=this.bucket[m]
         for(let pair of bucket){
            if(pair[0]===key){
                pair[1]=value
                return
            }
         }
         bucket.push([key,value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
         let m=this.hash(key)
         let bucket=this.bucket[m]
          for(let pair of bucket){
            if(pair[0]===key){ 
                return pair[1]
            }
         }
         return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let m=this.hash(key)
         let bucket=this.bucket[m]
          this.bucket[m]=bucket.filter(pair=>pair[0]!=key)
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
