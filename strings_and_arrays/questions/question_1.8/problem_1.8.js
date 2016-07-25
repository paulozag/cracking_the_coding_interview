var isRotation = function(s1, s2){
  var rotationArray = []
  for (var offset = 0; offset < s1.length; offset++){
    rotationArray.push(rotateString(s2, offset))
  }
  var rotationString = rotationArray.join(' ')
  return rotationString.contains(s1)
}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var rotateString = function(str, offset){
  return str.slice(offset, str.length) + str.slice(0, offset)
}

var x = 'hello'
var y = 'elloh'
var z = 'lolhe'
console.log(isRotation(x,y))
console.log(isRotation(x,z))
