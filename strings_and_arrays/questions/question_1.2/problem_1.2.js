var reverse = function(word){
  var result = [];
  var word_length = word.length;

  for (var index in word){
    var rev_array_index = word_length - 1 - index;
    result.push(word[rev_array_index]);
  }

  return result.join('')
};

console.log(reverse('hello'))