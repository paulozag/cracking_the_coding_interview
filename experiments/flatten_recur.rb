def recur_flatten arr
  package = []
  return [arr] unless arr.class == Array
  arr.each do |element|

    element.class == Array ? package += (recur_flatten element) : package << element

    # if element.class == Array
    #   package += recur_flatten element
    # else
    #   package << element
    # end
  end
  package
end

