var string_compressor = function(expression){
  var prev_char = ''
  var new_expression = [];
  for (index in expression) {
    if ( expression[index] == prev_char){
      new_expression[new_expression.length - 1]++
    } else {
      new_expression.push(expression[index])
      new_expression.push(1)
      prev_char = expression[index]
    }
  }
  console.log('new_expression length:' + new_expression.length)
  console.log('orig expression length:' + expression.length)

  if (new_expression.length < expression.length){
    return new_expression.join('');
  } else {
    return expression
  }
};

console.log(string_compressor('aaaabbbbbbbyyygfguuuuuuu'))