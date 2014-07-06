var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
    return this._storage[item] = true;
};

setPrototype.contains = function(item){
};

setPrototype.remove = function(item){
};
