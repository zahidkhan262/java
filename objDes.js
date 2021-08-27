//  object destructuring 

var person ={
    fName : 'zahid',
    lName : 'khan',
    age : 22,
    city: 'Noida',
};

// var {fName: fn, lName:ln, age: a} = person;

// console.log(fn)
// console.log(ln)
// console.log(a)

// also

// var {fName,lName, age} =person;

// we can also initialize new value 
// var {fName,lName, age, email = "zahidkhan@gmail.com",} =person;


// Also use Rest Operator (...Rest)
var {fName,lName, age, email = "zahidkhan@gmail.com", ...other} =person;


console.log(fName)
console.log(lName)
console.log(age)
console.log(email)
// console.log(...other)
console.log(person)
