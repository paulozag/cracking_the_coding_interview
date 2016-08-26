var headOfCircularList = function(list){
  var histo = {};
  var runner = list.head
  var __next_obj_id = 1;
  var objectID = function(obj){
    if (obj==null){return null}
    if (obj.__obj_id==null){obj.__obj_id==__next_obj_id++}
    return obj.__obj_id
  }

  while (runner){
    var id = objectID(runner)
    if (histo[id]){
      return runner
    } else {
      histo[id] = true
    }
    runner = runner.next
  }
}

