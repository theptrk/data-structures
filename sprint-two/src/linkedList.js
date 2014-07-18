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

  // This linked list is implemeted as a singly linked list and due to the
  // lack of a reference to the previous node, we must by default initiate a 
  // contains function with the head as the starting point of our search. 
  // All nodes are visited until we reach a node containing our target or 
  // we return false.
  list.contains = function(target, node){

    node = node || this.head;

    if (node.value === target) { return true; }
    if (node.next !== null) {
      return this.contains(target, node.next);
    }

    return false;
  };

  // recursive counting function to count all the nodes
  list.count_recursive = function() {
    var counter = 0;
    var traverseNodes = function(node){
      counter++;
      if (node.next) {
        traverseNodes(node.next);
      }
    };
    traverseNodes(list.head);
    return counter;
  };

  // self recursive counting function to count all nodes 
  list.count_self_recursive = function(node, count) {
    if (list.head === null) { return null; }
    
    node = node || list.head;
    count = count || 0;

    count++;
    if (node.next) {
      return list.count_recursive(node.next, count);
    } else {
      return count;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

linkedList = makeLinkedList();
linkedList.addToTail(4);
linkedList.addToTail(4);
linkedList.addToTail(4);
console.log(linkedList.count_recursive()); 
