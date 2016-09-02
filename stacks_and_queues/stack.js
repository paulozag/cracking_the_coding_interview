var Node = function(value){
  timer = Date.now()
  while (Date.now() === timer){}
  this.value = value
  this.id = Date.now()
  this.next = null
};

var Stack = function(value){
  if (value) {this.top = new Node(value)}
};

Stack.prototype.pop = function(){
  if (!this.top) {return null}
  result = this.top.value
  this.top = this.top.next
  return result
}

Stack.prototype.push = function(item){
  nodeItem = new Node(item)
  nodeItem.next = this.top
  this.top = nodeItem
}

Stack.prototype.peek = function(){
  return this.top.value
}

var Queue = function(initialValue){
  this.front = null
  this.back = null
  if (initialValue){
    newNode = new Node(initialValue)
    this.front = newNode
    this.back = newNode
  }
}

Queue.prototype.enqueue = function(item){
  var newNode = new Node(item)
  if (this.front){
    this.back.next = newNode
    this.back = newNode
  } else {
    this.front = newNode
    this.back = newNode
  }
}

Queue.prototype.dequeue = function(){
  if (!this.front){
    return null
  }
  var returnedValue = this.front.value
  if (this.front.next){
    this.front =this.front.next
  } else {
    //  queue is empty now
    this.front = null
    this.last = null
  }
  return returnedValue
}

Queue.prototype.peek = function(){
  if (this.front){
    return this.front.value
  } else {
    return null
  }
}

// var queue = new Queue(1)
// console.log(queue.peek())
// queue.enqueue(2)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue.peek())
// console.log(queue.dequeue())
// console.log(queue.dequeue())

// var stack = new Stack(1)
// console.log('peeking at stack: ' + stack.peek())
// stack.push(2)
// stack.push(3)
// console.log('peeking at stack: ' + stack.peek())
// stack.pop()
// var two = stack.pop()
// console.log('hopefully 2: ' + two)