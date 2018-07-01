class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.key = 0;
  }
  size() {
  	return Object.keys(this.storage).length;
  }
  enqueue(value) {
  	this.storage[this.key] = value;
  	this.key ++;
  }
  dequeue() {
  	var arr = Object.keys(this.storage);
  	var first = arr[0];
  	var popped = this.storage[first];
  	delete this.storage[first];

  	return popped;
  }
  
}

