require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

# class Linked_list

#   def remove_duplicates
#     values_present = {}
#     runner = head
#     while runner
#       if values_present[runner.value]
#         temp = runner.next
#         remove_node runner
#         runner = temp
#       else
#         values_present[runner.value] = true
#       end
#       runner = runner.next
#     end
#   end

#   def remove_duplicates_no_buffer
#     current = head
#     while current
#       find_and_delete_after current
#       current = current.next
#     end
#   end

#   private
#   def find_and_delete_after current
#     runner = current.next
#     while runner
#       (remove_node runner) if runner.value == current.value
#       runner = runner.next
#     end
#   end
# end

class LinkedList
  def remove_duplicates
    return unless @head && @head.next
    parent = @head
    runner = @head.next
    presence_hash = {@head.value => true}
    while runner
      if presence_hash[runner.value]
        parent.next = runner.next
      else
        presence_hash[runner.value] = true
        parent = parent.next
      end
      runner = runner.next
    end
  end
end

