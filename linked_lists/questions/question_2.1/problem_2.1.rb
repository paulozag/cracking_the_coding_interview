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


end

x = Linked_list.new(Node.new(5))
list = [5,2,7,8,1,3,9,0]
list.each {|val| x.add_node_by_value val }
x.view_list
x.remove_duplicates
p 'ooooo'
x.view_list
p x.length



# p x.remove_duplicates