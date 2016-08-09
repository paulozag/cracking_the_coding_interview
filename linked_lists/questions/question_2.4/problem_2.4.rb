# Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

def partition_linked_list list, target
  small_list = Linked_list.new
  big_list = Linked_list.new
  head = list
  while head
    head.value < target ? (small_list.add_node head) : (big_list.add_node head)
    head = head.next
  end
  small_list.add_node big_list
  small_list
end