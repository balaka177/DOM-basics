let myobj={
    name:"Vinod",
    age:26
};
let myobj_stri=JSON.stringify(myobj);

localStorage.setItem('myobj',myobj_stri);
console.log(myobj_stri);