var Node = function(value){
  timer = Date.now()
  while (Date.now() === timer){}
  this.value = value
  this.id = Date.now()
  this.next = null
};

var Stack = function(value){
  this.top = new Node(value)
  this.stackSize = 1
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
  this.maxStack = 5
  this.stacks.push(new Stack(value))
}

StackOfStacks.prototype.lastStack = function(){
  if (this.stacks.length == 0){
    return null
  }
  return this.stacks[(this.stacks.length - 1)]
}

StackOfStacks.prototype.push = function(value){

}


var sos = new StackOfStacks(1)
console.log(sos.lastStack())

var stack = new Stack(1)
console.log(stack.stackSize)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.stackSize)
stack.pop()
stack.pop()
console.log(stack.stackSize)
