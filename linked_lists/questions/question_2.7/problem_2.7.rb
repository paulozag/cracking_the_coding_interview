require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

# many ways to implement this.  without creating a time complexity of N^2, I can't
# think of a way of implementing this without sacrificing some space complexity.
# A recursive algorithm would result in N space complexity, as would a traditional
# collection.  I chose the following solution because it minimizes the space complexity
# to 1/2 N.  I know the differece in space complexity in still in the order N, but I
# thought this solution was the most interesting.

class LinkedList

  def palindrome?
    return true unless @head # is an empty list a palindrome?
    node_array, tortoise = build_node_array
    return true if node_array.count == 1
    first_half_mirror_of_last_half?(node_array, tortoise)
  end

  private
  def first_half_mirror_of_last_half?(node_array, tortoise)
    while tortoise
      return false unless node_array.pop.value == tortoise.value
      tortoise = tortoise.next
    end
    true
  end

  def build_node_array
    tortoise    = @head
    rabbit      = @head
    node_array  = [@head]

    while rabbit && rabbit.next
      tortoise  = tortoise.next
      rabbit    = rabbit.next.next
      node_array << tortoise
    end
    node_array.pop unless rabbit # odd number of elements

    [node_array, tortoise]
  end
end