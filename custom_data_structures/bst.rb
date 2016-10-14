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

  def remove(target)
    if @root.value == target
      unless @root.left || @root.right
        @root.value = nil
        return target
      end

      if @root.left
        @root.value = find_and_delete_max_child(@root.left, @root)
      else
        @root.value = find_and_delete_min_child(@root.right, @root)
      end

      return target
    end
    if target < root.value
      root.left ? delete_target(target, root.left, root) : (return nil)
    else
      root.right ? delete_target(target, root.right, root) : (return nil)
    end
  end



  private
  def delete_target(target, root, parent)
    if target == root.value
      delete_node(root, parent)
      return target
    elsif target < root.value
      root.left ? delete_target(target, root.left, root) : (return nil)
    elsif target > root.value
      root.right ? delete_target(target, root.right, root) : (return nil)
    end
  end

  def delete_node(node_to_delete, parent)
    return_value = node_to_delete.value
    case child_count(node_to_delete)
    when 0, 1
      if parent.left == node_to_delete
        parent.left = nil
      else
        parent.right = nil
      end
    when 2
      node_to_delete.value = find_and_delete_min_child(node_to_delete.right, node_to_delete)
    end
    return_value
  end

  def find_and_delete_min_child(root, parent)
    unless root.left
      parent.left = nil
      return root.value
    end
    find_and_delete_min_child(root.left, root)
  end

  def find_and_delete_max_child(root, parent)
    unless root.right
      parent.right = nil
      return root.value
    end
    find_and_delete_max_child(root.right, root)
  end

  def child_count(node)
    return 2 if (node.left && node.right)
    return 1 if (node.left || node.right)
    0
  end
end

a = BinarySearchTree.new(6)

a.insert 2
a.insert 8
a.insert 1
a.insert 3
a.insert 7
a.insert 9

a.print_tree
p '************************'
p a.remove(7)
p '************************'
a.print_tree
p "new root: #{a.root.value}"
