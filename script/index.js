// function fetch(){
//     return 'api data'
// }
// let info = null

// fetch 

// fetch ('https://randomuser.me/api?results=10') //fetches the API
// .then (data => data.json()) //Converts the data into usable data
//  // How the data is usable
// .then (data =>{
//     info = data 
//  })
//  .catch(doesntmatter => {
//     console.log()
//     throw new Error('get better wifi ya goob')
//  })

//async and await

// async function fetchData(){
//     let data = await fetch('https://randomuser.me/api?results=10')
//     let {results} = await data.json()
//     console.log(results)
// }
// fetchData()

//Destructuring[arrays and objects]

//for objects
let person = {
    name:'Bob',
    age : 40
}
// let {name} = person
// let {age} = person
// console.log(first);

//or

let{name,age} = person

//for arrays[based on the oorder of the array]
let people = ['Bob','john','garth']
let [first,second,third] = people //let first = people[0]

// console.log(third);

//fetch api
let result // to use the data globally
async function fetchData() {
    let {results} = await ( await fetch('https://randomuser.me/api?results=10')).json()
    // let {results} = await data.json()
    result = results
    // console.log(result)
    writeData()
}

// fetchData()
// let tbody = document.querySelector('tbody')
// function writeData() {
//    result.forEach(item =>{    //call back fuction
//         tbody.innerHTML += `
//         <tr>
//             <td>${item.id.value}</td>
//             <td>${item.name.first}</td>
//             <td>${item.name.last}</td>
//             <td>${item.location.city}</td>
//             <td><img src="${item.picture.thumbnail}" alt=""></td>
//             <td>${item.dob.age}</td>
//             <td>${item.dob.date}</td>
//         </tr>
        
//                           `
//    }) 
// }

//rest operator

function sum(...theArgs) {
    let total = 0 
    for (const arg of theArgs){
        total += arg
    }
    return total
}
// console.log(sum(5,2,1))

function moreArgs(a,b,...otherArgs) {
    // console.log(a);
    // console.log(b);
    // console.log(otherArgs);
}
moreArgs(10,9,3,5,7,9,8)

//default parameters
function addition(a,b=2) {
    return a*b
}
// console.log(':'+addition(5));

let tbody = document.querySelector('tbody')
const books = [  
    {    title: "The Great Gatsby",    
         author: "F. Scott Fitzgerald",    
         year: 1925,    
         genre: "Literary Fiction",    
         pages: 180,    
         publisher: "Charles Scribner's Sons",    
         isbn: "978-0743273565"  

    },  

    {    title: "To Kill a Mockingbird",
         author: "Harper Lee",
         year: 1960,    
         genre: "Southern Gothic",    
         pages: 281,    
         publisher: "J. B. Lippincott & Co.",    
         isbn: "978-0446310789"  
    }, 

    {    title: "1984",    
         author: "George Orwell",    
         year: 1949,    
         genre: "Dystopian Fiction",    
         pages: 328,    
         publisher: "Secker & Warburg",    
         isbn: "978-0451524935"  
    },  

    {    title: "Pride and Prejudice",    
         author: "Jane Austen",    
         year: 1813,    
         genre: "Romance",    
         pages: 279,    
         publisher: "Thomas Egerton",    
         isbn: "978-0141439513"  
    },  

    {    title: "The Catcher in the Rye",    
         author: "J.D. Salinger",    
         year: 1951,    
         genre: "Coming-of-age Fiction",    
         pages: 214,    
         publisher: "Little, Brown and Company",    
         isbn: "978-0316769488"  
        }
    ]; 

books.map((book)=>{
        tbody.innerHTML += `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.publisher}</td>
        <td>${book.year}</td>
        <td>${book.genre}</td>
        <td>${book.pages}</td>
        <td>${book.isbn}</td>
        </tr>
    `
})
let search = document.querySelector('input')

let find = books.filter(books => books !== '1984')
console.log(find);

