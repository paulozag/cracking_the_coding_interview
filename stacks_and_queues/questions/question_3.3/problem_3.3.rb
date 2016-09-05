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

  attr_reader :stacks

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

  def pop_at index
    return nil if @stacks.size <= index
    pop_result = @stacks[index].pop
    rebalance index
    pop_result
  end

  private
  def rebalance index
    return if index == ((@stacks.length) -1)
    while @stacks[index + 1]
      @stacks[index].push @stacks[index + 1].pop
      index += 1
    end
  end

end

stack = StackOfStacks.new 1
(2..38).to_a.each {|num| stack.push num}
# p stack.stacks.last.count
stack.pop_at 2
stack.stacks.each {|stack| p stack.count}
