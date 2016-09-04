class Node
  attr_accessor :value, :next

  def initialize value=nil
    @value = value
    @next = nil
  end
end

class Stack

  attr_accessor :top, :count

  def initialize top, stack_max=5
    @top = Node.new top
    @count = 1
    @stack_max = stack_max
  end

  def pop
    return nil unless top
    pop_result = top.value
    @top = top.next
    count -= 1
    pop_result
  end

  def push item
    item = Node.new(item)
    item.next = top
    @top = item
    @count += 1
  end

  def peek
    top.value
  end

  def maxxed?
    @count >= @stack_max
  end
end

class StackOfStacks

  def initialize value
    @stacks = [Stack.new(value)]
    @last_stack = @stacks.first
  end

  def push item

  end

end

stack = Stack.new 1
p stack.maxxed?
stack.push 2
stack.push 3
stack.push 4
stack.push 5
p stack.maxxed?