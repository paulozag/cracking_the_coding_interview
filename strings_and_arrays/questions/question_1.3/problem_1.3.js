var isPermutation = function(word1, word2){
  var histo1 = histoString(word1);
  var histo2 = histoString(word2);
  for(key in histo1){
    if (histo1[key] != histo2[key]){
      return false;
    }
  }
  return Object.keys(histo1).length === Object.keys(histo2).length;
}

var histoString = function(word){
  var hash = {};
  for(var character of word){
    if (hash[character]){
      hash[character]++;
    } else {
      hash[character] = 1;
    }
  }
  return hash;
}

