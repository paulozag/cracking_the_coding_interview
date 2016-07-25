def rotation? s1, s2
  permutation = []
  s1.length.times do |offset|
    permutation << s1[offset..-1] + s1[0...offset]
  end
  permutation.join(' ').include? s2
end


x = 'hello'
y = 'llohe'
z = 'loleh'

p rotation? x,y
p rotation? x,z