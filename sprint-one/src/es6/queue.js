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
  

}
