require 'date'
class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next = nil
  end
end

class LinkedList
  attr_accessor :head

  def initialize(value=nil)
    @head = value ? Node.new(value) : nil
  end

  def peek
    @head ? @head.value : nil
  end

  def pop
    return nil unless @head
    return_value = @head.value
    @head = @head.next
    return_value
  end

  def push(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
  end
end

class Animal
  attr_accessor :name, :type, :date_added

  def initialize(name, type)
    @name = name
    @type = type
    @date_added = nil
  end
end



class AnimalShelter
  attr_accessor :dogs, :cats

  def initialize
    @dogs = LinkedList.new
    @cats = LinkedList.new
  end

  def enqueue(animal)
    animal.date_added = DateTime.now
    animal.type == 'dog' ? @dogs.push(animal) : @cats.push(animal)
  end

  def dequeue_dog
    @dogs.pop
  end

  def dequeue_cat
    @cats.pop
  end

  def dequeue_any
    dog = @dogs.peek
    cat = @cats.peek
    if dog && cat
      dog.date_added > cat.date_added ? @dogs.pop : @cats.pop
    else
      @dogs.pop || @cats.pop
    end
  end

end

a = LinkedList.new(5)
fido = Animal.new('fido', 'dog')
rex = Animal.new('rex', 'dog')
fluffy = Animal.new('fluffy', 'cat')
bandit = Animal.new('bandit', 'cat')

spca = AnimalShelter.new
spca.enqueue(fido)
spca.enqueue(fluffy)
spca.enqueue(bandit)
spca.enqueue(rex)
# p spca.dogs.peek
# p spca.dogs.peek.date_added > spca.cats.peek.date_added
p spca.dequeue_any
p spca.dequeue_any
p spca.dequeue_dog
p spca.dequeue_any
p spca.dequeue_any

