var createHolder = function(){
  var value = null
  var setValue = function(payload){
    value = payload
  };
  var getValue = function(){
    return value
  }
  var holder = {}
  holder.setValue = setValue
  holder.getValue = getValue
  return holder
}

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

LinkedList.prototype.length = function(){
  var count = 0
  var runner = this.head
  while (runner){
    count++
    runner = runner.next
  }
  return count
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
    if (runner == node){
      previous.next = runner.next
      return runner
    }
    previous = runner
    runner = runner.next
  }
}

LinkedList.prototype.kthToLast = function(k){

  var targetNode  = new createHolder()
  this.findKth(this.head, k, targetNode)
  return targetNode.getValue()
}

LinkedList.prototype.findKth = function(head, k, targetNode){
  if (!head) {return 0}

  var result = this.findKth(head.next, k, targetNode) + 1
  if (result == k) { targetNode.setValue(head) }
  return result
}

// var x = new createHolder()
// x.setValue(5)
// console.log(x.getValue())

var list = new LinkedList(new Node(0))
var x = [1,2,3,4,5]
for (var index = 0; index < x.length; index++){
  list.addNode(new Node(x[index]))
}

console.log(  list.kthToLast(2).value  )