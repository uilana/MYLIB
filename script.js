import _ from "./myLip.js"
// ARRAY Methods
// console.log(_.chunk([13, 34, 12, 13, 34, 12], 4));
// console.log(_.compact([23, "", undefined, 33]));
// console.log(_.dropRight([32, 4, 2, 56, 1, 55], 2));
// console.log(_.dropWhile([32, 4, 2, 56, 1, 55], function(element) {
//     return element > 10
// }));
// console.log(_.join([32, 4, 2, 56, 1, 55], ));
// console.log(_.difference([2, 3, 4], [1, 2, 3]));
// console.log(_.difference([1, 2, 3], [1, 2, 3]));
// console.log(_.uniq([1, 2, 3, 2, 1]));

// console.time()
// console.log(_.reverse([13, 25, 31]));
// console.timeEnd()
// let start = new Date().getDate()
// console.log(_.reverse([13, 25, 31]));
// let end = new Date().getDate()
// console.log(end - start);

// console.log(_.findIndex([12, 10, 13, 24], function(element) {
//     return element > 10
// }, 1));

// console.log(_.flattenDeep([12, 55, [33, 45, [13, 67]]]));
// console.log(_.last([4, 6, 1]));
// console.log(_.pull([34, 12, 55], 55, 12));


// let arr = [32, 4, 2, 56, 1, 55]
// console.log((_.remove(arr, function(element) {
//     return element > 10
// })));
// console.log(arr);

// console.log(_.indexOf([45, 55, 12], 55));
// console.log(_.union([10, 11, 12, 13, 14]));
// console.log(_.fromPairs([
//     ["a", 1],
//     ["b", 2]
// ]));
// console.log(_.zip(
//     ['a', 'b'], [1, 2], [true, false]
// ));
// [
//     [a, 1, true][]
// ]

// console.log(_.unzip([
//     ['a', 1, true],
//     ['b', 2, false]
// ]));

// var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
// let obj = "12"
// console.log(_.at(object, ['a[0].b.c', 'a[1]']));
// _.at(object, ['a[0].b.c', 'a[1]']);
// [3, 4]

// MATH Methods
// console.log(_.add(2, 5)); //сложение
// console.log(_.ceil(6.234)); //округление
// console.log(_.divide(12, 5)); //деление
// console.log(_.floor(6.634, 0)); //округление до меньшего
// console.log(_.max([4, 2, 8, 6])); // максимальное число
// console.log(_.mean([4, 2, 8, 6])); // среднее число
// console.log(_.min([4, 2, 8, 6])); // минимальное число
// console.log(_.multiply(2, 5)); //умножение
// console.log(_.round(6.234)); //округление
// console.log(_.subtract(33, 10)); // вычетание
// console.log(_.sum([4, 2, 8, 6])); // сумма чисел из массива

// console.log(_.every([true, 1, 'yes', [], {}], Boolean));
// console.log(_.every([true, 1, 'yes', [], {}], Object));

// var users = [
//     { 'user': 'barney', 'age': 36, 'active': false },
//     { 'user': 'fred', 'age': 40, 'active': false }
// ];
// console.log(_.every(users, { 'user': 'barney', 'active': false }));

// function Foo() {
//     this.a = 1;
// }

// function Bar() {
//     this.c = 3;
// }

// Foo.prototype.b = 2;
// Bar.prototype.d = 4;
// console.log(_.assign({ 'a': 0 }, new Foo, new Bar));
// => { 'a': 1, 'c': 3 }

// var users = {
//     'barney': { 'age': 362, 'active': true },
//     'fred': { 'age': 40, 'active': false },
//     'pebbles': { 'age': 1, 'active': true }
// };
// console.log(_.findKey(users, function(o) {
//     return o.age < 40;
// }));

//console.log(_.union([2, 3, 1, 5], [2, 1, 3, 6, 7, 10], [6, 3, 1, 4], [11, 2, 4, 12]));
// console.log(_.unionDubb([2, 3, 1, 5], [2, 1, 3, 6, 7, 10]));
//console.log(_.concat([1, 2, 3], [2, 3, 4]));
// let array = [1, 2, 3];
//console.log(_.fill(array, 'a', 2, 5));
//console.log(_.head(array));
//console.log(_.without([2, 1, 2, 3], 1, 2));
// console.log(_.xor([2, 1], [2, 3]));

// console.log(_.tail([1, 2, 3]));
//console.log(_.sortedIndex([30, 50], 40));
// console.log(_.take([1, 2, 3], 2));

// tail, sortedIndex,take дз

function Foo() {
    this.a = ('a');
    this.b = ('b');
}

// Foo.prototype.c = ('c');
// console.log(_.functions(new Foo));

// => ['a', 'b']

console.log(_.forIn(new Foo, function(element) {
    if (typeof element == "string") {
        return element + "1"
    }
}));