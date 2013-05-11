![Polish.js](https://raw.github.com/Zolmeister/Polish.js/master/polish-logo.png)
Making JavaScript better
========================

##Install (note, Polish.js overrides default behavior)
####node.js
<pre>
npm install polish
require('polish')
</pre>

####browser
<pre>
//browser (1.43 KB minified & gzipped)
&lt;script src='polish.js'>&lt;/script>
</pre>

##Features
####Use Math min/max with lists
<pre>
Math.min([1,2,3]) == 1
Math.max([1,2,3]) == 3
</pre>

####global functions
<pre>
range(1,4) == [1,2,3]
range(6,1,-2) == [6,4,2]
</pre>
<pre>
sum([1,2,3]) == 6
</pre>
<pre>
abs(-5) == 5
</pre>
<pre>
//stringifies object, then parses it
clone({'a':{'b':{'c':{}}}}) == {'a':{'b':'c':{}}}
</pre>
<pre>
zip([[1,2],[3,4],[5,6]]) == [[1,3,5],[2,4,6]]
</pre>

####Random functions
<pre>
Math.randInt(100) // random int from 0,100 inclusive
[1,2,3].choice() //random object from list
"abc".choice() //random letter from string
[1,2,3].shuffle() //shuffles array in place
"abc".shuffle() //returns new shuffled string
</pre>

####Itertools
<pre>
itertools.combinations([1,2,3],2) == [[1,2],[1,3],[2,3]]
itertools.combinations_with_replacement("abc",2) == [['a','a'],['a','b'], ... , ['c','c']]
itertools.permutations([1,2]) == [[1,2],[2,1]]
</pre>

####Python list/string selectors
<pre>
list = [1,2,3,4,5]
str = "abcdef"

list.g('-1') == 5
str.g('1:') == "bcdef"
list.g(':2') == [1,2]
str.g('1:3') == "bc"
str.g('-3:-1') == "de"
list.g('::-1') == [5,4,3,2,1]
str.g('3:1:-1') == "dc"

//special -1 selector
list[-1] == 5
</pre>

####Reverse Strings
<pre>
"abc".reverse() == "cba"
</pre>

####Math factorial and prime functions
<pre>
Math.factorial(10) == 3628800
Math.isPrime(23) == true
</pre>

####Default Strings
<pre>
strings
{
    letters: 'abcdefghijklmnopqrstuvwxyz',
    letters_all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789'
}
</pre>

###License: MIT
