var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {}

  obj = _.extend(obj, queueMethods);
  obj.key = 0;

  return obj;
};

var queueMethods = {
	size: function() {
		return Object.keys(this.storage).length;
	},

	enqueue: function(value) {
		this.storage[this.key] = value;
		this.key ++;
	},

	dequeue: function() {
		var arr = Object.keys(this.storage); // [0,1]
		var first = arr[0] // [0]
		var popped = this.storage[first];

		delete this.storage[first];

		return popped;
	}
};


