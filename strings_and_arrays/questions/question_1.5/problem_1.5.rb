def string_compressor expr
  new_expr = []
  prev_char = ''
  count = 0
  while count < expr.length
    next_char = expr[count]
    if next_char == prev_char
      new_expr[-1] += 1
    else
      prev_char = next_char
      new_expr << next_char
      new_expr << 1
    end
    count += 1
  end
  new_string = new_expr.join('')
  new_string.length < expr.length ? new_string : expr
end


p string_compressor 'aababababbbbbtbttttbybuuuuq'
p string_compressor 'aaaaaabbbbbbbcbbbbbbb'