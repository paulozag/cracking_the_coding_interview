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
    if top
      @top = Node.new top
      @top.prev_min = @top.value
      @min = top
    end

  end

  def pop
    return nil unless @top
    pop_result = @top.value
    @min = @top.prev_min if @top.value < @top.prev_min
    @top = @top.next
    @min = nil unless @top
    pop_result
  end

  def push item
    item = Node.new(item)
    item.next = @top

    if @top
      item.prev_min = @min
      @min = item.value if item.value < @min
    else
      item.prev_min = item.value
      @min = item.value
    end
    @top = item
  end

  def peek
    @top.value
  end

  def min
    return nil unless @top
    @min
  end
end

