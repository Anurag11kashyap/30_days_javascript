//Activity 1- template literals
//1- 
let name="Rohan"
let age=20

let str=`Hello, my name is .name, and I am .age year old`
console.log(str)

//2-
let msg=`Hello everyone,I am learing javascript and  taken a 30 days javascript challenge in which i am
going to do 30 different-different activities along with their sub activities to get the most the concept of javascript in a systematic manner.`

console.log(msg)

//Activity 2- destructing array and object
//1-
let num=[10,20,30,40,50]
let[a,b] = num
console.log(a,b)

//2-
let book=
{
   title:"Life of pie",
   author: "Yann martel",
   year :2001
}

let{title,author} = book
console.log("title:",title)
console.log("author:",author)

//Activity 3- spread and rest operator
//1- spread op
let elements=[10,20,30]
let elements1=[40,50,60]
let Added=[...elements,...elements1]
console.log(Added)

//2- rest op
function numbers(a,b, ...numbers){
    console.log("a",a)
    console.log("b",b)
    console.log(numbers)
}
numbers(1,2,3,4,5,6,7,8,9);

//Activity 4-

//1- default parameter
function product(a,b=1){
    return a*b
}
console.log(product(3))
console.log(product(3,4))

//Activity 5-
//1- Enhanced obj literals
let name1="lamborghini"
let color="black"
let speed=305

let car={name1,color,speed}
console.log(car)


//2-obj with computed property names
let statement1="hello"
let statement2= {
       statement3:"this is my javascript code",
       [statement1]:"Hello everyone"
};
console.log(statement2.hello +"  " + statement2.statement3)