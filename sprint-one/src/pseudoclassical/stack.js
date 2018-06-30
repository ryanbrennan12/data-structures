var Stack = function() {
  this.storage = {};
  this.key = 0;

};

Stack.prototype.size= function() {
	return Object.keys(this.storage).length
}
