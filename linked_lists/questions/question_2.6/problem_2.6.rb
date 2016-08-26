require '../../linked_list.rb'

def find_head_of_circular_list list
  histo = {}
  head = list.head
  while head
    return head if histo[head.object_id]
    histo[head.object_id] = true
    head = head.next
  end
end

x = Linked_list.new
list = [1,2,3,4,5,6,7]
list.each {|val| x.add_node_by_value val }
head_of_circle = Node.new(8)
x.add_node head_of_circle
[9,10,11,12,13].each {|val| x.add_node(Node.new(val))}
bad_node = Node.new(14)
x.add_node bad_node
bad_node.next = head_of_circle

answer = find_head_of_circular_list x
p answer.value