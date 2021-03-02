interface book {
  name: string;
  price: number;
  isAvailable: boolean;
}

interface books{
    [index:string] : book
}

let booksStore : books = {};

booksStore['DS'] = {
    name: "Data Science",
    price:2000,
    isAvailable : true
}

booksStore['ML'] = {
    name: "Python for Datascience",
    price: 2500,
    isAvailable:true
}

console.log(booksStore['ML'])



let booksShelf: book;

booksShelf['name'] = "AI";
booksShelf['price'] = 5000;
booksShelf['isAvailable']= false;
 console.log(booksShelf);