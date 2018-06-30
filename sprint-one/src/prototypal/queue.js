var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
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
	}
};


