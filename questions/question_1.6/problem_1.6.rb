=begin
  iterate through sucessive 'layers' of the matrix
    for every element in the top row create a 4 way shift, top element moves to
    right side, right side to bottom, bottom element to left, and
    left (saved in a temp) to top.

  setting the algorithm to process the layer by layer sequence is the trick

=end

def rotate array
  return -1 unless valid_n_by_n? array
  first_index = 0
  last_index = array.length - 1
  (array.length/2).floor.times do
    offset = 0
    (last_index - first_index).times do
      temp                                      = array[first_index][first_index +offset]
      array[first_index][first_index +offset]   = array[last_index - offset][first_index]
      array[last_index - offset][first_index]   = array[last_index][last_index - offset]
      array[last_index][last_index - offset]    = array[first_index + offset][last_index]
      array[first_index + offset][last_index]   = temp

      offset += 1
    end

    first_index += 1
    last_index -= 1
  end
end

def rotateable? array
end

def valid_n_by_n? array
  depth = array.length
  for row in array
    return false unless row.length == depth
  end
  true
end

def create_matrix size
  arr = []
  (1..size).each do |row|
    arr_row = []
    (1..size).each do |col|
      arr_row << "#{row}:#{col} "
    end
    arr << arr_row
  end
  arr
end

def display_matrix matrix
  matrix.each_with_index do |row, row_index|
    line = ''
    row.each_with_index { |col, col_index| line += matrix[row_index][col_index]}
    p line
  end
end

mat = create_matrix 4
display_matrix mat
rotate mat
p "*"*120
display_matrix mat