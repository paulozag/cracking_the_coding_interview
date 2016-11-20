// I'm not running this in a browser.  just running it in node from my terminal.  I can't figure out how to 'include' the constructor and prototype functions in this file.
// i'll copy and paste this code into the linked_list.js file until I learn the proper include syntax
LinkedList.prototype.removeDuplicates = function(){
  var duplicatesArray = []
  var runner = this.head
  while (runner){
    // debugger
    if (duplicatesArray.includes(runner.value)){
      this.deleteNode(runner)
      if (!runner.next){
        break;
      }
    } else {
      duplicatesArray.push(runner.value)
      runner = runner.next
    }
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

var list = new LinkedList()
for (var val of [1,2,3,2,1,3,5,6,7,5,4,2,9]){
  list.push(val)
}
list.viewList()
console.log('---------------------------------------------')
list.removeDuplicates()
console.log('---------------------------------------------')
list.viewList()
