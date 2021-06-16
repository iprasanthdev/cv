user = [{
    name: "prasanth",
    age:12
},{
    name:"vasanth",
    age:24
}]
const print = (name ,callback)=>{
    setTimeout(()=>{
        console.log(`hi ${name} this is a call back function`);
        callback({username:name})
    },5000)
}
const  printdetails=(age)=>{
    setTimeout(()=>{
        user.array.forEach(element => {
           console.log(element.age);           
        });
    },2000)
}
const seq=print("prasanth",seq=>{
    console.log(seq);
});