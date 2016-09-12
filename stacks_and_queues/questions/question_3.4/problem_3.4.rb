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

class Disc
  attr_reader :size

  def initialize size
    @size = size
  end
end

class Tower
  attr_reader :tower_1

  def initialize num_discs=9
    @tower_1 = Stack.new
    @tower_2 = Stack.new
    @tower_3 = Stack.new
    @discs = []
    create_discs num_discs
    load_first_tower_with_discs
  end


  private
  def create_discs num_discs
    num_discs.times {|size| @discs << Disc.new(size)}
  end

  def load_first_tower_with_discs
    @discs.reverse.each {|disc| @tower_1.push disc}
  end


end


tower = Tower.new
