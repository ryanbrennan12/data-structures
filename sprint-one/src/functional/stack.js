var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //come back to do with Object.keys()
  var storage = {};
  var key = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key ++;

  };

  someInstance.pop = function() {
    var arr = Object.keys(storage) //[0, 1];
    var last = arr[arr.length - 1]  //0, 1
    var popped = storage[last]
   
    delete storage[last]////need to use brackets bc it is a number

    return popped;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
