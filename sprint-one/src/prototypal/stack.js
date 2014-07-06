var makeStack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.sizeOf = 0;

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