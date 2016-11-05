require_relative 'node'

class Queue
  attr_accessor :first, :last

  def initialize
    @first  = nil
    @last   = nil
  end

  def enqueue value
    new_node = Node.new(value)
    if self.any?
      @last.next = new_node
      @last = new_node
    else
      @first = new_node
      @last = new_node
    end
  end

  def dequeue
    return nil if self.empty?
    dequeued_item = first.value
    if @first == @last
      @first = nil
      @last = nil
    else
      @first = first.next
    end
    dequeued_item
  end

  def empty?
    !@first
  end

  def any?
    !!@first
  end
end

# a = Queue.new
# a.enqueue 4
# a.enqueue 5
# p a.dequeue
# p a.dequeue
# p a.dequeue
# a.enqueue 4
# p a.dequeue