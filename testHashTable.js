class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hashFunction(key) {
    total = 0;
    for (let i = 0; i < key.length; i++) {
      total = key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let i = this.hashFunction(key);
    if (!this.table[i]) {
      this.table[i] = [[key, value]];
      return;
    } else {
      let bucket = this.table[i];
      bucket.push([key, value]);
      return;
    }
  }
  get(key) {
    let i = this.hashFunction(key);
    if (!this.table[i]) {
      console.log("invalid key");
    } else {
      let bucket = this.table[i];
      const value = bucket.find((elm) => elm[0] === key);
      console.log("elm is ", value);
    }
  }
}
const hashTable = new HashTable(10);
