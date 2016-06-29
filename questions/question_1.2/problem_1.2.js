var reverse = function(word){
  var result = [];
  var word_length = word.length

  for (var index = 0; index < word_length; index++){
    var rev_array_index = word_length - 1 - index
    result[rev_array_index] = word[index]
  }

  return result.join('')
};

console.log(reverse('hello'))