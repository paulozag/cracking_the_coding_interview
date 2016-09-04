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
    @count -= 1
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

  def empty?
    @count == 0
  end
end

class StackOfStacks

  def initialize value
    @stacks = [Stack.new(value)]
    @last_stack = @stacks.first
  end

  def push item
    if @stacks.empty?
      @stacks << Stack.new(item)
      @last_stack = @stacks.last
    end
    if @last_stack.maxxed?
      @stacks << Stack.new(item)
      @last_stack = @stacks.last
    else
      @last_stack.push item
    end
  end

  def pop
    return nil unless @stacks.any?
    result = @last_stack.pop
    if @last_stack.empty?
      @stacks.pop
      @last_stack = @stacks.last
    end
    result
  end

  def stack_size
    @stacks.count
  end

end

stack = StackOfStacks.new 1
# p stack.maxxed?
stack.push 2
stack.push 3
stack.push 4
stack.push 5
# p stack.maxxed?
p stack.stack_size
stack.push 6
p stack.stack_size
p stack.pop
p stack.pop
p stack.pop
p stack.pop
p stack.pop
p stack.pop
p stack.pop
stack.push 1
p stack.pop