# unsorted_stack
# temp_stack
# current_min
# stack_size

class Node
  attr_accessor :value, :next

  def initialize value=nil
    @value = value
    @next = nil
  end
end

class Stack

  attr_accessor :top

  def initialize top=nil
    @top = top ? Node.new(top) : top
  end

  def pop
    return nil unless top
    pop_result = top.value
    @top = top.next
    pop_result
  end

  def push item
    item = Node.new(item)
    item.next = top
    @top = item
  end

  def peek
    @top ? @top.value : nil
  end
end

class StackSort
  attr_reader :unsorted_stack, :temp_stack

  def initialize unsorted_stack
    @unsorted_stack     = unsorted_stack
    @temp_stack         = Stack.new
    @stack_size         = 0
    @perm_stack_count   = 0
  end

  def sort
    set_first_element
  end

  private
  def set_first_element
    min = @unsorted_stack.pop
    @stack_size += 1
    while @unsorted_stack.peek
      current_element = @unsorted_stack.pop
      @stack_size +=  1
      if min > current_element
        @temp_stack.push(min)
        min = current_element
      else
        @temp_stack.push(current_element)
      end
    end
    @unsorted_stack.push(min)
    @perm_stack_count +=  1
  end
end

us = Stack.new

[2,5,1,3,4].each { |val| us.push(val) }
p us
p "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
s_s = StackSort.new(us)
# p s_s.unsorted_stack
s_s.sort
p s_s.temp_stack
p s_s.unsorted_stack