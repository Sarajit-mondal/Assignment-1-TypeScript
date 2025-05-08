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
  
 
  


class Vehicle {
    private make : string;
    private year : number;

    constructor(make : string,year:number){
        this.make = make;
        this.year = year; 
    }

    getInfo():string{
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model : string;

    constructor(make:string,year:number,model: string){
     super(make,year)
     this.model = model
    }

    getModel():string{
        return `Model: ${this.model}`;
    }
}





function processValue(value: string | number): number{
    if(typeof value === 'string' ){
        return value.length
    }else{
        return value * 2
    }
}





interface Product {
    name: string;
    price: number;
  }

  const products :Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null
    }
    let highestPriceProduct = products[0]; 

    for (const product of products) {
      if (product.price > highestPriceProduct.price) {
        highestPriceProduct = product;
      }
    }

    return highestPriceProduct;
    
  }






const formatValue = formatString("Hello", false);
const filterValue = filterByRating(books);
const concatValue =concatenateArrays([1, 2], [3, 4], [5]);
const myCar = new Car("Toyota", 2020, "Corolla");
const procesValue = processValue(7);
 const mostExpensiveProduct = getMostExpensiveProduct(products);  

console.log(formatValue)
console.log(filterValue)
console.log(concatValue)
console.log(myCar.getInfo())
console.log(myCar.getModel())
console.log(procesValue)
console.log(mostExpensiveProduct)