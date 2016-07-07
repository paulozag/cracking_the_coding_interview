var createNByNMatrix = function(size){
  var arr = []
  for (var i = 1; i <= size; i++){
    arrElement = [];
    for (var j = 1; j <= size; j++){
      arrElement.push (i + ':' + j)
    }
    arr.push(arrElement)
  }
  return arr
};

var isValidNByN = function(arr){
  var depth = arr.length
  for (var i = 0; i < arr.length; i++){
    // console.log(arr[i].length + '   ' + depth)
    if (arr[i].length != depth){
      return false;
    }
  }
  return true;
};

var displayMatrix = function(arr){
  for (i in arr){
    console.log(arr[i].join(' '));
  }
};

mat = createNByNMatrix(5)
// console.log(mat[1].length)
console.log(isValidNByN(mat))
displayMatrix(mat)