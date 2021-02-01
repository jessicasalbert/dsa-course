class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key, val) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = [[key, val]]
        } else {
            this.keyMap[index].push([key, val])
        }
        return this
    }

    get(key) {
        let index = this._hash(key)
        if (!this.keyMap[index]) return false
        let res = this.keyMap[index]
        const arr = res.filter(arr => (arr[0] === key));
        if (arr.length === 0) return false
        return arr[0][1];
    }

    keys() {
        const result = []
        for (const x of this.keyMap) {
            if (x) {
                for (const i of x) {
                    result.push(i[0])
                }
            }
        }
        return result
    }

    values() {
        const result = []
        for (const x of this.keyMap) {
            if (x) {
                for (const i of x) {
                    result.push(i[1])
                }
            }
        }
        const set = new Set(result)
        return set
    }
    
  }

