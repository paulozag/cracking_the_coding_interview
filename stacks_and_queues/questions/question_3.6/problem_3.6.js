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

var StackSorter = function(unsortedStack){
  this.unsortedStack =  unsortedStack
  this.tempStack =  new Stack()
  this.permStackCount = 0
  this.stackCount = this.getStackCount()
}

StackSorter.prototype.getStackCount = function(){
  var count = 0
  while(this.unsortedStack.peek()){
    this.tempStack.push(this.unsortedStack.pop())
    count++
  }
  while(this.tempStack.peek()){
    this.unsortedStack.push(this.tempStack.pop())
  }
  return count
}


// ##########################################################
uS = new Stack()
for(var value of [2,5,1,3,4]){
  uS.push(value)
}
sS = new StackSorter(uS)
console.log(sS.stackCount)
