require 'pry'

class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

class BinaryTree
  attr_accessor :root

  def initialize
    @root = nil
    @traversal_queue = []
  end

  def insert(value)
    if self.root
      @traversal_queue = [self.root]
      while @traversal_queue.any?
        # binding.pry
        current_node = @traversal_queue.shift
        # binding.pry
        break if successful_insertion?(current_node, value)
        # binding.pry
      end
    else
      self.root = Node.new(value)
    end
  end

  def print_tree
    unless self.root
      p 'tree is empty'
    end
    @traversal_queue = [self.root]
    # binding.pry
    while @traversal_queue.any?
      # binding.pry
      current_node = @traversal_queue.shift
      p current_node.value
      @traversal_queue.unshift(current_node.left) if current_node.left
      @traversal_queue.unshift(current_node.right) if current_node.right
    end
  end

  private
  def successful_insertion?(current_node, value)
    success_flag = false
    # binding.pry
    if current_node.left && current_node.right
      @traversal_queue.unshift current_node.left
      @traversal_queue.unshift current_node.right
      # binding.pry
    else
      new_node = Node.new(value)
      if !current_node.left
        current_node.left = new_node
      else
        current_node.right = new_node
      end
      success_flag = true
    end
    # binding.pry
    success_flag
  end
end

b_t = BinaryTree.new
b_t.insert(5)
b_t.insert(4)
b_t.insert(3)
b_t.insert(2)
b_t.insert(1)
p b_t

b_t.print_tree