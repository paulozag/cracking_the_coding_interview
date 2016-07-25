var generateMatrix = function(size){
  var matrix = []
  for (var i = 0; i < size; i++){
    var row = []
    for (var j = 0; j < size; j++){
      row.push(  Math.floor(  (Math.random()*10)  )  )
    };
    matrix.push(row)
  };
  return matrix
};

var displayMatrix = function(matrix){
  for (row in matrix){
    console.log(mat[row].join(''))
  }
}

var zeroOut = function(matrix){
  var length = matrix.length
  var rowFlags = []
  var colFlags = []
  for (var i=0; i<length; i++){ rowFlags.push(false); colFlags.push(false) }


  setRowAndColFlags(matrix, rowFlags, colFlags)
  processRowAndColFlags(matrix, rowFlags, colFlags)

  console.log('rowFlags: ' + rowFlags)
  console.log('colFlags: ' + colFlags)

}

var setRowAndColFlags = function(arr, rowFlags, colFlags){
  var length = arr.length
  for (var row_index = 0; row_index<length; row_index++){
    for (var col_index = 0; col_index<length; col_index++){
      if (arr[row_index][col_index] == 0){
        rowFlags[row_index] = true
        colFlags[col_index] = true
      }
    }
  }
}

var processRowAndColFlags = function(matrix, rowFlags, colFlags){
  for (var index = 0; index<rowFlags.length; index++){
    if (rowFlags[index]){
      transformRow(matrix, index)
    }
    if (colFlags[index]){
      transformCol(matrix, index)
    }
  }
}

var transformRow = function(matrix, row){
  for (var col = 0; col<matrix.length; col++){
    matrix[row][col] = 0
  }
}

var transformCol = function(matrix, col){
  for (var index = 0; index<matrix.length; index++){
    matrix[index][col] = 0;
  }
}


var mat = generateMatrix(8)
displayMatrix(mat)
console.log('XXXXXXXXXXXXXXXX')
zeroOut(mat)
displayMatrix(mat)
