require_relative 'node'

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