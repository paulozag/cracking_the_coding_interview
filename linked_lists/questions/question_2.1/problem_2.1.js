// I'm not running this in a browser.  just running it in node from my terminal.  I can't figure out how to 'include' the constructor and prototype functions in this file.
// i'll copy and paste this code into the linked_list.js file until I learn the proper include syntax
LinkedList.prototype.removeDuplicates = function(){
  var duplicatesHash = {}
  runner = this.head
  while (runner){
    if (duplicatesHash[runner.value]){
      this.removeNode(runner)
    } else {
      duplicatesHash[runner.value] = true
    }
    runner = runner.next
  }
}

LinkedList.prototype.removeDuplicatesNoBuffer = function(){
  var current = this.head
  while (current){
    findAndRemoveDups (current, this)
    current = current.next
  }
}

var findAndRemoveDups = function(targetNode, classInstance){
  var runner = targetNode.next
  while (runner){
    if (runner.value == targetNode.value){ classInstance.removeNode(runner)}
    runner = runner.next
  }
}