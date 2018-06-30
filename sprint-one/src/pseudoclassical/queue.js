var Queue = function() {

  this.storage = {};
  this.key = 0;
};

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.key] = value;
	this.key ++;
}

Queue.prototype.dequeue = function() {
	var arr = Object.keys(this.storage);
	var first = arr[0];
	var popped = this.storage[first];
	delete this.storage[first];

	return popped;
}

