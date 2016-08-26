require '../../linked_list.rb'

class Linked_list

  def remove_duplicates
    values_present = {}
    runner = head
    while runner
      if values_present[runner.value]
        temp = runner.next
        remove_node runner
        runner = temp
      else
        values_present[runner.value] = true
      end
      runner = runner.next
    end
  end

  def remove_duplicates_no_buffer
    current = head
    while current
      find_and_delete_after current
      current = current.next
    end
  end

  private
  def find_and_delete_after current
    runner = current.next
    while runner
      (remove_node runner) if runner.value == current.value
      runner = runner.next
    end
  end


end

x = Linked_list.new(Node.new(0))
list = [0,1,2,1,2,2,3,4,5,4,4,5,3]
list.each {|val| x.add_node_by_value val }
x.view_list
x.remove_duplicates_no_buffer
p 'ooooo'
x.view_list
p x.length



# p x.remove_duplicates