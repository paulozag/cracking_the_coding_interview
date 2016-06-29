var find_and_replace = function(args){
  var source = args.source.split('');
  var expr1 = args.expr1;
  var expr2 = args.expr2;
  var new_expression = [];
  var last_element = ''
  while (source.length > 0){
    last_element = source.pop();
    if (last_element == expr1){ last_element = expr2};
    new_expression.unshift(last_element);
  }
  return new_expression.join('')
}

arguments = {'source': 'this is a test', 'expr1': ' ', 'expr2': '%20'}
console.log(find_and_replace(arguments))