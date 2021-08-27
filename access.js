let consumer ={
    consumerName: "Zahid",
    email: "zahiidkhan262@gmail.com",
    1: "hello",
};

console.log(consumer.consumerName);
console.log(consumer["consumerName"]);
console.log(consumer["email"]);

consumer.email = "ckhan490@gmail.com";
console.log(consumer["email"]);
console.log(consumer['1']);