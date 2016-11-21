var Node = function(value){
  timer = Date.now();
  while (Date.now() === timer){}
  this.value = value;
  this.id = Date.now();
  this.next = null;
  this.prev_min = null;
};

var Stack = function(value){
  if (value) {
    this.top = new Node(value)
    this.min = value
  } else {
    this.top = null
    this.min = null
  }
};

Stack.prototype.pop = function(){
  if (!this.top) {return null;}
  result = this.top.value;
  if (this.top.prev_min > result){
    this.min = this.top.prev_min;
  }
  this.top = this.top.next;
  if (!this.top){
    this.min = null;
  }
  return result
}

Stack.prototype.push = function(item){
  nodeItem = new Node(item)
  nodeItem.next = this.top
  if (this.top){
    nodeItem.prev_min = this.min
    if (this.min > item) { this.min = item}
  } else {
    this.min = item
    nodeItem.prev_min = item
  }
  this.top = nodeItem
}

Stack.prototype.peek = function(){
  return this.top.value
}


var stack = new Stack(1)
stack.push(2)
console.log(stack.min)
stack.push(3)
stack.push(-4)
console.log(stack.min)
stack.pop()
console.log(stack.min)
stack.push(2)
stack.push(-2)
console.log(stack.min)