LinkedList.prototype.kthToLast = function(k){
  // debugger
  if (this.isEmpty()){
    return null;
  }
  var runner = this.advanceRunner(k);
  var kBehind = this.head
  if (!runner){
    return null;
  }
  while(runner.next){
    runner = runner.next;
    kBehind = kBehind.next;
  }
  return kBehind;
}

LinkedList.prototype.advanceRunner = function(n){
  var count = 0;
  var runner = this.head
  while (count < n){
    runner = runner.next;
    count++
    if (!runner){
      return null;
    }
  }
  return runner;
}
