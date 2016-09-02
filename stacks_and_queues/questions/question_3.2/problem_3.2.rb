class Node
  attr_accessor :value, :next, :prev_min

  def initialize value=nil
    @value = value
    @next = nil
    @prev_min = nil
  end
end

class Stack

  attr_accessor :top

  def initialize top=nil
    @top = Node.new top
    @top.prev_min = @top.value
    @min = top
  end

  def pop
    return nil unless top
    p "popping: #{top.value}"
    pop_result = top.value
    @min = top.prev_min if top.value < top.prev_min
    @top = top.next
    pop_result
  end

  def push item
    item = Node.new(item)
    item.next = top

    if top
      item.prev_min = @min
      @min = item.value if item.value < @min
    else
      item.prev_min = item.value
      @min = item.value
    end



    # item.prev_min = top ? @min : item.value
    @top = item
    # @min = @top.value if @top.value < @min
  end

  def peek
    top.value
  end

  def min
    return nil unless @top
    @min
  end
end


stack = Stack.new 1
stack.push 3
stack.push 4
p stack.min
stack.push -2
p stack.min
stack.pop
p stack.min
stack.pop
stack.pop
stack.pop
p stack.min
stack.push 4
p stack.min
