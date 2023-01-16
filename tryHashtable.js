class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hashFunction(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total;
  }
  set(key, value) {
    let i=this.hashFunction(key)
    if(!this.table[i]){
        
    }

  }
}
