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
    @top = top
  end

  def pop
    return nil unless top
    pop_result = top.value
    @top = top.next
    pop_result
  end

  def push item
    item.next = top
    @top = item
  end

  def peek
    top.value
  end
end

class Queue
  attr_accessor :first, :last

  def initialize first=nil
    @first = first
    @last = first
  end

  def enqueue item
    if first
      last.next = item
      @last = item
    else
      @first = item
      @last = item
    end
  end

  def dequeue
    return nil unless first
    dequeued_item = first.value
    @first = first.next
    dequeued_item
  end

end

queue = Queue.new (Node.new 5)
queue.enqueue (Node.new 6)
queue.enqueue (Node.new 7)
p queue.dequeue
p queue.dequeue
p queue.dequeue
p queue.dequeue
# stack = Stack.new (Node.new 5)
# p stack.peek
# stack.push (Node.new 6)
# p stack.peek
# stack.push (Node.new 7)
# p stack.peek
# stack.push (Node.new 8)
# p stack.peek
# p stack.pop
# p stack.peek
# p stack.peek
# stack.pop
# p stack.peek