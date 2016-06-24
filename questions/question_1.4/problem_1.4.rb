def find_and_replace args
  source = args[:source].split('')
  expr1 = args[:expr1]
  expr2 = args[:expr2]
  new_array = []
  while !source.empty?
    last_element = source.pop
    new_array.unshift(last_element == expr1 ? expr2 : last_element)
  end
  new_array.join('')
end

arguments = {source: 'this is only a test', expr1: ' ', expr2: '%20'}

p find_and_replace arguments