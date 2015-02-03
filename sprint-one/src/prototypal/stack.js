var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._size = 0;

  return someInstance;
};

var stackMethods  = {};
stackMethods.push = function(value) {};
stackMethods.pop  = function() {};
stackMethods.size = function() {};


