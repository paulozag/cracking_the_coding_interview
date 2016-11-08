class Node
  attr_accessor :value, :next

  def initialize value=nil
    @value = value
    @next = nil
  end

  def to_s
    p "Node  value: #{self.value ? value : 'no value set'}  " +
    "next: #{self.next ? self.value : 'no next node'}"
  end
end