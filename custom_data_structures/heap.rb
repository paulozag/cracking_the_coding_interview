class Heap
  attr_accessor :heap_size, :heap_array
  # min-max logic in #bubble_up, #bubble_down, #bubble_down_done?, #index_of_larger_child

  def initialize(args={})
    @heap_array = []
    @min_heap = args[:min_heap]
    initial_array = args.fetch(:source_array, [])
    @heap_size = @heap_array.length
    build_heap(initial_array)
  end

  def peek

    @heap_array[0]
  end

  def push(value)
    leaf = @heap_size
    @heap_size += 1
    @heap_array[leaf] = value
    bubble_up(leaf)
  end

  def pop
    return nil if @heap_array.empty?

    return_element = @heap_array[0]
    @heap_array[0] = @heap_array[@heap_size-1]
    @heap_array[@heap_size-1] = nil
    @heap_size -= 1
    bubble_down(0)
    return_element
  end

  private
  def build_heap(initial_array)

    initial_array.each { |val| push(val)  }
  end

  def left_child(index)

    2*index + 1
  end

  def right_child(index)

    2*index + 2
  end

  def left_child_key(index)

    @heap_array[left_child(index)]
  end

  def right_child_key(index)

    @heap_array[right_child(index)]
  end

  def parent(index)

    (index -1)/2
  end

  def parent_value(index)

    @heap_array[parent(index)]
  end

  def swap_values(index1, index2)
    temp = @heap_array[index1]
    @heap_array[index1] = @heap_array[index2]
    @heap_array[index2] = temp
  end

  def bubble_up(index)
    return if index == 0 || compare(parent_value(index),
                                    @heap_array[index])
    # parent_value(index) >= @heap_array[index]
    # compare(val1, val2)
    swap_values(index, parent(index))
    bubble_up(parent(index))
  end

  def compare(val1, val2)

    @min_heap ? val1 <= val2 : val1 >= val2
  end

  def bubble_down(index)
    return if bubble_down_done?(index)

    ilc = index_of_larger_child(index)
    swap_values(index, ilc)
    bubble_down(ilc)
  end

  def bubble_down_done?(index)
    return true if leaf_node?(index)
    if right_child_key(index)
      return true if  compare(@heap_array[index], right_child_key(index)) &&
                      compare(@heap_array[index], left_child_key(index))


      # @heap_array[index] >  right_child_key(index) &&
      # @heap_array[index] >  left_child_key(index)
    end
    return true if compare(@heap_array[index], left_child_key(index))
    # @heap_array[index] > left_child_key(index)
    false
  end

  def index_of_larger_child(index)
    if @heap_array[right_child(index)]
      if compare(left_child_key(index), right_child_key(index))
        left_child(index)
      else
        right_child(index)
      end
      # left_child_key(index) >= right_child_key(index) ? left_child(index) : right_child(index)
    else
      left_child(index)
    end
  end

  def leaf_node?(index)

    index >= @heap_size/2
  end
 end

# a = Heap.new(source_array: [1,2,3])
# p a.heap_size
# b = Heap.new
# p b.heap_size

# a = Heap.new
# a.push 1
# p a.heap_size
# a.push 10
# a.push 2
# p a.peek
# p "popping #{a.pop}"
# p "head value #{a.peek}"

a = Heap.new(source_array: [1,3,5,7,9,2,4,6,8,10])
11.times {p a.pop}
p '$%$' * 40
b   = Heap.new(source_array: [1,3,5,7,9,2,4,6,8,10], min_heap: true)
11.times {p b.pop}