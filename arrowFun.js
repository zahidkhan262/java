// // regular function

// // var fun1 = function(){
// //     console.log(this);
// // }
// // fun1();
// // output -----> global object

// // var fun2 =()=>{
// //     console.log(this);
// // }
// // fun2();
// // output ----->empty  {}


// // var fun3 =()=> console.log(this);
// // fun3();
// // output -----> {}


// // -------------------------------------------

// var student = {
//     studentName : 'zahid',
//     getStudentName : function(){
//         setTimeout(function(){
//             console.log(this);
//         }, 2000);
// //Refular function ----->> output -----> time object
//         setTimeout(()=>{
//             console.log(this);
//         },2000)
// // Arrow function ---->> output -----> student object
//     }
// };

// student.getStudentName();



// var outer ={
//     stuName :'zahid',

//     inner : ()=>{   //property
//         return (getInnerName =()=>{  //expression
//             console.log(this);

//             setTimeout(function(){
//                 console.log("regular Expression : ", this);
//             },1000);

//             setTimeout(()=>{
//                 console.log("Arrow fun : " , this);
//             },3000)
//         })
//     }
// }
// outer.inner()();


let  isEven =(n)=> n%2 == 0;
    console.log(isEven(8)); //true

let  isOdd =(n)=> n%2 == 1;
    console.log(isOdd(7)); //true



