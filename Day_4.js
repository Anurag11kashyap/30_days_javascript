//Activity 1
for(let num=1;num<=10;num++){
    console.log(num);
}

//2-
let table=5;
for(let i=1;i<=10;i++){
    console.log(table*i); 
}

//Activity 2
//1-
let numb=10,sum=0;
 while(numb){
sum=sum+numb;
numb--;
 }
 console.log(sum);

//2-
let number=10;
while(number){
    console.log(number);
    number--;
}

//Activity 3

let num1=5;
do{
    console.log(num1);
    num1--;
}
    while(num1>0);

//2-

let num2=7,fact=1;
do{
    fact=fact*num2;
    num2--;
}
while(num2);
console.log(fact);

//Activity 4
let n=5,star="*";
for(let row=1;row<=n;row++){      
   console.log(star.repeat(row));
}

//Activity


for(let i=1;i<=10;i++){
   if(i==5) continue;
    console.log(i);  
}

//2-
 for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
 }