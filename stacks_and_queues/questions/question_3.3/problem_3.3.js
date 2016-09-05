var Node = function(value){
  timer = Date.now()
  while (Date.now() === timer){}
  this.value = value
  this.id = Date.now()
  this.next = null
};

var Stack = function(value){
  this.top = new Node(value)
  this.stack_size = 1
};

Stack.prototype.pop = function(){
  if (!this.top) {return null}
  result = this.top.value
  this.top = this.top.next
  this.stack_size--
  return result
}

Stack.prototype.push = function(item){
  nodeItem = new Node(item)
  nodeItem.next = this.top
  this.top = nodeItem
  this.stack_size++
}

Stack.prototype.peek = function(){
  return this.top.value
}

var StackOfStacks = function(value){
  this.stacks = []
  this.stacks.push(new Stack(value))
}

var stack = new Stack(1)
console.log(stack.stack_size)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.stack_size)
stack.pop()
stack.pop()
console.log(stack.stack_size)
