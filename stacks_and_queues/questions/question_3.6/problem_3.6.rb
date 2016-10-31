# unsorted_stack
# temp_stack
# current_min
# stack_size

require 'pry'

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
  attr_reader :unsorted_stack, :temp_stack, :stack_size, :perm_stack_count

  def initialize unsorted_stack
    @unsorted_stack     = unsorted_stack
    @temp_stack         = Stack.new
    @stack_size         = get_stack_count
    @perm_stack_count   = 0
  end

  def sort
    until @perm_stack_count == @stack_size
      push_min_element_to_unsorted_stack
      roll_back_unsorted_stack
    end
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

  def sort_stack
    until @perm_stack_count == @stack_size
      roll_back_unsorted_stack
      push_min_element_to_unsorted_stack
    end
  end

  def roll_back_unsorted_stack
    (@stack_size - @perm_stack_count).times{@unsorted_stack.push(@temp_stack.pop)}
  end

  def push_min_element_to_unsorted_stack
    # binding.pry
    min_element = @unsorted_stack.pop
    unsorted_element_count = (@stack_size - @perm_stack_count -1)
    unsorted_element_count.times do
      next_element = @unsorted_stack.pop
      if next_element < min_element
        @temp_stack.push(min_element)
        min_element = next_element
      else
        @temp_stack.push(next_element)
      end
    end
    @perm_stack_count +=1
    @unsorted_stack.push(min_element)
  end

  def get_stack_count
    count   = 0
    while(@unsorted_stack.peek)
      @temp_stack.push(@unsorted_stack.pop)
      count   +=  1
    end
    while(@temp_stack.peek)
      @unsorted_stack.push(@temp_stack.pop)
    end
    count
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
p s_s.stack_size
p s_s.perm_stack_count