class N_by_n

  attr_accessor :array, :horizontal_array

  def initialize options={}
    @array = options[:array] || (generate_array options)
    create_horizontal_array options
    create_vertical_array options
  end

  def transform! substitute_value=0
    set_substitute_flags substitute_value
    transform_rows substitute_value

  end

  def display
    display_matrix
  end

  private

  def transform_rows substitute_value
    @array.each_with_index do |row, index|
      transform_row(index, substitute_value) if @vertical_array[index]
      transform_col(index, substitute_value) if @horizontal_array[index]
    end
  end

  def transform_row index, value
    @array[index].map! {value}
  end

  def transform_col index, value
  end

  def set_substitute_flags substitute_value
    @array.each_with_index do |row, row_index|
      row.each_with_index do |element, col_index|
        # p "element value: #{element.value}"
        if element.value == substitute_value
          p 'bingo!!'
          @horizontal_array[col_index] ||= true
          @vertical_array[row_index] ||= true
          next
        end
      end
    end
  end

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

  def create_horizontal_array options
    @horizontal_array = Array.new(@array.size, false)
  end

  def create_vertical_array options
    @vertical_array = Array.new(@array.size, false)
  end

  def display_matrix
    @array.each_with_index do |row, row_index|
      line = ''
      row.each_with_index { |col, col_index| line += @array[row_index][col_index].value.to_s}
      p line
    end
  end
end

class Array_element
  attr_accessor :value

  def initialize options={}
    @value = options[:value] || (rand (0..9))
    @zero_out = false
  end

  private
end

test = N_by_n.new
test.display
test.transform!
p "*"*120
test.display

# p test.horizontal_array.each {|el| el}