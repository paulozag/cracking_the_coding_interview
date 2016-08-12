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
  if (this.head){
    var lastNode = this.lastElement()
    lastNode.next = node
  } else {
    this.head = node
  }


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

var findAndRemoveDups = function(targetNode, classInstance){
  var runner = targetNode.next
  while (runner){
    if (runner.value == targetNode.value){ classInstance.removeNode(runner)}
    runner = runner.next
  }
}

var partitionLinkedList = function(list, target){
  var smallList = new LinkedList()
  var bigList = new LinkedList()
  var runner = list.head

  while(runner){
    var nextNode = runner.next
    runner.next = null
    if (runner.value < target){
      smallList.addNode(runner)
    } else {
      bigList.addNode(runner)
    }
    runner = nextNode
  }
  smallList.addNode(bigList.head)
  return smallList
}

var linkedListAdder = function(list1, list2){
  arrabic1 = llToArabic(list1.head, 0)
  arrabic2 = llToArabic(list2.head, 0)
  return arabicToLl(arrabic1 + arrabic2)
}

var llToArabic = function(head, powerOfTen){
  if (!head){
    return 0
  }
  return llToArabic(head.next, powerOfTen + 1) + Math.pow(10, powerOfTen) * head.value
}

var arabicToLl = function(num){
  var list = new LinkedList( new Node(num%10))
  num = Math.floor(num/10)
  while (num > 0){
    list.addNode(new Node(num%10))
    num = Math.floor(num/10)
  }
  return list
}





var list = new LinkedList(new Node(1))
var x = [5,6,7]
for (var index = 0; index < x.length; index++){
  list.addNode(new Node(x[index]))
}

list.viewList()
console.log('XXXXXXXXXXX')
// list.removeDuplicatesNoBuffer()
// list.viewList()
// var partitionedList = partitionLinkedList(list,4)
// list.viewList()
// console.log(llToArabic(list.head,0))
console.log(arabicToLl(7651).head.next.next.next.value)