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

  def view_stack
    runner = @top
    while(runner)
      p runner.value
      runner = runner.next
    end
  end
end

x = Stack.new
x.push 1
x.push 2
x.push 3
x.push 4


y = Stack.new(4)
y.push 1
y.push 2
y.push 3

p "contents of x"
x.view_stack
p "_________________________"
y.view_stack
