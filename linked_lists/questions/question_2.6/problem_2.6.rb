require_relative './../../../custom_data_structures/ruby_data_structures/linked_list.rb'

class LinkedList

  def head_of_circular_list
    return nil unless @head && @head.next
    tortoise        = @head
    rabbit          = @head

    rabbit, tortoise = collide_runners(rabbit,tortoise)
    return nil unless rabbit  #acyclic list
    tortoise  = @head # now both rabbit and tortoise are k steps
                      # away from circle head
    head_of_circular_list = have_runners_meet(rabbit, tortoise)
  end

  def collide_runners(rabbit, tortoise)
    # when collision occurs, rabbit will be
    # k (length of non-cyclic front portion) steps
    # away from the circle head
    while rabbit && rabbit.next
      tortoise  = tortoise.next
      rabbit    = rabbit.next.next
      break if rabbit == tortoise
    end

    return [rabbit, tortoise] if rabbit && rabbit.next
    nil
  end

  def have_runners_meet(rabbit, tortoise)
    while true  # move both runners 1 step ahead and they will meet at the
                # circle head
      break if tortoise == rabbit
      rabbit    = rabbit.next
      tortoise  = tortoise.next
    end
    tortoise
  end
end





