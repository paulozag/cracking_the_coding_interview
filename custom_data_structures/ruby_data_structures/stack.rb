require_relative 'node'

class Stack

  attr_accessor :top

  def initialize value=nil
    if value
      @top = Node.new value
    end
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

  def length
    count = 0
    runner = @top
    while(runner)
      count += 1
      runner = runner.next
    end
    count
  end

  def size
    self.length
  end

  def view_stack
    runner = @top
    while(runner)
      p runner.value
      runner = runner.next
    end
  end
end





