require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def partition(value)
    small_list = LinkedList.new
    big_list = LinkedList.new

    build_partition_lists(small_list, big_list, value)
    @head = new_head_value(small_list, big_list)
  end

  private
  def build_partition_lists(small_list, big_list, value)
    runner = @head
    while runner
      if runner.value < value
        small_list.push(runner.value)
      else
        big_list.push(runner.value)
      end
      runner = runner.next
    end
  end

  def new_head_value(small_list, big_list)
    if small_list.head
      small_list.tail.next = big_list.head
      small_list.head
    else
      big_list.head
    end
  end

end

# test cases: empty list, target less than, within, greater than bounds of list