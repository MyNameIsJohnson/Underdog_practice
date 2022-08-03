class NaiveHashMap {
  constructor(initialCapacity = 4) {
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
    const stringKey = `${key}${typeof key}`;

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
// const hashMap = new NaiveHashMap();

// hashMap.set("cat", 1);
// hashMap.set("rat", 8);
// hashMap.set("dog", 2);
// hashMap.set("art", 7);

// assert.equal(hashMap.get("art"), 7);
// assert.equal(hashMap.get("cat"), 1);

// console.log("bucket", hashMap.buckets);

// console.log("hash", hashMap.hash("art"));
// console.log("hash", hashMap.hash("cat"));

// console.log(hashMap.hash(1)); // 49
// console.log(hashMap.hash("1")); // 49

// console.log(hashMap.hash("1,2,3")); // 741485668
// console.log(hashMap.hash([1, 2, 3])); // 741485668

// console.log(hashMap.hash("undefined")); // 3402815551
// console.log(hashMap.hash(undefined));

class DecentHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
    this.collisions = 0;
  }

  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
      if (this.buckets[bucketIndex].length > 1) {
        this.collisions++;
      }
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }

  get(key) {
    const bucketIndex = this.getIndex(key);
    for (
      let arrayIndex = 0;
      arrayIndex < this.buckets[bucketIndex].length;
      arrayIndex++
    ) {
      const entry = this.buckets[bucketIndex][arrayIndex];
      if (entry.key === key) {
        return entry.value;
      }
    }
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
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

const hashMap = new DecentHashMap();

hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("dog", 1);
hashMap.set("art", 8);

console.log("collisions: ", hashMap.collisions); // 2
console.log(hashMap.buckets);

console.log(hashMap.hash("cat"));
console.log(hashMap.hash("cat") % 2);
console.log(hashMap.hash("art"));
console.log(hashMap.hash("art") % 2);
console.log(hashMap.hash("dog"));
console.log(hashMap.hash("dog") % 2);
console.log(hashMap.hash("rat"));
console.log(hashMap.hash("rat") % 2);
