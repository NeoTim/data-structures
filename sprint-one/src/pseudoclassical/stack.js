var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   //var someInstance = new Stack({}, 0);
  this._storage = {};
  this._size = 0;
  //return someInstance;

};


/*var Stack = function(storage, size){
  this.storage = storage;
  this.stackSize = size;
};*/

Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size ++;
};

Stack.prototype.pop = function(){
  var result;
  if(this._size > 0){
    this._size --;
    result = this._storage[this._size];
    delete this._storage[this._size];
    return result;
  }
};

Stack.prototype.size = function(){
  //var size = 0;
  return this._size;
};
