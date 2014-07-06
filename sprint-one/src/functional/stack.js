var makeStack = function(){
  var instance = {};

  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size] = value;
    return size++;
  };

  instance.pop = function(){
    return size > 0 ? storage[--size]:0;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};