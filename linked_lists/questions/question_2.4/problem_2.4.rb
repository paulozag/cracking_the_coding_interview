# Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

def partition_linked_list list, target
  small_list = Linked_list.new
  big_list = Linked_list.new
  runner = list.head

  while runner
    next_element = runner.next
    runner.next = nil
    runner.value < target ? (small_list.add_node runner) : (big_list.add_node runner)
    runner = next_element
  end



  small_list.last_element.next =  big_list.head
  small_list
end