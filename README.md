![Polish.js](https://raw.github.com/Zolmeister/Polish.js/master/polish-logo.png)
(the verb, not the language)
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
//browser (1.45 KB minified & gzipped)
&lt;script src='polish.js'>&lt;/script>
</pre>

##Features
####Array operations
<pre>
list = [1,2,3,4,5]
list.pop(1) == 2 //list == [1,3,4,5]    pops index
list.remove(2) //list == [1,3,4,5]      removes element
list.insert(2,5) //list == [1,2,5,3,4,5]
</pre>

####Use Math min/max with lists
<pre>
Math.min([1,2,3]) == 1
Math.max([1,2,3]) == 3
</pre>

####Randomness functions
<pre>
Math.randInt(100) // random int from 0,100 inclusive
[1,2,3].choice() //random object from list
"abc".choice() //random letter from string
[1,2,3].shuffle() //shuffles array in place
"abc".shuffle() //returns new shuffled string
</pre>

####global functions
<pre>
range(1,4) == [1,2,3]
range(6,1,-2) == [6,4,2]
</pre>
<pre>
zip([[1,2],[3,4],[5,6]]) == [[1,3,5],[2,4,6]]
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

####Itertools
<pre>
Polish.combinations([1,2,3],2) == [[1,2],[1,3],[2,3]]
Polish.combinationsReplace("abc",2) == [['a','a'],['a','b'], ... , ['c','c']]
Polish.permutations([1,2]) == [[1,2],[2,1]]
</pre>

####Math functions
<pre>
Math.sum([1,2,3]) == 6
Math.factorial(10) == 3628800
Math.isPrime(23) == true
Math.leastFactor(25) == 5
</pre>

####Strings
<pre>
"abc".reverse() == "cba"

Polish.strings
{
    letters: 'abcdefghijklmnopqrstuvwxyz',
    letters_all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789'
}
</pre>

####extra
<pre>
//stringifies and then parses
Polish.clone
</pre>

###note about modifications:
This library has been injected into unit tests for jQuery, backbone, and bootstrap and has not caused any issues
###License: BSD
