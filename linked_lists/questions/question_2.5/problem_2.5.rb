def add_two_lists list1, list2
  sum = LinkedList.new
  runner1 = list1.head
  runner2 = list2.head
  remainder = 0


  while runner1 || runner2
    value_of_column = (runner1.value || 0) + (runner2.value || 0) + remainder
    sum.addNode
  end
end