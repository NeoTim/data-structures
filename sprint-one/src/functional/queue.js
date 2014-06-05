 var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var _front = 0;
  var _back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[_back] = value;  
    _back ++;
  };

  someInstance.dequeue = function(){
    //var result = 0
    if(_back - _front){
      var result = storage[_front];
      delete storage[_front];
      _front ++;      
      return result;
    }
    //return 0;
  };

  someInstance.size = function(){
    return _back - _front;
  };

  return someInstance;
};
