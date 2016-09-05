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
  this.stackSize--
  return result
}

Stack.prototype.push = function(item){
  nodeItem = new Node(item)
  nodeItem.next = this.top
  this.top = nodeItem
  this.stackSize++
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
  var lastStack = this.lastStack()
  console.log('pushing: ' + value + ' maxStack: ' + this.maxStack)
  if (lastStack.stackSize == this.maxStack){
    this.stacks.push(new Stack(value))
  } else {
    lastStack.push(value)
  }
}


var stack = new StackOfStacks(1)

stack.push(2)
stack.push(3)
stack.push(4)
// console.log(stack.lastStack())
stack.push(5)
stack.push(6)
// console.log(stack.lastStack())
console.log(stack.stacks.length)

