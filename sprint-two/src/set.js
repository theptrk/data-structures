var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
    this._storage[item] = true;
    return this._storage[item];
};

setPrototype.contains = function(item){
    return this._storage[item] || false;
};

setPrototype.remove = function(item){
    delete this._storage[item];
};
