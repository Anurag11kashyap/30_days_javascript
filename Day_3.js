//Activity 1
//if-Else statements

let x=89;
if(x<0)
    console.log("negative");
else if(x>0)
    console.log("positive");
else
   x=console.log("zero");

//task 2
  let age=35;
  age>=18 ? console.log("eligible to vote") : console.log("not eligible to vote");

 //Activity
 let num=78;
 var num1=97;
 let num2=128;
 if(num>num1 && num>num2)
    console.log("num is greatest among the three numbers");
else if(num1>num2)
    console.log("num1 is greatest among the three numbers");
else
console.log("num2 is greatest among the three numbers");


//Activity 3 switch case


let weekdays = 7;
switch(weekdays){
    case 1:
        console.log("sun");
        break;
    case 2:
        console.log("mon");
        break;
    case 3:
        console.log("tue");
        break;
    case 4:
        console.log("wed");
        break;
    case 5:
        console.log("thur");
        break;
    case 6:
        console.log("fri");
        break;
    case 7:
        console.log("sat");
        break;
    default :
    console.log("not a valid day");
}

//Task2
let marks=53;
switch(true){
    case (marks>90):
        console.log("A");
        break;
    case (marks>80):
        console.log("B");
        break;
    case (marks>70):
        console.log("C");
        break;
    case (marks>60):
        console.log("D");
        break;
    case (marks>50):
        console.log("E");
              
}

//Activity 

let check=40;
(check%2==0)?  console.log("even"): console.log("odd");

//Activity

let year=1600;

if(year%400==0)
    console.log("leap year");
else if(year%4==0 && year%100!=0)
    console.log("leap year");
else
console.log("not a leap year");

