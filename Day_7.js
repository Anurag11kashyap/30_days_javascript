//Activity 1
//1-
let book={
    title:"A story of yesterday",
    Author:"Sergio cobo",
    year:"2014"
}
console.log(book);

//2-
let book1={
    title:"The God of small things",
    author:"Arundhati Roy",
    year:"1997"
}
console.log("title:",book1.title)
console.log("author:",book1.author)


//Activity 2-
//1-
let book2={
         title:"The God of small things",
         author:"Arundhati Roy",
         year:"1997"
        }

        function Details(){ 
    return book1.title + " by " +  book1.author
    }
 console.log(Details(book1))

//2-
let book3={
              title:"The God of small things",
              author:"Arundhati Roy",
              year:"1997"
             }
    
             function year(){ 
               year=2020
            return year
         }
      console.log(year(book1))

//Activity 3-
//1-
let obj={
 name:"library",
 books: [
    {
      title:"The clear light of day",
      author:"anita desai",
      year:"1980"
    },
    {
      title:"life of pie",
      author:"Yann martel",
      year:"2001"
    },
 ]

}
console.log(obj)

//2-
 let obj1={
  name:"library",
  books: [
     {
       title:"The clear light of day",
       author:"anita desai",
       year:"1980"
     },
     {
       title:"life of pie",
       author:"Yann martel",
       year:"2001"
     },
  ]
}
obj.books.forEach(books =>{
console.log(books.title)
})

//Activity 4
//1-
let book4={
  name:"Harry potter",
  author:"Jk rowling",
  year:"2021",
 Add:function(){
     return this.name + " and " + "year" + this.year
 }
}
 console.log(book.Add())

//Activity 5
//1-
let book5={
    title:"The white tiger",
    author:"Aravind adiga",
    year:"2008"
}
 for(let property in book5){
    console.log(property+ " => ",book5[property] )
 }


//2-
let book6={
    title:"The white tiger",
    author:"Aravind adiga",
    year:"2008"
}
console.log("property",Object.keys(book6))
console.log("property",Object.values(book6))