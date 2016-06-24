Question 1.4
Implemennt a function that will replace all spaces with the string '%20'
disregard trailing white space.


solution:

js - probably a better way to build the new expression, i think the constant unshifting of the new expression is a needless cost.  i think i can build a new array of the appropriate length in place with a little tweaking.

i also could have implemented a soulution involving regex, as that code is probably optimized for both time and space, but i don't know enough about regex to be sure.