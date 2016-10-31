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

var TowerOfHanoi = function(numDiscs){
  this.numDiscs = (numDiscs = typeof numDiscs !== 'undefined' ? numDiscs : 7)
  this.tower1 = new Stack()
  this.tower2 = new Stack()
  this.tower3 = new Stack()

  for(var size = numDiscs; size > 0; size--){
    this.tower1.push(size)
  }
}

TowerOfHanoi.prototype.solve = function(){
  console.log(typeof(this.tower1))
  this.move(  this.numDiscs,
              this.tower1,
              this.tower2,
              this.tower3)
  // tests that tower 3 now contains all discs in correct order
  // console.log('contents of tower3: ')
  // while(this.tower3.peek()){console.log(this.tower3.pop())}
}

TowerOfHanoi.prototype.move = function(numDiscs, origin, pivot, destination){
  if(numDiscs == 1){
    destination.push(origin.pop())
    return
  }
  this.move(    numDiscs-1,
                origin,
                destination,
                pivot)
  this.move(    1,
                origin,
                pivot,
                destination)
  this.move(    numDiscs -1,
                pivot,
                origin,
                destination)
}


// ***************************************************************************
th = new TowerOfHanoi(9)
// while(th.tower1.peek()){console.log(th.tower1.pop())}
th.solve()
// th.tower3.push(th.tower1.pop())
