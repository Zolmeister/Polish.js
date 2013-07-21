#    ![Polish.js](http://image.spreadshirt.com/image-server/v1/compositions/2755722/views/1,width=75,height=75,appearanceId=1.png/polish-eagle-crest_design.png) Polish.js

> *(the verb, not the language)*

#### Making JavaScript more like Polish

## Install (note, Polish.js overrides default behavior)
####node.js
````bash
npm install polish
````

````javascript
require('polish')
````

####browser
````html
<!-- browser (1.45 KB minified & gzipped) -->
<script src="https://raw.github.com/Zolmeister/Polish.js/master/polish.min.js"></script>
````

##Features
####Array operations

##### Array.prototype.remove()
##### Array.prototype.insert()

````javascript
list = [1,2,3,4,5]
list.pop(1) == 2 //    list == [1,3,4,5]    pops element at index
list.remove(2) //    list == [1,3,4,5]      removes element by value
list.insert(2,5) //    list == [1,2,5,3,4,5]
````

####Use Math min/max with lists

````javascript
Math.min([1,2,3]) == 1
Math.max([1,2,3]) == 3
````

####Randomness functions

##### Math.randInt()
##### String.prototype.choice()
##### String.prototype.shuffle()
##### Array.prototype.choice()
##### Array.prototype.shuffle()

````javascript
Math.randInt(100) // random int from 0,100 inclusive
[1,2,3].choice() //random object from list
"abc".choice() //random letter from string
[1,2,3].shuffle() //shuffles array in place
"abc".shuffle() //returns new shuffled string
````

####Global functions

##### range()
````javascript
range(1,4) == [1,2,3]
range(6,1,-2) == [6,4,2]
````

##### zip()
````javascript
zip([[1,2],[3,4],[5,6]]) == [[1,3,5],[2,4,6]]
````

####Python-inspired list/string selectors

##### Array.prototype.g()
##### String.prototype.g()

````javascript
list = [1,2,3,4,5]
str = "abcdef"

list.g('-1') == 5
str.g('1:') == "bcdef"
list.g(':2') == [1,2]
str.g('1:3') == "bc"
str.g('-3:-1') == "de"
list.g('::-1') == [5,4,3,2,1]
str.g('3:1:-1') == "dc"

//special -1 selector (picks item from end of list)
list[-1] == 5
````

####Itertools

##### Polish.combinations()
##### Polish.combinationsReplace()

````javascript
Polish.combinations([1,2,3],2) == [[1,2],[1,3],[2,3]]
Polish.combinationsReplace("abc",2) == [['a','a'],['a','b'], ... , ['c','c']]
Polish.permutations([1,2]) == [[1,2],[2,1]]
````

####Math functions
````javascript
Math.sum([1,2,3]) == 6
Math.factorial(10) == 3628800
Math.isPrime(23) == true
Math.leastFactor(25) == 5
````

####Strings
````javascript
"abc".reverse() == "cba"

Polish.strings
{
    letters: 'abcdefghijklmnopqrstuvwxyz',
    letters_all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789'
}
````

####Extra
````javascript
//stringifies and then parses
Polish.clone
````

###Compatibility / side-effects:
This library has been injected into unit tests for jQuery, backbone, and bootstrap and has not caused any issues.

###License: BSD
