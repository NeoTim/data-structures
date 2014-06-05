var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
	instance._storage = {};
  instance._size = 0;

  _(instance).extend(queueMethods);
  return instance;
};

var queueMethods = {
	enqueue: function( value ){
		this._storage[this._size] = value;
		this._size ++;
	},
	dequeue: function( ){
		var result; 
		if(this._size > 0){
			this._size--;
			result = this._storage[this._size];
			delete this._storage[this._size];
		}
		return result;
	},
	size: function( ){
		return this._size;
	}
};



