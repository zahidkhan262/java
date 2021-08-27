// function check(obj){
//     if(Object.prototype.toString.call(obj) === "[Object Array]"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(check(123));
// console.log(check("cat"));
// console.log(check([1,2,3,4,5]));
// console.log(check(['a','b','c','d']));


// check Array or Not

// what happened

console.log("Output:  "  + Object.prototype.toString.call(new (function Custom(){

})))