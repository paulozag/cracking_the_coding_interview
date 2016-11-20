def str_compress(string)
  return string if string.empty?
  compressed_array  = []
  string_array      = string.split('')
  current_char      = string_array[0]
  count             = 1
  compressed_array.push(current_char)

  (1...string.length).each do |index|
    if string_array[index] == current_char
      count += 1
    else
      compressed_array.push(count.to_s)
      count = 1
      current_char = string_array[index]
      compressed_array.push(current_char)
    end
  end
  compressed_array.push(count.to_s)
  string.length < compressed_array.length ? string : compressed_array.join('')
end

p str_compress('hello')
p str_compress('aaaaaaabbbbbbbbbbcddddddde')