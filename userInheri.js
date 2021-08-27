var  user ={
    personName : '',
    password : '',
    login: function(){
        if(this.personName == "zahid" && this.password =="123abc"){
            this.isloggedIn = true;
            return 'Yeah !!!! Log in Successfully!!!!!!';
        }else{
            this.isloggedIn = false;
            return 'Wrong user Id & password';
        }
    },
}

var manager = {
    departNmae : 'IT',
    approveLeaves: function(){
        return "approved leaves";
    },
    dashboard :function(){
        return `${this.personName} dashboard`;
    },
};


manager.__proto__=user;
manager.personName = "zahid";
manager.password = "123abc";

console.log(manager.login());

manager.__proto__= user;

console.log(user);
console.log(manager);
console.log("Department Name:" ,manager.departNmae);
console.log(manager.approveLeaves());
console.log("Dashboard Name:" ,manager.dashboard());

