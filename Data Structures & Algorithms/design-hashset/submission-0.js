class MyHashSet {
    constructor() {
        this.size=1000
        this.bucket=new Array(this.size).fill(null).map(()=>[])
    }

    /**
     * @param {number} key
     * @return {void}
     */
    hash(key)
    {
        return key%this.size
    }
    add(key) {
         let index=this.hash(key)
         if(!this.bucket[index].includes(key)){
            this.bucket[index].push(key)
         }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index=this.hash(key)
        
             this.bucket[index]=this.bucket[index].filter((v)=> v!==key)
        
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
         let index=this.hash(key)
        return this.bucket[index].includes(key)
             
        
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
