require '../../linked_list.rb'

# class LinkedList

#   def kth_to_last_element k
#     list_length = self.length
#     p "length of list: #{list_length}"
#     list_count = 0
#     find_kth head,k, listcount, false
#   end

#   def find_kth current, target, list_count, found_flag
#     return current if found_flag

#     if list_count > 1
#       if list_count == target
#         found_flag = true
#         return current
#       end
#       list_count += 1
#       return
#     end

#     if !current.next
#       list_count = 1
#       return
#     end

#     return find_kth current.next, target, list_count, found_flag
#   end

# end

