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
}

LinkedList.prototype.enqueue = function(value){
  var newNode = this.generateNewNode(value);
  if(this.head){
    newNode.next  = this.head
    this.head     = newNode
  } else{
    this.enterNodeIntoEmptyList(newNode)
  }
}


// ********** HELPERS **********
LinkedList.prototype.enterNodeIntoEmptyList = function(newNode){
  this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.generateNewNode = function(value){
  return new Node(value)
}


var x = new LinkedList;
x.push(5);
x.enqueue(4);
x.push(6)
console.log('head of list: ' + x.head.value)
console.log('tail of list: ' + x.tail.value)
// var list = new LinkedList(new Node(1))
// var x = [2,3,4,5,5,4,3,2,1]
// for (var index = 0; index < x.length; index++){
//   list.addNode(new Node(x[index]))
// }