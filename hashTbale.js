class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hashFunction(key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hashFunction(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    console.log(key);
    const index = this.hashFunction(key);
    // return this.table[index];

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      } else return undefined;
    }
  }
  remove(key) {
    const index = this.hashFunction(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

const hashTable = new HashTable(25);
hashTable.set("name", "dheeraj");
hashTable.set("naem", "wowow");
hashTable.set("1", 45);
hashTable.display();
console.log(hashTable.get("naem"));
