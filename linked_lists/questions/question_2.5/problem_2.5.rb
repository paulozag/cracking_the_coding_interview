require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def self.convert_arabic_to_linked_list(num)
    list = LinkedList.new
    while num > 0
      quotient, remainder = num.divmod(10)
      list.push(remainder)
      num = quotient
    end
    list
  end

  def reverse
    temp_list = LinkedList.new
    runner    = @head
    while runner
      temp_list.enqueue(runner.value)
      runner = runner.next
    end
    temp_list
  end

  def add_two_lists(list1, list2)
    sum_list  = LinkedList.new
    runner1   = list1.head
    runner2   = list2.head
    carry     = false

    while runner1 || runner2
      value1, value2        = get_runner_values(runner1, runner2)
      carry_value           = (carry ? 1 : 0)
      quotient, remainder   = (value1 + value2 + carry_value).divmod(10)
      carry                 = (quotient == 1)

      sum_list.push(remainder)
      runner1, runner2 = advance_runners(runner1, runner2)
    end

    sum_list.push(1) if carry
    sum_list
  end

  private
  def advance_runners(runner1, runner2)
    runner1 = runner1.next if runner1
    runner2 = runner2.next if runner2
    [runner1, runner2]
  end

  def get_runner_values(runner1, runner2)
    value1        = (runner1 ? runner1.value : 0)
    value2        = (runner2 ? runner2.value : 0)
    [value1, value2]
  end

end

list1 = LinkedList.convert_arabic_to_linked_list(3412)
list1.view_list
p '**************************************'
list1 = list1.reverse
list1.view_list