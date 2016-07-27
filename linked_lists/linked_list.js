var Node = function(value){
  this.value = value
  this.next = null
};

var LinkedList = function(node){
  this.head = node
  this.next = null
};

LinkedList.prototype.viewList = function(){
  var runner = this.head
  while (runner){
    console.log(runner.value)
    runner = runner.next
  }
}

LinkedList.prototype.lastElement = function(){
  if (this.head){
    var current = this.head
    while (current.next){
      current = current.next
    }
    return current;
  }
  return null
}

LinkedList.prototype.addNode = function(node){
  var lastNode = this.lastElement()
  lastNode.next = node
}

LinkedList.prototype.removeNode = function(node){
  if (node == this.head){
    var temp = this.head
    this.head = this.head.next
    return temp
  }
  var runner = this.head.next
  var previous = this.head

  while (runner){
    if (runner = node){
      previous.next = runner.next
      return runner
    }
    previous = runner
    runner = runner.next
  }
}

LinkedList.prototype.removeDuplicates = function(){
  var duplicatesHash = {}
  runner = this.head
  // while (runner){

  // }
}

var x = new LinkedList(new Node(5))
var y = new Node(2)
x.addNode(y)
x.addNode(new Node(4))
x.addNode(new Node(3))
x.viewList()
var removed = x.removeNode(y)
console.log(removed.value)
x.viewList()

// console.log( 'value of last element: ' + x.lastElement().value)
// console.log(x.lastNode)
// console.log(x.value)
// x.value = 3
// console.log(x.value)