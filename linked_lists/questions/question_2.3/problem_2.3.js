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

LinkedList.prototype.removeDuplicates = function(){
  var duplicatesHash = {}
  runner = this.head
  while (runner){
    if (duplicatesHash[runner.value]){
      this.removeNode(runner)
    } else {
      duplicatesHash[runner.value] = true
    }
    runner = runner.next
  }
}

LinkedList.prototype.removeDuplicatesNoBuffer = function(){
  var current = this.head
  while (current){
    findAndRemoveDups (current, this)
    current = current.next
  }
}

LinkedList.prototype.deleteFromMiddle = function(node){
  node.value = node.next.value
  node.next = node.next.next
}

var findAndRemoveDups = function(targetNode, classInstance){
  var runner = targetNode.next
  while (runner){
    if (runner.value == targetNode.value){ classInstance.removeNode(runner)}
    runner = runner.next
  }
}




var list = new LinkedList(new Node(0))
var x = [1,2,3,4,5]
for (var index = 0; index < x.length; index++){
  list.addNode(new Node(x[index]))
}
var target = new Node(8)
list.addNode (target)
for (var index = 0; index < x.length; index++){
  list.addNode(new Node(x[index]))
}

list.viewList()
console.log('XXXXXXXXXXXXXXXXXXXXX')

list.deleteFromMiddle(target)

list.viewList()
