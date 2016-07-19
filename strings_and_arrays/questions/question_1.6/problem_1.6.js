
var rotateImage = function(arr){
  var length = arr.length
  var startIndex = 0
  var endIndex = length - 1

   while(endIndex - startIndex > 1){
    rotateShell(arr, startIndex, endIndex)
    startIndex++
    endIndex--
  }
};

var rotateShell = function(array, first, last){

  for (var index = first; index < last; index++){
    // rotates each row elemnt by 90 degrees for all elements in the outer 'shell' of the array
    var temp                      = array[first][first + index]
    array[first][first +index]    = array[last - index][first]
    array[last - index][first]    = array[last][last - index]
    array[last][last - index]     = array[first + index][last]
    array[first + index][last]    = temp
  };
};
// helper/testing methods

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
    if (arr[i].length != depth){
      return false;
    }
  }
  return true;
};

var displayMatrix = function(arr){
  for (i in arr){
    console.log(arr[i].join(' '));
  };
};

mat = createNByNMatrix(5)

displayMatrix(mat)
console.log('XXXXXXXXXXXXXXXXXXXXXXXXX')
rotateImage(mat)
displayMatrix(mat)