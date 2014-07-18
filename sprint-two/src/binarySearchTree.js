var makeBinarySearchTree = function(value){
    var binarySearchTree = {};
    binarySearchTree.value = value;
    binarySearchTree.left = null;
    binarySearchTree.right = null;
    
    _.extend(binarySearchTree, binaryTreeMethods);

    return binarySearchTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value, node) {

  node = node || this;

  if (value > node.value) {
    if (node.right === null) {
      node.right = makeBinarySearchTree(value);
    } else {
      this.insert(value, node.right);
    }
  } else {
    if (node.left === null) {
      node.left = makeBinarySearchTree(value);
    } else {
      this.insert(value, node.left);
    }
  }
};

binaryTreeMethods.contains = function(value) {
};

binaryTreeMethods.depthFirstLog = function(value) {
};