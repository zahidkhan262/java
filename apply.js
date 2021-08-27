var student1 = {
    studentName : "Zahid",
    grade : "A",
};
var student2 = {
    studentName : "Sazaid",
    grade : "B",
};

// function at out side the object  

function calculateTotalMarks(sub1,sub2,sub3){
    let totalMarks = sub1 + sub2 + sub3;
    let message = `Hey ${this.studentName}, \n Your total marks is : ${totalMarks}, \n and Grade : ${this.grade}`;
    console.log(message);
}

calculateTotalMarks(student2, 10,20,30)  //direct call

// output --->
// Hey undefined,
//  Your total marks is : [object Object]1020,
//  and Grade : undefined

calculateTotalMarks.call(student1,  20,40,60);   //by call method

// output -----> 
// Hey Zahid,
//  Your total marks is : 120,
//  and Grade : A

calculateTotalMarks.apply(student2 ,  [30,50,70]);  //by apply method
//  output --->
// Hey Sazaid,
//  Your total marks is : 150,
//  and Grade : B
