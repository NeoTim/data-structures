var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
	instance._storage = {};
  instance._front = 0;
  instance._back = 0;

  _(instance).extend(queueMethods);
  return instance;
};

var queueMethods = {
	enqueue: function( value ){
		this._storage[this._back] = value;
		this._back ++;
	},
	dequeue: function( ){
		var result; 
		if(this._back - this._front){
			result = this._storage[this._front];
			delete this._storage[this._front];
			this._front ++;
			return result;
		}
		return 0;
	},
	size: function( ){
		return this._back - this._front;
	}
};
