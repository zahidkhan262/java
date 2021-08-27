var student ={
    studentName : 'zahid',
    email : 'zahid00@gmail.com',
    branch : 'CSE',
    physics : 70,
    maths : 75,
    chemistry : 65,
};

// Acces by For In loop

// for(let prop in student)

// console.log(prop, student[prop]);

// output ----> 
// studentName zahid
// email zahid00@gmail.com
// branch CSE 

// for In loop with if statement

// for(let prop in student){
//     console.log(prop);
// }
 for(let prop in student){
     if(prop =="physics" || prop=="maths" || prop=="chemistry"){
         student[prop]+= 5;
     }
 }
 console.log((student))