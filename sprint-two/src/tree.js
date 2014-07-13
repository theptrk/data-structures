var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.extend(treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
    var newTree = makeTree(value);
    return this.children.push(newTree);
};

treeMethods.contains = function(target){
    var found = false;

    var traverse = function(obj){
        if (obj.value === target) { found = true; }
        for (var i = 0; i < obj.children.length; i++) {
            traverse(obj.children[i]);
        }
    };

    traverse(this);
    return found;
};

Object.prototype.extend = function(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this[prop] = obj[prop];
    }
  }
};