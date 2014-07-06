var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextEnqueue = 0;
  var nextDequeue = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[nextEnqueue++] = value;
  };

  instance.dequeue = function(){
    if (nextEnqueue === nextDequeue) { return; }
    return storage[nextDequeue++];
  };

  instance.size = function(){
    return nextEnqueue - nextDequeue;
  };

  return instance;
};
