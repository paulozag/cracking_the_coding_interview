require_relative 'tree_node'

class BinarySearchTree
  attr_accessor :root

  def initialize(value)
    @root = TreeNode.new(value)
  end

  def insert(value, root=@root)
    if value < root.value
      root.left   ? insert(value, root.left)  : root.left = TreeNode.new(value)
    else
      root.right  ? insert(value, root.right) : root.right = TreeNode.new(value)
    end
  end

  def search(target, root=@root)
    return true if root.value == target
    if target < root.value
      root.left ? search(target, root.left) : (return false)
    else
      root.right ? search(target, root.right) : (return false)
    end
  end

  def print_tree(root=@root)
    print_tree(root.left) if root.left
    p root.value
    print_tree(root.right) if root.right
  end
end

a = BinarySearchTree.new(5)
# p a.root.value
a.insert(3)
a.insert(6)
# a.print_tree
a.insert 9
a.insert 11
a.insert 0
a.print_tree
