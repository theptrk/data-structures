var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  // This linked list is implemted as a singly linked list and due to the
  // lack of a reference to the previous node, we must initiate a contains 
  // function with the head as the starting point of our search. All nodes
  // are visited until we reach a node containing our target or we return false.
  list.contains = function(target, node){

    node = node || this.head;

    if (node.value === target) { return true; }
    if (node.next !== null) {
      return this.contains(target, node.next);
    }

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};