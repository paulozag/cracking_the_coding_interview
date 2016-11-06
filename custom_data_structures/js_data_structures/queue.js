var Queue = function(initialValue){
  this.front = null;
  this.back = null;
  if (initialValue){
    var newNode = new Node(initialValue);
    this.front = newNode;
    this.back = newNode;
  }
}

Queue.prototype.enqueue = function(item){
  var newNode = new Node(item);
  if (this.front){
    this.back.next = newNode;
    this.back = newNode;
  } else {
    this.front = newNode;
    this.back = newNode;
  }
}

Queue.prototype.dequeue = function(){
  if (!this.front){
    return null;
  }
  var returnedValue = this.front.value;
  if (this.front.next){
    this.front =this.front.next;
  } else {
    //  queue is empty now
    this.front = null;
    this.last = null;
  }
  return returnedValue;
}

Queue.prototype.peek = function(){
  if (this.front){
    return this.front.value;
  } else {
    return null;
  }
}