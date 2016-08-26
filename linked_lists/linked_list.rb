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

def add_two_lists list1, list2
  sum = Linked_list.new
  runner1 = list1.head
  runner2 = list2.head
  remainder = 0


  while runner1 || runner2 || (remainder > 0)
    value_of_column = (runner1.value || 0) + (runner2.value || 0) + remainder
    sum.add_node (Node.new(value_of_column%10))
    remainder = value_of_column/10 > 0 ? 1 : 0
    runner1 = runner1.next
    runner2 = runner2.next
  end

  sum.view_list
end

def add_two_lists_forward_order list1, list2

  arabic1 = (arabic_value_of list1.head).to_i
  arabic2 = (arabic_value_of list2.head).to_i

  sum = arabic1 + arabic2
  arabic_to_forward_linked_list sum
end

def arabic_value_of head
  if head.next
    return head.value.to_s + (arabic_value_of head.next)
  end
  return head.value.to_s
end

def arabic_to_forward_linked_list num
  answer = Linked_list.new
  process_arabic_to_forward_ll answer, num
  answer
end

def process_arabic_to_forward_ll list, num
  if num/10 > 0
    process_arabic_to_forward_ll list, num/10
  end
  list.add_node(Node.new(num%10))
end



# x = Linked_list.new
# list = [1,2,3,4,5,6,7]
# list.each {|val| x.add_node_by_value val }
# head_of_circle = Node.new(8)
# x.add_node head_of_circle
# [9,10,11,12,13].each {|val| x.add_node(Node.new(val))}
# bad_node = Node.new(14)
# x.add_node bad_node
# bad_node.next = head_of_circle


# list = [5,9,2]
# y = Linked_list.new
# list.each {|val| y.add_node_by_value val }
# x.view_list
# p (x.kth_to_last 2).value
# x.view_list
p 'XXXXXXXXXXXXXXXXXXXXXXXX'
# y = partition_linked_list x,5
# y.view_list
# p 'XXXXXXXXXXXXXXXXXXXXXXXX'
# add_two_lists_forward_order x,y
# p 'XXXXXXXXXXXXXXXXXXXXXXXX'
# a = add_two_lists_forward_order x,y
# a.view_list


