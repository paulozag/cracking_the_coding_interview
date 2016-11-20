var uniqueChars = function(word){
  var histo = {}
  for (var index in word){
    if (histo[word[index]]){
      return false;
    } else {
      histo[word[index]] = true;
    }
  }
  return true;
};

console.log(uniqueChars('hello'));
console.log(uniqueChars('helro'));