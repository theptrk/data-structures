var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = this._storage[i] || [];
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  for (var j = 0; j < this._storage[i].length; j++) {
      if (this._storage[i][j][0] === k) {
        return this._storage[i][j][1];
      } 
  }
  return false;
};

HashTable.prototype.remove = function(k){
};

