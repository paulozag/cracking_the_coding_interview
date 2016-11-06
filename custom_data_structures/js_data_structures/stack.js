var Stack = function(value){
  if (value) {this.top = new Node(value)}
};

Stack.prototype.pop = function(){
  if (!this.top) {return null}
  var result = this.top.value;
  this.top = this.top.next;
  return result;
}

Stack.prototype.push = function(item){
  var nodeItem = new Node(item);
  nodeItem.next = this.top;
  this.top = nodeItem;
}

Stack.prototype.peek = function(){
  return this.top.value;
}