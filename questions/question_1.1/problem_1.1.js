var uniqueChars = function(word){
  var histo = {}
  for (index = 0; index < word.length; index++){
    if (histo[word[index]]){
      histo[word[index]]++
    } else {
      histo[word[index]] = 1
    }
  }

  for (property in histo){
    if(histo[property] > 1){
      return false;
    }
    return true;
  }
};

console.log(uniqueChars('hello'));
console.log(uniqueChars('helro'));