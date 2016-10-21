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
  return (this.top ? this.top.value : "empty")
}

function Disc(size){
  this.size = size
}

function TowerOfHanoi(numDiscs){
  this.numDiscs = typeof numDiscs !== 'undefined' ? numDiscs : 9;
  this.tower1 = new Stack()
  this.tower2 = new Stack()
  this.tower3 = new Stack()

  for (var index = this.numDiscs; index > 0; index--){
    this.tower1.push(new Disc(index))
  }
}

TowerOfHanoi.prototype.solve = function(){
  console.log('tower 1 before move: ' + th.tower1.peek())
  this.move(this.numDiscs, this.tower1, this.tower2, this.tower3)
}

TowerOfHanoi.prototype.move = function(numDiscs, from, pivot, destination){
  // move numDiscs -1 from from to pivot
  // move last disc from from to destination
  // move numDiscs -1 from pivot to destination
  console.log('in move')
  if (numDiscs === 1){
    // console.log('in num === 1')
    var valueToMove = from.pop()
    console.log('moved item: ' + valueToMove.value)
    destination.push(valueToMove)
  } else {
    this.move(numDiscs - 1, from, destination, pivot )
    this.move(1, from, pivot, destination)
    this.move(numDiscs - 1, pivot, from, destination)
  }
}



th = new TowerOfHanoi()
// console.log(th.tower1.peek())
th.solve()
console.log('tower 1' + th.tower1.peek())
console.log('tower 2' + th.tower2.peek())
console.log('tower 3' + th.tower3.peek())
console.log(th.tower3.peek())
for(var index in th.tower3){
  console.log(th.tower3.pop().value)
}


