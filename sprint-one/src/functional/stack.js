var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
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

var stack = makeStack();
stack.push('a');
console.log(stack.pop());
stack.push('b');
console.log(stack.pop());