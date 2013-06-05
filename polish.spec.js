require('./polish')

describe("Zappy", function () {
    it("has strings", function () {
        expect(typeof Polish.strings).toBe('object')
    })
    it("adds range", function () {
        expect(range(1, 20, 2) instanceof Array).toBe(true)
    })
    it("clones", function () {
        var obj = {
            'a': {
                'c': 1
            }
        }
        expect(Polish.clone(obj) === obj).toBe(false)
        expect(Polish.clone(obj).toString() === obj.toString()).toBe(true)
    })
    it("zips", function () {
        //TODO: actually test zipping
        var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        expect(zip(zip(arr)).toString() === arr.toString()).toBe(true)
    })
    it("sums", function () {
        expect(Math.sum([1, 2, 3])).toBe(6)
        expect(Math.sum(1, 2, 3)).toBe(6)
    })
    describe("Arrays", function(){
        it("pops indexes", function(){
            var list = [1,2,3,4,5]
            expect(list.pop()).toBe(5)
            expect(list.pop(1)).toBe(2)
        })
        it("removes elements", function(){
            var list = [1,2,3,4,5]
            expect(list.remove(2).toString()).toBe([1,3,4,5].toString())
        })
        it("inserts elements", function(){
            var list = [1,2,3,4,5]
            expect(list.insert(2,5).toString()).toBe([1,2,5,3,4,5].toString())
        })
            
    })
    describe("Maths", function () {
        it("returns mins of multiple numbers", function () {
            expect(Math.min(1, 2)).toBe(1)
        })
        it("returns mins from a single array", function () {
            expect(Math.min([1, 2])).toBe(1)
        })
        it("returns mins of multiple arrays", function () {
            expect(Math.min([1, 2], [2, 3]) instanceof Array).toBe(true)
        })
        it("returns max of multiple numbers", function () {
            expect(Math.max(1, 2)).toBe(2)
        })
        it("returns max from a single array", function () {
            expect(Math.max([1, 2])).toBe(2)
        })
        it("returns max of multiple arrays", function () {
            expect(Math.max([1, 2], [2, 3]) instanceof Array).toBe(true)
        })
        it("factorials", function () {
            expect(Math.factorial(10)).toBe(3628800)
        })
        it("primes", function () {
            expect(Math.isPrime(23)).toBe(true)
            expect(Math.isPrime(24)).toBe(false)
        })
    })
    describe("Randoms", function () {
        //TODO: actually test these
        it("gets random int", function () {
            expect(Math.randInt(100)).toBeLessThan(101)
        })
        it("gets random choice from list", function () {
            expect([1, 2, 3].choice()).toBeGreaterThan(0)
        })
        it("gets random choice from string", function () {
            expect('12345'.choice()).toBeGreaterThan(0)
        })
        it("shuffles lists in place", function () {
            var unshuffled = range(1000)
            expect(unshuffled.toString()).not.toEqual(unshuffled.shuffle().toString())
        })
        it("get shuffled strings", function () {
            var a = range(1000).join('')
            expect(a.toString()).not.toEqual(a.shuffle().toString())
        })
    })
    describe("itertools", function () {
        it("combos", function () {
            expect(Polish.combinations([1, 2, 3, 4, 5], 3).length).toBe(10)
        })
        it("combos with replacement", function () {
            expect(Polish.combinationsReplace([1, 2, 3, 4, 5], 3).length).toBe(125)
        })
        it("permutes", function () {
            expect(Polish.permutations([1, 2, 3, 4]).length).toBe(24)
        })
    })
    describe("reverse functions", function(){
        it("reverses strings", function(){
            var str = "abcdef"
            expect(str.reverse()).toBe("fedcba")
        })
    })
    describe("python selectors", function(){
        //TODO: finish adding list tests
        var list = [1,2,3,4,5]
        var str = 'abcdef'
        it("selectcs -1", function(){
            expect(list[-1]).toBe(list.g(-1))
            expect(str[-1]).toBe('f')
        })
        it("selects positive", function(){
            expect(list.g('1')).toBe(2)
            expect(str.g('1')).toBe('b')
        })
        it("selects negative", function(){
            expect(list.g('-1')).toBe(5)
            expect(str.g('-1')).toBe('f')
        })
        it("selects 0", function(){
            expect(list.g('0')).toBe(1)
            expect(str.g('0')).toBe('a')
        })
        it("selects positive range without end", function(){
            expect(list.g('1:').toString()).toBe(list.slice(1).toString())
            expect(str.g('1:')).toBe(str.substring(1))
        })
        it("selects positive range without beginning", function(){
            expect(list.g(':2').toString()).toBe(list.slice(0,2).toString())
            expect(str.g(':2')).toBe(str.substring(0,2))
        })
        it("selects positive range", function(){
            expect(list.g('1:3').toString()).toBe(list.slice(1,3).toString())
            expect(str.g('1:3')).toBe(str.substring(1,3))
        })
        it("selects negative range", function(){
            expect(str.g('-3:-1')).toBe('de')
        })
        it("selects mixed range", function(){
            expect(str.g('2:-1')).toBe('cde')
        })
        it("doesn't overselect large numbers", function(){
            expect(str.g('-30:')).toBe('abcdef')
            expect(str.g(':30')).toBe('abcdef')
        })
        it("reverses", function(){
            expect(str.g('::-1')).toBe('fedcba')
        })
        it("selects positive range and reverses", function(){
            expect(str.g('3:1:-1')).toBe('dc')
        })
    })
})
    
    
    
    
