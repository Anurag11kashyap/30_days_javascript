//Activity 1
//1-
const arr=[1,2,3,4,5]
console.log(arr);
//2-
const arr1=[4,5,6,7,8,9]
console.log(arr1[0],arr1[5]);

//Activity 2
let arr2=[1,2,3,4,5]
arr2.push(6);
console.log(arr2);
//2-
let arr3=[1,2,3,4,5,6]
arr3.pop();
console.log(arr3);

//task 3:-
let arr4=[1,2,3,4,5,6]
arr4.shift()
console.log(arr4);

//task 4:-

let arr5=[1,2,3,4,5,6]
arr5.unshift(9)
console.log(arr5);


//Activity 3:-
let arr6=[2,3,4,5,6]
let NewArr=arr6.map(function(item){return item*2})
console.log(NewArr);

//2-
let arr7=[1,2,3,4,5,6,7,8]
let NewArr1=arr7.filter(function(item){return item%2==0})
console.log(NewArr1);

//3-
let arr8=[1,2,3,4,5]
let NewArr2=arr8.reduce(function(previous,current){return previous+current})
console.log(NewArr2)

//Activity 4-
//1-
const arr9=[1,2,3,4,5,6]
for(let i=0;i<arr9.length;i++){
    console.log(arr9[i]);
}

//2-
let arr01=[1,2,3,4,5,6]
arr01.forEach(element =>{
console.log(element)
});

//Activity 5-
let arr02=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14]]
for(let i=0;i<arr02.length;i++){
console.log(arr02[i]);}


//2-
let arr03=[[1,2,3,4,5],[6,7,8,9]]
console.log(arr03[1][2])
