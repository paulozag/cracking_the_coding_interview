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
    @top = Node.new top
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
    top.value
  end
end

class MyQueue

  def initialize
    @main_stack     = Stack.new
    @transfer_stack = Stack.new
  end

  def enqueue value
    while @main_stack.peek
      @transfer_stack.push(@main_stack.pop)
    end
    @transfer_stack.push value
    while @transfer_stack.peek
      @main_stack.push(@transfer_stack.pop)
    end
  end

  def dequeue
    @main_stack.pop
  end

  def peek
    @main_stack.peek
  end
end


mq = MyQueue.new
[1,2,3,4,5].each { |val| mq.enqueue val }
while mq.peek
  p mq.dequeue
end
p mq.dequeue