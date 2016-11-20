def permutation?(word1, word2)
  histogram(word1) == histogram(word2)
end

def histogram(word)
  histo = Hash.new(0)
  word.split('').each { |char| histo[char] += 1 }
  histo
end

p histogram('hello')
p permutation?('melon', 'lemonm')