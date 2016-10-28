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
  result = this.top
  this.top = this.top.next
  return result.value
}

Stack.prototype.push = function(item){
  nodeItem = new Node(item)
  nodeItem.next = this.top
  this.top = nodeItem
}

Stack.prototype.peek = function(){
  return (this.top ? this.top.value : null)
}

var MyQueue = function(){
  this.mainStack = new Stack()
  this.transferStack = new Stack()
}

MyQueue.prototype.enqueue = function(value){
  while(this.mainStack.peek()){
    this.transferStack.push(this.mainStack.pop())
  }
  this.transferStack.push(value)
  while(this.transferStack.peek()){
    this.mainStack.push(this.transferStack.pop())
  }
}

MyQueue.prototype.dequeue = function(){
  return this.mainStack.pop()
}

MyQueue.prototype.peek = function(){
  return this.mainStack.peek()
}


var arr = [1,2,3,4,5]
var mQ = new MyQueue()
for(var val of arr){
  mQ.enqueue(val)
}
while(mQ.peek()){
  console.log(mQ.dequeue())
}
console.log(mQ.dequeue())