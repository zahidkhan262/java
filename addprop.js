var student = {};
// console.log(student); // // output-----> {}

student.marks = 70;

// console.log(student);

student.getResult = function(){
    if(this.marks >=75) return "Pass";
    else {
        return "Fail";
    } 
};

console.log(student);
// output-----> { marks: 70, getResult: [Function (anonymous)] }
console.log(student.marks);
// output-----> 70
console.log(student.getResult);
// output-----> [Function (anonymous)]