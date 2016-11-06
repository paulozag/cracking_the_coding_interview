require_relative 'node'
require 'pry-byebug'
# currently refactoring, most likely broken
class Linked_list
  attr_accessor :head, :tail

  def initialize(value=nil)
    @head = Node.new(value) if value
    @tail = @head
  end

  def enqueue(value)
    enqueue_node(Node.new(value))
  end

  def enqueue_node(node)
    if @head
      node.next = @head
      @head = node
    else
      @head = node
      @tail = node
    end
  end

  def push(value)
    push_node(Node.new(value))
  end

  def push_node node
    if @tail
      @tail.next = node
      @tail = node
    else
      @head = node
      @tail = node
    end
  end

  def pop
    return nil unless @tail
    pop_value = @tail.value
    if @head == @tail
      @head = nil
      @tail = nil
    else
      set_tails_parent_to_tail
    end
    pop_value
  end

  def dequeue
    return nil unless @head
    dequeue_value = @head.value
    @tail = nil unless head.next
    @head = @head.next
    dequeue_value
  end

  def set_tails_parent_to_tail
    # binding.pry
    return unless @head.next
    runner = @head.next
    parent = @head
    while runner.next
      runner = runner.next
      parent = parent.next
    end
    @tail = parent
    @tail.next = nil
  end

  def peek
    return nil unless @head
    @head.value
  end

  def peek_tail
    return nil unless @tail
    @tail.value
  end

  def view_list
    p 'list is empty' unless @head
    runner = @head
    while runner
      p runner.value
      runner = runner.next
    end
  end

  def length
    count = 0
    runner = head
    while runner
      count += 1
      runner = runner.next
    end
    count
  end

  def contains_value?(target)
    runner = @head
    while runner
      return true if runner.value == target
      runner = runner.next
    end
    false
  end

  def add_node_by_value value
    add_node Node.new(value)
  end
end

