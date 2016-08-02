require 'pry'

class Linked_list
  attr_reader :head

  def initialize node=nil
    @head = node
    @kth = nil
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
      p "Made assignment"
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

x = Linked_list.new(Node.new(0))
list = [0,1,2,3,4]
list.each {|val| x.add_node_by_value val }
# x.view_list
p (x.kth_to_last 2).value


