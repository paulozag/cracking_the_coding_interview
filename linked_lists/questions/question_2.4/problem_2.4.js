var partitionLinkedList = function(list, target){

  var smallList = new LinkedList();
  var bigList   = new LinkedList();
  var runner = list.head
  while (runner){
    if(runner.value < target){
      smallList.push(runner.value)
    } else{
      bigList.push(runner.value)
    }
    runner = runner.next
  }

  if (smallList.head){
    smallList.tail.next = bigList.head;
    return smallList;
  } else {
    return bigList;
  }
}

