/*
when i first tried this problem i solved for adding only two lists.
that code is in this directory under 'hard_code_of_2_lists_added.js'.
I thought it would be interesting to refactor and add the ability to
take in an array of lists of dynamic length.  I stored the carry variable
as a single element array so i could pass the carry value by reference
rather than value.  There is probably a more elegant/clearer way to do this.
*/

var linkedListAdder = function(lists){
  var runners = [];
  var carry   = [0]
  for (var list of lists){
    runners.push(list.head);
  }
  var sum   = new LinkedList();

  while ( stepsOfAdditionStillRemaining(runners, carry) ){
    sum.push(processAddition(runners, carry));
  }
  emp
  return sum.head ? sum : zeroList();
}

var stepsOfAdditionStillRemaining = function(runners, carry){
  for (runner of runners){
    if(runner){return true}
  }
  return carry[0];
}

var processAddition = function(runners, carry){
  digit = 0;
  for (var index in runners){
    digit += addRunnerDigit(runners, index);
  }
  digit += carry[0];
  carry[0] = Math.floor(digit/10);
  return digit%10;
}

var addRunnerDigit = function(runners, index){
  var digitValue = 0;
  if (runners[index]){
    var digitValue = runners[index].value;
    runners[index] = runners[index].next;
  }
  return digitValue;
}

var zeroList = function(){
  var list = new LinkedList();
  list.push(0);
  return list;
}



var l1 = new LinkedList();
var l2 = new LinkedList();
var l3 = new LinkedList();
var l1Array = [7,1,6];
var l2Array = [5,9,2];
var l3Array = [1,1]

for (var val of l1Array){
  l1.push(val);
}
for (var val of l2Array){
  l2.push(val);
}
for (var val of l3Array){
  l3.push(val);
}
console.log("list 1");
l1.viewList();
console.log("-----------------------------------------");
console.log("list 2");
l2.viewList();
console.log("-----------------------------------------");
console.log("sum of lists 1 and 2");
var sum = linkedListAdder([l1,l2, l3])
sum.viewList();
