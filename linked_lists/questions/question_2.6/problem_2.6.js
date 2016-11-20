var headOfCircularList = function(list){
  // debugger
  if (!list.head){
    return null;
  }

  var runners = {
    slow: list.head,
    fast: list.head
  }

  if (!collideRunners(runners)){
    return null; // non-circular list
  }
  runners.slow  = list.head;
  return haveRunnersMeet(runners)
}

var collideRunners = function(runners){
  while (runners.fast && runners.fast.next){
    runners.slow  = runners.slow.next;
    runners.fast  = runners.fast.next.next;
    if (runners.slow == runners.fast){
      return true;
    }
  }
  return false;
}

var haveRunnersMeet = function(runners){
  while(runners.slow != runners.fast){
    runners.slow  = runners.slow.next;
    runners.fast  = runners.fast.next;
  }
  return runners.slow;
}

// list = new LinkedList();
// for (var val of [1,2,3,4,5]){
//   list.push(val);
// }
// var headOfcircle = new Node(6);
// list.tail.next = headOfcircle;
// list.tail = headOfcircle;
// for (var val of [7,8,9,10,11,12,13]){
//   list.push(val);
// }
// list.tail.next = headOfcircle;

// console.log(headOfCircularList(list).value);

