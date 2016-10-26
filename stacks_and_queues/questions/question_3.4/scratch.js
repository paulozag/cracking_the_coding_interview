function TowerOfHanoi(numDiscs){
  this.numDiscs = typeof numDiscs !== 'undefined' ? numDiscs : 9;
  this.tower1 = new Stack()
  this.tower2 = new Stack()
  this.tower3 = new Stack()
  console.log('number of discs: ' + numDiscs)

  for (var index = this.numDiscs; index > 0; index--){
    console.log('pushing value: ' + index)
    this.tower1.push(index)
  }
}

TowerOfHanoi.prototype.solve = function(){
  console.log('tower 1 before move: ' + this.tower1.peek())
  this.move(this.numDiscs, this.tower1, this.tower2, this.tower3)
}

TowerOfHanoi.prototype.move = function(numDiscs, from, pivot, destination){
  // move numDiscs -1 from from to pivot
  // move last disc from from to destination
  // move numDiscs -1 from pivot to destination
  // console.log('in move')
  if (numDiscs === 1){
    // console.log('in num === 1')
    var valueToMove = from.pop()
    // console.log('popped obj keys: ' + Object.keys(valueToMove))
    destination.push(valueToMove)
  } else {
    this.move(numDiscs - 1, from, destination, pivot )
    this.move(1, from, pivot, destination)
    this.move(numDiscs - 1, pivot, from, destination)
  }
}