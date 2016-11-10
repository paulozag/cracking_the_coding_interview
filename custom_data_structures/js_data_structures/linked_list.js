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
  return this.deleteNode(node);
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
};

LinkedList.prototype.length = function(){
  var runner  = this.head;
  var count   = 0;

  while (runner){
    count++;
    runner = runner.next;
  }
  return count;
};

LinkedList.prototype.count = function(){
  return this.length();
};


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
  if(this.isSingleton()){
    return this.deleteSingleton();
  };

  if(this.tail == node){
    return this.deleteTail(this);
  }

  return this.deleteNonTailNode(node);
};

LinkedList.prototype.deleteNonTailNode = function(node){
  // if node.next = tail?
  var returnValue = node.value;
  if (this.tail == node.next){
    this.tail = node;
  }
  node.value  = node.next.value;
  node.next   = node.next.next;
  return returnValue;
};

LinkedList.prototype.deleteFromList = function(deletionMode){
  // debugger
  if(!this.head){
    return null;
  }
  if(this.isSingleton()){
    return this.deleteSingleton();
  } else {
    return deletionMode(this);
  }
};

LinkedList.prototype.deleteTail = function(reference){
  var runnersParent = reference.head;
  var runner = reference.head.next;
  var returnValue;
  while(runner.next){
    runner = runner.next;
    runnersParent = runnersParent.next;
  };
  reference.tail = runnersParent;
  reference.tail.next = null;
  return runner.value;
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
};

LinkedList.prototype.enterNodeIntoEmptyList = function(newNode){
  this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.generateNewNode = function(value){
  return new Node(value)
};

var x = new LinkedList;
for (value of [1,2,3]){
  x.push(value)
};
x.viewList();
x.remove(1);
console.log("removed 1");
console.log('head == tail ? :', x.head == x.tail)
console.log('***********************************');
x.viewList();
console.log('count: ', x.length())