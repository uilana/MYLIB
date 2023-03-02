// написать функию bind
// пример работы
// let name = 'михаил'
const person01 = { name: 'Михаил', age: 22 }
    // const person02 = { name: 'Елена', age: 19, job: 'smm' }


function logPerson(person) {
    // console.log(this.job);
    console.log(`person: ${this.name}, ${this.age}, ${person.job}`);
}


function bind(person, myFun) {
    return function(...a) {
        console.log(a);
        myFun.apply(person, a)
    }
}
bind(person01, logPerson)({ job: 'Frontend' })


// bind(person02, logPerson)

// let person3 = {
//     name: "Fed",
//     year: "2003",
//     age: ageCount,
//     logInfo: function(job, tell) {
//         console.log(this.name, this.year, job, tell);
//     }
// }
// let person4 = {
//     name: "Dew",
//     year: "2000"
// }

// function ageCount() {
//     let thisYear = new Date()
//     console.log(this);

//     // console.log(thisYear - person[]);
// }

//bind, call,apply - изменение контекста(this)
// person3.logInfo("master")
// person3.logInfo.bind(person4, "master")()
//person3.logInfo.call(person4, "master")
// person3.logInfo.apply(person4, ["master", "89999999997"])

// Object.prototype.myFunc = function() {
//     console.log("qw");
// }

//цепочка
// function count(a) {
//     return function(b) {
//         console.log(100 + a + b);
//     }
// }
// count(10)(20)
// let num = 20