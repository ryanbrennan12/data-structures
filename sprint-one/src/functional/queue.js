var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    key ++;
    storage[key] = value;
   
  };

  someInstance.dequeue = function() {
   var arr = Object.keys(storage); //[1,2]
   var first = arr[0]; // [1];
   var popped = storage[first];
   
   delete storage[first]

   return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

