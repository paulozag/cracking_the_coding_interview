class Row_col_if_zero

  def initialize options={}
    @initialization_options = options
    @array = options[:array] || generate_array
  end


  private
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