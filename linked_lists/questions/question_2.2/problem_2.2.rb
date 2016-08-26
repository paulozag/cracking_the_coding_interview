require '../../linked_list.rb'

def find_kth_to_last k
  find_kth head, k
end

def find_kth head, k
  return 0 unless head

  p head.value if (find_kth head.next, k) + 1 == k

end

