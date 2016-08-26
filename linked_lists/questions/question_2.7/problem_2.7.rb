require '../../linked_list.rb'

def isPalindrome? list
  values = []
  runner = list.head
  while runner
    values << runner.value
    runner = runner.next
  end
  until values.empty? || values.count == 1
    return false unless values.shift == values.pop
  end
  true
end

x = Linked_list.new
list = [1,2,3,4,5,6,7,6,5,4,3,2,1]
list.each {|val| x.add_node_by_value val }
x.view_list

p isPalindrome? x