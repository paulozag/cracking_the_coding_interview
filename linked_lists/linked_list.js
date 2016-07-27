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
    // console.log('head: ' + this.head.value)
    var current = this.head
    while (current.next){
      // console.log('in loop')
      current = current.next
    }
    // console.log('current value after while loop' + current.value)
    return current;
  }
  return null
}

LinkedList.prototype.addNode = function(node){
  var lastNode = this.lastElement()
  lastNode.next = node
}

var x = new LinkedList(new Node(5))
x.addNode(new Node(4))
x.addNode(new Node(3))
x.viewList()
console.log( 'value of last element: ' + x.lastElement().value)
// console.log(x.lastNode)
// console.log(x.value)
// x.value = 3
// console.log(x.value)