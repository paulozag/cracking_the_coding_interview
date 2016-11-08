require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def kth_to_last(k)
    leader = advance_head_k_elements(k)
    follower = @head
    return nil unless leader
    while leader.next
      leader = leader.next
      follower = follower.next
    end
    follower.value
  end

  def advance_head_k_elements(k)
    runner = @head
    k.times do
      return nil unless runner.next
      runner = runner.next
    end
    runner
  end
end




