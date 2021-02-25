let data;
const getData=()=>{return new Promise((resolve)=>{resolve(999);console.log(0)})}
function* generateF(){
  console.log("666");
   const data=yield "999";
   console.log('data', data)
}

const gen=generateF();
let a3=gen.next();
console.log({a3})
let a1=gen.next();

console.log({a1});
// console.log("value",gen.next());