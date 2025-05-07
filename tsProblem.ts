function formatString(input: string, toUpper?: boolean):string{
if(toUpper === true || toUpper === undefined){
  return input.toUpperCase()
}else{
    return input.toLowerCase()
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

function filterByRating(items: Books):Book[]{
    return items.filter(rat => rat.rating >= 4)
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
    return ([] as T[]).concat(...arrays);
}
  
 
  




const formatValue = formatString("Hello", false);
const filterValue = filterByRating(books);
const concatValue =concatenateArrays([1, 2], [3, 4], [5]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]


console.log(formatValue)
console.log(filterValue)
console.log(concatValue)