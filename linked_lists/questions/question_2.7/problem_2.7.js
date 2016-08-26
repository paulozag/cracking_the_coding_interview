var isPalindrome = function(list){
  var listContents = []
  var runner = list.head
  while (runner){
    listContents.push(runner.value)
    runner = runner.next
  }
  while (listContents.length > 1){
    if (listContents.pop() != listContents.shift()){
      return false
    }
  }
  return true
}