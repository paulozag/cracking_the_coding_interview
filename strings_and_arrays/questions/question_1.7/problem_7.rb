class Row_col_if_zero
  attr_reader :row_flags, :col_flags

  def initialize options={}
    @initialization_options = options
    @array = options[:array] || generate_array
    @row_flags = Array.new(@array.length, false)
    @col_flags = Array.new(@array.length, false)
  end

  def zero_out
    update_flags
    zero_out_rows_and_cols
  end

  def display_matrix
    for row in @array
      string_arr = []
      for element in row
        string_arr << element
      end
      p string_arr.join('')
    end
  end

  private
  def zero_out_rows_and_cols
    (0...@array.length).each do |index|
      (zero_out_row index) if row_flags[index]
      (zero_out_col index) if col_flags[index]
    end
  end

  def zero_out_row row
    @array[row].map! {0}
  end

  def zero_out_col col
    (0...@array.length).each do |index|
      @array[index][col] = 0
    end
  end

  def update_flags
    @array.each_with_index do |row, row_index|
      next if @row_flags[row_index]
      row.each_with_index do |element, col_index|
        next if @col_flags[col_index]
        if element == 0
          @row_flags[row_index] = true
          @col_flags[col_index] = true
          next
        end
      end
    end
  end

  def generate_array
    size = @initialization_options[:size] || 5
    create_matrix size
  end

  def create_matrix size
    arr = []
    (1..size).each do |row|
      arr_row = []
      (1..size).each do |col|
        arr_row << rand(0..9)
      end
      arr << arr_row
    end
    arr
  end



end

x = Row_col_if_zero.new
x.display_matrix
x.zero_out
p ''
p x.row_flags
p x.col_flags
x.display_matrix