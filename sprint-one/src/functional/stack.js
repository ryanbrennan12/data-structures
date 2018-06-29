var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //come back to do with Object.keys()
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size ++;

  };

  someInstance.pop = function() {
    var arr = Object.keys(storage) //[0, 1];
    var last = arr[arr.length - 1]  //0, 1
    var popped = storage[last]
   
    delete storage[last]////need to use brackets bc it is a number
    size --;

    return popped;

  };

  someInstance.size = function() {
    return Math.max(0, size);
  };

  return someInstance;
};
