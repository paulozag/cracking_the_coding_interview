require 'pry'

class Linked_list
  attr_accessor :head

  def initialize node=nil
    @head = node
    @kth = nil
  end

  def last_element
    return head unless head.next
    runner = self.head
    while runner.next
      runner = runner.next
    end
    runner
  end

  def add_node node
    if self.head
      last_element.next = node
    else
      self.head = node
    end
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

  def remove_node target
    if target == head
      @head = head.next
      return
    end
    previous = head
    runner = head.next
    while runner
      if runner == target
        previous.next = runner.next
        return runner
      end
      previous = runner
      runner = runner.next
    end
    nil
  end

  def contains_node? node
    runner = head
    while runner
      return true if runner == node
      runner = runner.next
    end
    nil
  end

  def contains_value? target
    runner = head
    while runner
      return true if runner.value == target
      runner = runner.next
    end
    nil
  end

  def kth_to_last k
    find_kth head, k
    @kth
  end

  def find_kth head, k
    return 0 unless head
    result = (find_kth head.next, k) + 1
    if result == k
      @kth = head
    end
    return result
  end


  private
end

class Node
  attr_accessor :value, :next

  def initialize value=nil
    @value = value
    @next = nil
  end
end

def partition_linked_list list, target
  small_list = Linked_list.new
  big_list = Linked_list.new
  runner = list.head

  while runner
    next_element = runner.next
    runner.next = nil
    runner.value < target ? (small_list.add_node runner) : (big_list.add_node runner)
    runner = next_element
  end



  small_list.last_element.next =  big_list.head
  small_list
end



x = Linked_list.new(Node.new(0))
list = [0,1,6,8,1,5,8,3,2,3,4]
list.each {|val| x.add_node_by_value val }
# x.view_list
# p (x.kth_to_last 2).value
x.view_list
p 'XXXXXXXXXXXXXXXXXXXXXXXX'
y = partition_linked_list x,5
y.view_list

