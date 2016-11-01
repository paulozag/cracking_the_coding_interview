var Node = function(value){
  this.value = value
  this.next = null
}

var LinkedList = function(){
  this.head = null
}

LinkedList.prototype.peek = function(){
  return this.head ? this.head.value : null
}

LinkedList.prototype.pop = function(){
  if(!this.head){
    return null
  }
  popped_item = this.head.value
  this.head = this.head.next
  return popped_item
}

LinkedList.prototype.push = function(value){
  var newNode = new Node(value)
  newNode.next = this.head
  this.head = newNode
}

var Animal = function(name, type){
  this.name = name
  this.type = type
  this.timeAdded = null
}

var AnimalShelter = function(){
  this.dogs = new LinkedList()
  this.cats = new LinkedList()
}

AnimalShelter.prototype.enqueue = function(animal){
  // -------------------------------------------------------
  // because i am using the Date.now() function to timestamp
  // the addition of the new animal, i need to ensure that
  // the timestamps are all unique - this introduces a 1ms
  // pause between rapid enquees
  var pause = Date.now()
  while(pause == Date.now()){}
  // -------------------------------------------------------
  animal.timeAdded = Date.now()
  if(animal.type == 'dog'){
    this.dogs.push(animal)
  } else{
    this.cats.push(animal)
  }
}

AnimalShelter.prototype.dequeueDog = function(){
  return this.dogs.peek() ? this.dogs.pop() : null
}

AnimalShelter.prototype.dequeueCat = function(){
  return this.cats.peek() ? this.cats.pop() : null
}

AnimalShelter.prototype.dequeueAny = function(){
  var dog = this.dogs.peek()
  var cat = this.cats.peek()
  if(dog && cat){
    return dog.timeAdded > cat.timeAdded ? this.dogs.pop() : this.cats.pop()
  }
  return this.dogs.pop() || this.cats.pop()
}


var fido = new Animal('fido', 'dog')
var rex = new Animal('rex', 'dog')
var bandit = new Animal('bandit', 'cat')
var fluffy = new Animal('fluffy', 'cat')

aS = new AnimalShelter()
aS.enqueue(fido)
aS.enqueue(bandit)
aS.enqueue(fluffy)
aS.enqueue(rex)
// console.log(aS.dequeueAny())
// console.log(aS.dequeueAny())
// console.log(aS.dequeueAny())

console.log(aS.dogs.peek().timeAdded)
console.log(aS.cats.peek().timeAdded)
console.log(aS.dogs.peek().timeAdded > aS.cats.peek().timeAdded)
console.log(aS.dequeueAny())
console.log(aS.dequeueAny())
console.log(aS.dequeueAny())
console.log(aS.dequeueAny())
console.log(aS.dequeueAny())
