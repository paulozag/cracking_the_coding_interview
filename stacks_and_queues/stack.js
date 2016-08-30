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

var stack = new Stack(1)
console.log('peeking at stack: ' + stack.peek())
stack.push(2)
stack.push(3)
console.log('peeking at stack: ' + stack.peek())
stack.pop()
var two = stack.pop()
console.log('hopefully 2: ' + two)