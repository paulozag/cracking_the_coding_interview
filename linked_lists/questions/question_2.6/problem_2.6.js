var headOfCircularList = function(list){
  var histo = {};
  var runner = list.head

  while (runner){
    if (histo[runner.id]){
      return runner
    } else {
      histo[runner.id] = true
    }
    runner = runner.next
  }
}

