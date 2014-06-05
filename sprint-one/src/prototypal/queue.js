var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._front = 0;
  instance._back = 0;

  return instance;
};


var queueMethods = {}

queueMethods.enqueue = function( value ){
	this._storage[this._back] = value;
	this._back ++;
};

queueMethods.dequeue = function( ){
	var result; 
	if(this._back - this._front){
		result = this._storage[this._front];
		delete this._storage[this._front];
		this._front ++;
		return result;
	}
	return 0;
};

queueMethods.size = function( ){
	return this._back - this._front;
};

