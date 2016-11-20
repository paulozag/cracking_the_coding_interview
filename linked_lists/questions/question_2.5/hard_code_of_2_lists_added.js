// ***************************************************
//  hardcodes for two lists
// ***************************************************
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
