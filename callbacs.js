const user = [{
    name: "prasanth",
    age:12
},
{
    name:"vasanth",
    age:24
}];
const print = (name ,callback)=>{
    setTimeout(()=>{
        user.forEach(element => {
        callback(element);
    })    
  },5000)
}
const  printdetails=(age,callback)=>{
    setTimeout(()=>{
        user.forEach(element => {
           callback(element)})
  },2000)
}
const seq = print(user,(seq) =>{
    // console.log(seq)
    let data = seq;
    console.log(`hi ${data.name} this is a call back function`);
    console.log(`username:${data.name}`);
    console.log("user age: ",data.age);
    //   printdetails(user,userage=>{
    //     let data = userage;
    //     console.log(data);
    //     console.log(data.age);
    // });
}
);