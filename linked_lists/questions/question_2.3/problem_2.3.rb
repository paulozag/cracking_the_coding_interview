require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def delete_node(node)
    node.value = node.next.value
    node.next = node.next.next
  end

end


