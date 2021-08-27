// what is hoisting ?
//  Hoisting in javascript , A variable can be used before it has been declared.


// function Add(){
//     console.log(answer);
//     var answer =2;
// }
// Add();
// output -----> undefined

// in js , we can declare a variable after it has been used because variable declaration that use VAR.
// This means that a variable can be initialized before it is declare.


// var temp = 'hi';
// function display(){
//     var temp ;
//     console.log(temp);
//     temp ="bye";
// }
// display();

// output -----> undefined

//  Because here var temp = 'bye'  is function scoped variable.
// 

var temp = 'hi';
function display(){
    var temp ='function scoped variable' ;
    console.log(temp);
    var temp ="bye";
}
display();
// output ---->
// function scoped variable