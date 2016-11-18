// var linkedListAdder = function(list1, list2){
//   arrabic1 = llToArabic(list1.head)
//   arrabic2 = llToArabic(list2.head)
//   return arabicToLl(arrabic1 + arrabic2)
// }

// var llToArabic = function(head){

//   if (!head.next){
//     return {value: head.value,
//             powerOfTen: 0}
//   }
//   var runningTotal = llToArabic(head.next)
//   var updatedValue = runningTotal.value + (10**runningTotal.powerOfTen) * head.value
//   return {  value: updatedValue,
//             powerOfTen: runningTotal.powerOfTen + 1}
// }

// var linkedListAdder = function(list1, list2){
//   var runner1   = list1.head;
//   var runner2   = list2.head;
//   var carry     = 0;
//   var sum       = new LinkedList();

//   while (runner1 || runner2 || carry){
//     var digit = 0;
//     if (runner1){
//       digit += runner1.value;
//       runner1 = runner1.next;
//     }
//     if (runner2){
//       digit += runner2.value;
//       runner2 = runner2.next;
//     }
//     digit += carry;
//     sum.push(digit%10);
//     carry = Math.floor(digit/10);
//   }
//   return sum;
// }

var linkedListAdder = function(list1, list2){
  var adderProperties = {
                    runner1:  list1.head,
                    runner2:  list2.head,
                    runnerKeys: ['runner1', 'runner2'],
                    carry:    0
  }
  var sum   = new LinkedList();

  while ( stepsOfAdditionStillRemaining(adderProperties) ){
    sum.push(processAddition(adderProperties));
  }
  return sum;
}

var stepsOfAdditionStillRemaining = function(runnerVals){
  return  runnerVals.runner1 ||
          runnerVals.runner2 ||
          runnerVals.carry;
}

var processAddition = function(runnerVals){
  digit = 0;
  for (var runner of runnerVals.runnerKeys){
    digit += addRunnerDigit(runnerVals, runner);
  }
  digit += runnerVals.carry;
  runnerVals.carry = Math.floor(digit/10);
  return digit%10;
}

var addRunnerDigit = function(runnerVals, runner){
  var digitValue = 0;
  if (runnerVals[runner]){
    var digitValue = runnerVals[runner].value;
    runnerVals[runner] = runnerVals[runner].next;
  }
  return digitValue;
}

// *****************************************************
var l1 = new LinkedList();
var l2 = new LinkedList();
var l1Array = [7,1,6];
var l2Array = [5,9,2];

for (var val of l1Array){
  l1.push(val);
}
for (var val of l2Array){
  l2.push(val);
}
console.log("list 1");
l1.viewList();
console.log("-----------------------------------------");
console.log("list 2");
l2.viewList();
console.log("-----------------------------------------");
console.log("sum of lists 1 and 2");
var sum = linkedListAdder(l1,l2)
sum.viewList();
