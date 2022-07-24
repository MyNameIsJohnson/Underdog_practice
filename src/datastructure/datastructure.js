class NaiveHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    let hashValue = 0;
    const stringKey = key.toString();

    for (let index = 0; index < stringKey.length; index++) {
      const charCode = stringKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

const assert = require("assert");
const hashMap = new NaiveHashMap();

hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("dog", 1);
hashMap.set("art", 8);

console.log(hashMap.buckets);

assert.equal(hashMap.get("art"), 8);
console.log(hashMap.hash("art"));
