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
  return (this.top ? this.top.value : "empty")
}

var TowerOfHanoi = function(numDiscs){
  this.numDiscs = numDiscs = typeof numDiscs !== 'undefined' ? numDiscs : 7;
  this.tower1 = new Stack()
  this.tower1 = new Stack()
  this.tower1 = new Stack()

  for(var size = numDiscs; size > 0; size--){
    this.tower1.push(size)
  }


}





th = new TowerOfHanoi(9)
console.log(th.tower1.pop())
console.log(th.tower1.pop())
console.log(th.tower1.pop())
console.log(th.tower1.pop())
