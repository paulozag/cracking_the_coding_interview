require 'pry'

class Linked_list
  attr_reader :head

  def initialize node=nil
    @head = node
  end

  def last_element
    runner = head
    while runner.next
      runner = runner.next
    end
    runner
  end

  def add_node node
    last_element.next = node
  end

  def add_node_by_value value
    add_node Node.new(value)
  end

  def view_list
    runner = @head
    while runner
      p runner.value
      runner = runner.next
    end
  end

  def length
    count = 0
    runner = head
    while runner
      count += 1
      runner = runner.next
    end
    count
  end

end

class Node
  attr_accessor :value, :next

  def initialize value=nil
    @value = value
    @next = nil
  end
end

x = Linked_list.new (Node.new(5))
x.view_list
x.add_node Node.new(4)
p x.last_element.value
x.add_node_by_value 3
x.view_list
p "length #{x.length}"
# !!(Node.new(2).next)
