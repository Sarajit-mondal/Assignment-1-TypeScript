function formatString(input: string, toUpper?: boolean){
if(toUpper === true || toUpper === undefined){
  console.log(input.toUpperCase())
}else{
    console.log(input.toLowerCase())
}
}


type Book =
    {
        title : string;
        rating : number;
    }
type Books = Book[] 


const books :  Books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 3.0 }
  ];

function filterByRating(items: Books){
    console.log( items.filter(rat => rat.rating >= 4))
}

  
  filterByRating(books); 
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]





formatString("Hello", false);



