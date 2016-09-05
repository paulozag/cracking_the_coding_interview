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
  if (lastStack.stackSize == this.maxStack){
    this.stacks.push(new Stack(value))
  } else {
    lastStack.push(value)
  }
}

StackOfStacks.prototype.pop = function(){
  var lastStack = this.lastStack()
  var popResult =  lastStack.pop()
  if (lastStack.stackSize == 0){ this.stacks.pop() }
  return popResult
}

StackOfStacks.prototype.rebalance = function(index){
  while (this.stacks[(index + 1)]){
    var latterValue = this.stacks[index + 1].pop()
    this.stacks[index].push(latterValue)
    index++
  }
}

StackOfStacks.prototype.popAt = function(index){
  if (index >= this.stacks.length){
    return null
  }
  var popResult = this.stacks[index].pop()
  this.rebalance(index)
  return popResult
}


var stack = new StackOfStacks(1)

var incrementor = 2
while (incrementor < 38){
  stack.push(incrementor)
  incrementor++
}

console.log(stack.stacks.length)
console.log(stack.lastStack().stackSize)
console.log(stack.popAt(2))
for(var i = 0; i < stack.stacks.length; i++){
  console.log(stack.stacks[i].stackSize)
}


