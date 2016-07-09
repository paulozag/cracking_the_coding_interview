class N_by_n

  attr_accessor :array

  def initialize options={}
    @array = options[:array] || (generate_array options)

  end

  private
  def generate_array options
    size = options[:size] || 5
    create_matrix size
  end

  def create_matrix size
    arr = []
    (1..size).each do |row|
      arr_row = []
      (1..size).each do |col|
        arr_row << Array_element.new
      end
      arr << arr_row
    end
    arr
  end
end

class Array_element
  def initialize options={}
    @value = options[:value] || (rand (0..9))
    @zero_out = false
  end

  private
end

test = N_by_n.new
p test