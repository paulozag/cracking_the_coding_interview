var createHolder = function(){
  var value = null
  var setValue = function(payload){
    value = payload
  };
  var getValue = function(){
    return value
  }
  var holder = {}
  holder.setValue = setValue
  holder.getValue = getValue
  return holder
}

var x = new createHolder()
x.setValue(5)
console.log(x.getValue())