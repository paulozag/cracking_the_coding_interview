

require 'pry-byebug'
require_relative './../../../custom_data_structures/ruby_data_structures/stack.rb'

class Stack

  def empty?
    !@top
  end

  def <<(value)
    self.push(value)
  end

  def last
    return nil unless @top
    runner = @top
    while (runner.next)
      runner = runner.next
    end
    runner
  end

end

class StackOfStacks

  attr_reader :stacks
  MAX_STACK_SIZE = 5

  def initialize value=nil

    @stacks = Stack.new(Stack.new)

    if value
      @stacks.top.value.push(value)
    end
  end

  def push item
    if @stacks.top  && @stacks.top.value.empty?
      @stacks << Stack.new(item)
    end
    if self.maxxed?(@stacks.top.value)
      @stacks << Stack.new(item)
    else
      @stacks.top.value.push(item)
    end
  end

  def pop
    return nil unless @stacks.any?
    result = @stacks.last.pop
    @stacks.pop if @stacks.last.empty?
    result
  end

  def stack_size
    @stacks.count
  end

  def pop_at index
    return nil if @stacks.size <= index
    pop_result = @stacks[index].pop
    rebalance(index)
    pop_result
  end

  def view_stack
    runner = @stacks.top
    while(runner)
      runner.value.view_stack
      runner = runner.next
    end
  end

  def maxxed?(stack)
    stack.length == MAX_STACK_SIZE
  end

  private
  def rebalance index
    return if index == ((@stacks.length) -1)
    # while @stacks[index + 1]
    #   @stacks[index].push(@stacks[index + 1].pop)
    #   index += 1
    # end

    while @stacks[index+1]
      if self.maxxed?(@stacks[index])
        index += 1
      else
        @stacks[index].push(@stacks[index+1].pop)
      end
    end



  end

end

stack = StackOfStacks.new

(1..25).each do  |value|
  stack.push value
end

stack.view_stack
# p "-------------------------------------------------"
# p "popping 3rd stack value: #{stack.pop_at(3)}"
# p "length of stack[3] #{stack.stacks[3].length}"
# p "-------------------------------------------------"
# p "popping 3rd stack value: #{stack.pop_at(3)}"
# p "length of stack[3] #{stack.stacks[3].length}"
# p "-------------------------------------------------"
# p "popping 3rd stack value: #{stack.pop_at(3)}"
# p "length of stack[3] #{stack.stacks[3].length}"



