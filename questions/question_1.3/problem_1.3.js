






var histo = function(obj){
  switch (typeof obj){
    case 'string':
      return histo_string(obj)
    default:
      return -1
  };


};

var histo_string = function(word){
  var hash = {}
  for (index = 0; index < word.length; index++){
    if (hash[word[index]]){
      hash[word[index]]++
    } else {
      hash[word[index]] = 1
    }
  }
  return hash
}

console.log(histo('hello'));