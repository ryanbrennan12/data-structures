class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }
  size() {
    return Object.keys(this.storage).length;
  }
  push(value) {
    this.storage[this.key] = value;
    this.key ++;
  }
  pop() {
    var arr = Object.keys(this.storage);
    var last = arr[arr.length - 1];
    var popped = this.storage[last];
    delete this.storage[last];

    return popped;
  }
}