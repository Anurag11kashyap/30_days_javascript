//Activity 1
//1-
function checknum(){   
 (num%2==0)? console.log("even"): console.log("odd");
}
 checknum(num=19);

//2-
 function square(){
   return(num*num);
 }
ans=square(num=4);
console.log(ans);

 //Activity 2
 //1-
 function maximum(){
    let num1=7,num2=12;
    (num1>num2)? console.log(num1,"num1 is maximum") : console.log(num2,"num2 is maximum");
 }
 maximum();
//2-
function AddString(){
    let str1="hello";
    let str2=" world";
   return (str1.concat(str2));
}
ans=AddString();
console.log(ans);

//Activity 3-
//1-
let Arrowadd = (num1,num2) => {
    return num1+num2;
}
result =Arrowadd(num1=3,num2=4);
console.log(result);
//2-
let checkCh = (string,character)=>{
   return string.includes(character);
}
console.log(checkCh("hello","h"));

//Activity 4
function mul (a=5,b){
return a*b;
}
ans=mul(1,5);
console.log(ans);
//2-
function greetMsg (name,age=18){
    console.log("hello", "Mr/Mrs" ,name,age ,"how are you");
}
greetMsg("Anurag");

//Activity 5
//1-
function callfun(func,n){
    for(let i=0;i<n;i++){
         func();        
    }
}
function Hello(){
    console.log("hello");
}
 console.log(callfun(Hello,5));
//2-
function func(f, g) {
    return function (value) {
      return g(f(value));
    }
  }
  const add = (x) => x + 1;
  const mul = (x) => x * 2;
  
  const addThenmul = func(add, mul);
  const ans = addThenmul(5)
  console.log(ans);