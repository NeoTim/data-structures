var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._storage = {};
  someInstance._size = 0;

  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods  = {};
stackMethods.push = function(value) {};
stackMethods.pop  = function() {};
stackMethods.size = function() {};

function extend(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};



