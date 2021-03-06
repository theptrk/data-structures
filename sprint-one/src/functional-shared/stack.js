var makeStack = function() {
  var instance = {};

  instance.storage = {};
  instance.sizeOf = 0;

  instance = _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.sizeOf++] = value;
};

stackMethods.pop = function(){
  this.sizeOf && this.sizeOf--;
  var value = this.storage[this.sizeOf];
  delete this.storage[this.sizeOf];
  return value;
};

stackMethods.size = function(){
  return this.sizeOf;
};