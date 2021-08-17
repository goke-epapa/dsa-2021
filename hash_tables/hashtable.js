class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    /**
     * 
     * @param {string} key 
     */
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash;
    }

    /**
     * Sets the value for a given key
     * O(n)
     * 
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value) {
        let address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        }
        
    }

    /**
     * Gets the value for the given key
     * Would be O(1) unless there are many collisions, in that case, it tends towards O(n)
     * 
     * @param {string} key
     * @return {*} 
     */
    get(key) {
        const currentBucket = this.data[this._hash(key)];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }
}

const hashtable = new HashTable(50);
hashtable.set("Goke", 30); // O(n)
hashtable.set("Obasa", 32);
hashtable.set("Jide", 31);

console.log(hashtable.get("Goke"));
console.log(hashtable.get("Obasa"));
console.log(hashtable.get("Jide"));