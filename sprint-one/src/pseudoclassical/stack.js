var Stack = function() {
  this.storage = {};
  this.sizeOf = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.sizeOf++] = value;
};

Stack.prototype.pop = function(){
  this.sizeOf && this.sizeOf--;
  var value = this.storage[this.sizeOf];
  delete this.storage[this.sizeOf];
  return value;
};

Stack.prototype.size = function(){
  return this.sizeOf;
};