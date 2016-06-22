def unique_chars? word
  histogram = word.split('').inject(Hash.new(0)){ |h,v| h[v] += 1; h }
  histogram.each {|k,v| return false if v > 1}
  true
end

p unique_chars? 'hello'

p unique_chars? 'bite'