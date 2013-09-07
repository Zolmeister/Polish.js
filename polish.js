/* Polish.js v0.2.2 | Zolmeister | BSD License*/
(function () {
  var global = this

  var mathMin = Math.min.bind(Math)
  Object.defineProperty(Math, 'min', {
    value: function () {
        //do minimum of arrays
        if (arguments[0] instanceof Array) {
          //minumun of 1 array
          if (arguments.length == 1) {
            return mathMin.apply(Math, arguments[0])
          } else {
            //comparison of multiple arrays
            var min = arguments[0]
            for (var i = 1, l = arguments.length; i < l; i++) {
              if (arguments[i] < min) min = arguments[i]
            }
            return min
          }
        }
        //normal
        else {
          return mathMin.apply(Math, arguments)
        }
      }
  })

  var mathMax = Math.max.bind(Math)
  Object.defineProperty(Math, 'max', {
    value: function () {
        //do minimum of arrays
        if (arguments[0] instanceof Array) {
          //minumun of 1 array
          if (arguments.length <= 1) {
            return mathMax.apply(Math, arguments[0])
          } else {
            //comparison of multiple arrays
            var max = arguments[0]
            for (var i = 1, l = arguments.length; i < l; i++) {
              if (arguments[i] > max) max = arguments[i]
            }
            return max
          }
        }
        //normal
        else {
          return mathMax.apply(Math, arguments)
        }
      }
  })

  //return random int between min and max inclusive
  Object.defineProperty(Math, 'randInt', {
    value: function randInt(min, max) {
        if (!max) {
          max = min
          min = 0
        }
        return min + Math.floor(Math.random() * (max - min + 1))
    }
  })

  var factorialMemoize = []
  Object.defineProperty(Math, 'factorial', {
    value: function factorial(n) {
        if (n == 0 || n == 1) return 1
        if (factorialMemoize[n] > 0) return factorialMemoize[n]
        else return factorialMemoize[n] = factorial(n - 1) * n
      }
  })

  //http://www.javascripter.net/faq/numberisprime.htm
  Object.defineProperty(Math, 'isPrime', {
    value: function (n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false
        if (n == Math.leastFactor(n)) return true
        return false
      }
  })

  //http://www.javascripter.net/faq/numberisprime.htm
  Object.defineProperty(Math, 'leastFactor', {
    value: function (n) {
        if (isNaN(n) || !isFinite(n)) return NaN
        if (n == 0) return 0
        if (n % 1 || n * n < 2) return 1
        if (n % 2 == 0) return 2
        if (n % 3 == 0) return 3
        if (n % 5 == 0) return 5
        var m = Math.sqrt(n)
        for (var i = 7; i <= m; i += 30) {
          if (n % i == 0) return i
          if (n % (i + 4) == 0) return i + 4
          if (n % (i + 6) == 0) return i + 6
          if (n % (i + 10) == 0) return i + 10
          if (n % (i + 12) == 0) return i + 12
          if (n % (i + 16) == 0) return i + 16
          if (n % (i + 22) == 0) return i + 22
          if (n % (i + 24) == 0) return i + 24
        }
        return n
      }
  })

  var Polish = global.Polish || {}
  Object.defineProperty(global, 'Polish', {
    value: Polish
  })

  Polish['strings'] = {
    letters: 'abcdefghijklmnopqrstuvwxyz',
    letters_all: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789'
  }

  Polish['combinations'] = function (list, len, replacement) {
    var result = []
    var fn = function (prefix, remaining) {
      if (len && prefix.length >= len) return
      for (var i = 0, l = remaining.length; i < l; i++) {
        if (!len || prefix.length + 1 === len) result.push(prefix.concat(remaining[i]))
        fn(prefix.concat(remaining[i]), replacement ? remaining : remaining.slice(i + 1))
      }
    }

    fn([], list)
    return result
  }

  Polish['combinationsReplace'] = function (list, len) {
    return global.Polish.combinations(list, len, true)
  }

  //http://stackoverflow.com/questions/15724986/get-all-permutations-of-an-array-of-length-l-using-iteration
  Polish['permutations'] = function (list) {
    var perms = [],
      used = []
    var fn = function permute(input) {
      var ch
      for (var i = 0, l = input.length; i < l; i++) {
        ch = input.splice(i, 1)[0]
        used.push(ch)
        if (input.length === 0) {
          perms.push(used.slice())
        }
        permute(input)
        input.splice(i, 0, ch)
        used.pop()
      }
      return perms
    }
    return fn(list)
  }

  //http://underscorejs.org/docs/underscore.html

  function range(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0
      start = 0
    }
    step = arguments[2] || 1

    var len = Math.max(Math.ceil((stop - start) / step), 0)
    var idx = 0
    var range = new Array(len)

    while (idx < len) {
      range[idx++] = start
      start += step
    }

    return range
  }

  Object.defineProperty(global, 'range', {
    value: range
  })

  Polish['clone'] = function (obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  //http://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
  Object.defineProperty(global, 'zip', {
    value: function () {
      //if 2d list passed in, bubble it down
      if (arguments.length === 1 && arguments[0] instanceof Array && arguments[0][0] instanceof Array) {
        return zip.apply(this, arguments[0])
      }

      var args = [].slice.call(arguments);
      var shortest = args.length == 0 ? [] : args.reduce(function (a, b) {
        return a.length < b.length ? a : b
      });

      return shortest.map(function (_, i) {
        return args.map(function (array) {
          return array[i]
        })
      });
    }
  })

  Object.defineProperty(Math, 'sum', {
    value: function sum() {
      if (arguments.length === 1 && arguments[0] instanceof Array) {
        return sum.apply(this, arguments[0])
      }
      var cnt = 0
      for (var i = 0, l = arguments.length; i < l; i++) {
        cnt += arguments[i]
      }
      return cnt
    }
  })

  Object.defineProperty(Array.prototype, 'choice', {
    value: function () {
      return this[Math.randInt(this.length - 1)]
    }
  })

  Object.defineProperty(String.prototype, 'choice', {
    value: function () {
      return this.charAt(Math.randInt(this.length - 1))
    }
  })

  function shuffle() {
    var i = this.length,
      j, tempi, tempj
    if (i === 0) return this
    while (--i) {
      j = Math.randInt(i)
      tempi = this[i]
      tempj = this[j]
      this[i] = tempj
      this[j] = tempi
    }
    return this
  }

  //http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
  Object.defineProperty(Array.prototype, 'shuffle', {
    value: shuffle
  })

  Object.defineProperty(String.prototype, 'shuffle', {
    value: function () {
      return shuffle.apply(this.split('')).join('')
    }
  })

  var oldPop = Array.prototype.pop;
  Object.defineProperty(Array.prototype, 'pop', {
    value: function (index) {
      if (index && this[index]) {
        return this.splice(index, 1)[0]
      }
      return oldPop.call(this)
    }
  })

  Object.defineProperty(Array.prototype, 'remove', {
    value: function (elem) {
        this.pop(this.indexOf(elem))
        return this
    }
  })

  Object.defineProperty(Array.prototype, 'insert', {
    value: function (index, elem) {
        this.splice(index, 0, elem)
        return this
    }
  })

  Object.defineProperty(Array.prototype, '-1', {
    get: function () {
      return this[this.length - 1]
    }
  })

  Object.defineProperty(String.prototype, '-1', {
    get: function () {
      return this[this.length - 1]
    }
  })

  Object.defineProperty(String.prototype, 'reverse', {
    value: function () {
        return this.split('').reverse().join('')
    }
  })

  function select(sel) {
    //single element selection
    if (typeof sel === 'number' || sel.indexOf(':') === -1) {
      var index = (this.length + parseInt(sel, 10)) % this.length
      return this[index]
    }
    sel = sel.split(':').map(function (e) {
      return parseInt(e, 10)
    })
    var start = parseInt(sel[0], 10) || 0
    start = start < 0 ? Math.max(start, -this.length) : Math.min(start, this.length)
    var end = parseInt(sel[1], 10) || this.length
    end = end < 0 ? Math.max(end, -this.length) : Math.min(end, this.length)
    if (start < 0 && end > 0) {
      end = 0
    }
    var step = parseInt(sel[2], 10) || 1
    if (step < 0) {
      if (start < end) {
        start *= -1
        start -= 1
        end *= -1
        end -= 1
      }
    }

    if (end < 0 && start >= 0) {
      end = (this.length + end) % this.length
    }

    var ret = []
    var indicies = range(start, end, step)
    for (var i = 0, l = indicies.length; i < l; i++) {
      var index = indicies[i]
      ret.push(select.bind(this)(index))
    }
    if (this instanceof Array) return ret
    return ret.join('')
  }

  Object.defineProperty(Array.prototype, 'g', {
    value: select
  })

  Object.defineProperty(String.prototype, 'g', {
    value: select
  })
})();