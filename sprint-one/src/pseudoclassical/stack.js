var Stack = function() {
  this.storage = {};
  this.key = 0;

};

Stack.prototype.size = function() {
	return Object.keys(this.storage).length
}

Stack.prototype.push = function(value) {
	this.storage[this.key] = value;
	this.key ++;
}

Stack.prototype.pop = function() {
	var arr = Object.keys(this.storage);
	var last = arr[arr.length - 1];
	var popped = this.storage[last];
	delete this.storage[last];

	return popped;
}