// var person ={
//     personName : 'zahid',
//     birthDay : function(){
//         console.log("current object : " + this);
//         return `happy birthday : ${this.personName}`;
//     },
// };

// console.log(`person : ${person}`);
// console.log(person.birthDay());
// console.log(person.personName);



var person ={
    personName : 'zahid',
    birthDay : ()=>{
        console.log("current object : " + this);
        return `happy birthday : ${this.personName}`;
    },
};

console.log(`person : ${person}`);
console.log(person.birthDay());
console.log(person.personName);
