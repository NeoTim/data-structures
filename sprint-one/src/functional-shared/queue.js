var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
	instance._storage = {};
  instance._front = 0;
  instance._back = 0;

  extend(instance, queueMethods);
  return instance;
};

var queueMethods     = {};
queueMethods.enqueue = function(value) {};
queueMethods.dequeue = function() {};
queueMethods.size    = function() {};

function extend(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};



