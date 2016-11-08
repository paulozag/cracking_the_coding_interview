require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def head_of_circular_list
    return nil unless @head && @head.next
    tortoise        = @head
    rabbit          = @head.next
    tortoise_steps  = 0
    circle_size     = nil

    while rabbit
      if rabbit == tortoise
        break if circle_size
        circle_size = 0
      end

      tortoise  = tortoise.next
      rabbit    = advance_rabbit(rabbit)
      tortoise_steps  += 1
      circle_size     += 1 if circle_size
    end

    return nil unless rabbit
    distance_to_circle_head = tortoise_steps - (2 * circle_size) - 1
    runner = @head
    distance_to_circle_head.times {runner = runner.next}
    runner
  end
end

x = LinkedList.new
['A','B','C'].each { |val| x.push(val)}
head_of_circle = Node.new('D')
x.push_node(head_of_circle)
['E','F','G'].each { |val| x.push(val)}

x.view_list
x.tail.next = head_of_circle
p '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
# x.view_list



