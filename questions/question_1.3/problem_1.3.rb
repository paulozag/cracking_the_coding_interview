def permutation? word1, word2

end

def histo obj
  case
  when obj.class == String
    return obj.split('').inject(Hash.new(0)){ |h,v| h[v] += 1; h }
  else
    return -1
  end
end

p histo 'hello'