var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.push = function(value){
  var newNode = this.generateNewNode(value);
  if (this.tail){
    this.tail.next  = newNode;
    this.tail       = newNode
  } else {
    this.enterNodeIntoEmptyList(newNode)
  }
};

LinkedList.prototype.enqueue = function(value){
  var newNode = this.generateNewNode(value);
  if(this.head){
    newNode.next  = this.head
    this.head     = newNode
  } else{
    this.enterNodeIntoEmptyList(newNode)
  }
};

LinkedList.prototype.pop = function(){
  return this.deleteFromList(this.deleteTail);
};

LinkedList.prototype.dequeue = function(){
  return this.deleteFromList(this.deleteHead);
};

LinkedList.prototype.remove = function(value){
  var node = this.findNodeByValue(value);
  if(!node){
    return null;
  };
  return deleteNode(node);
};

LinkedList.prototype.viewList = function(){
  console.log("list contents:");
  this.isEmpty();
  if(this.isEmpty()){
    console.log('empty list');
  } else {
    var runner = this.head;
    while(runner){
      console.log(runner.value);
      runner = runner.next
    }
  };
};

LinkedList.prototype.isEmpty = function(){
  return !this.head;
}


// ********** HELPERS **********

LinkedList.prototype.findNodeByValue = function(value){
  var runner = this.head;
  while(runner){
    if(runner.value == value){
      return runner;
    }
    runner = runner.next;
  }
  return null;
};

LinkedList.prototype.deleteNode = function(node){
  if(this.isSingleton){
    return deleteSingleton();
  };

  if(this.tail == node){
    return deleteTail();
  }

  return deleteNonTailNode(node);
};

LinkedList.prototype.deleteNonTailNode = function(node){
  var returnValue = node.value;
  node.value  = node.next.value;
  node.next   = node.next.next;
  return returnValue;
};

LinkedList.prototype.deleteFromList = function(deletionMode){

  if(!this.head){
    return null;
  }
  if(this.isSingleton()){
    return deleteSingleton();
  } else {
    return deletionMode(this);
  }
};

LinkedList.prototype.deleteHead = function(reference){
  var returnValue = reference.head.value;
  this.head = reference.head.next;
  return returnValue;
};

LinkedList.prototype.isSingleton = function(){
  return this.head == this.tail;
};

LinkedList.prototype.deleteSingleton = function(){
  var returnValue = this.head.value;
  this.head = null;
  this.tail = null;
  return returnValue;
}

LinkedList.prototype.deleteTail = function(reference){
  var runnersParent = reference.head;
  var runner = reference.head.next;
  var returnValue;
  while(runner.next){
    runner = runner.next;
    runnersParent = runnersParent.next;
  };
  this.tail = runnersParent;
  return runner.value;
}

LinkedList.prototype.enterNodeIntoEmptyList = function(newNode){
  this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.generateNewNode = function(value){
  return new Node(value)
};


var x = new LinkedList;
x.push(5);
x.enqueue(4);
x.push(6)
console.log('head of list: ' + x.head.value)
console.log('tail of list: ' + x.tail.value)
console.log('--------------------------------------');
x.viewList()
console.log('pop list value: ', x.pop());
console.log('dequeue list value: ' + x.dequeue());
// var list = new LinkedList(new Node(1))
// var x = [2,3,4,5,5,4,3,2,1]
// for (var index = 0; index < x.length; index++){
//   list.addNode(new Node(x[index]))
// }