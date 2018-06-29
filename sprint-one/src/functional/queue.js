var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
    var storage = {};
    var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size ++;

  };

  someInstance.dequeue = function() {
    var arr = Object.keys(storage); //[0,1,2];
    var first = arr[0];
    var popped = storage[first];
    delete storage[first];

     size --; 

     return popped;
  };

  someInstance.size = function() {
    return Math.max(0, size);
  };

  return someInstance;
};
