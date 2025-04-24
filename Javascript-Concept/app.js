let expenses = [
    { description:"electric bill" ,price: 7000 ,catagory:"utilities"},
    { description : "daily gorceries", price: 3000,catagory:"food"},
    {description: "home lone",price : 20000,catagory:"utilities"},
    {description:"gas",price: 1500,catagory:"food"},
    {description:"internet bill", price: 1600,catagory:"utilities"}
]

let expensesReport = expenses.reduce((repot, expense)=>{
   repot[expense.catagory] += expense.price
   return repot
},{})

// console.log("expense report :" , expensesReport);

let tasks = [
    {description: 'white report', completed: false, priority:2},
    {description: 'send email', completed: true, priority:3},
    {description: 'prepare presentation', completed: true, priority:4},
    {description: 'white report', completed: false, priority:2},
]

let pendingsortedTask = tasks.filter((task)=>!task.completed).sort((a,b)=> a.priority - b.priority)

// console.log(pendingsortedTask);


let movieRating =[
    {title:"bhool bhuliya", rating:[4,5,3]},
    {title:"phir hera phiri", rating:[5,5,4]},
    {title:"panchyat", rating:[4,5,4]},
    {title:"mirzapur", rating:[3,4,2]},
]


let averageRatig = movieRating.map((movie)=>{
    let total  = movie.rating.reduce((sum, rating)=> sum + rating,0)
    let average = total / movie.rating.length
    return {title : movie.title, averageRatigs: average.toFixed(2)}
})

// console.log(averageRatig);



let person1 = {
    name: "saikat",
    greet : function() {
        // console.log(`hellow: ${this.name}`);
    }
}

let person2 = {
    name: "sumit"
}

const bindgreet = person1.greet.bind(person2);

// console.log(bindgreet());




const animal = {
    name: "Tiger",
    sound: "Roaaarrr!",
    roar: function () {
      console.log(`${this.name} says ${this.sound}`);
    }
  };
  
  const zoo = {
    keeper: "Ramu",
    makeAnimalRoar: animal.roar
  };

  
// console.log(animal.roar.call(zoo));

  

class Libery{
    constructor(){
        this.books =[]
    }
    addbooks(books){
        this.books.push(...books)
    }
    listAllbooks(){
        this.books.forEach((book,index)=>{
            console.log(`${index +1} ${book.name} by ${book.author}`);
            
        })
    }
}

class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author =author;
        this.isreadingStatus =false;
    }
}




// mobie shop

class Mobileshop{
    constructor(){
        this.mobiles = []
    }
    addmobile(mobie){
        this.mobiles.push(this.mobiles)
    }
    removeMobile(){}
}

class Mobile{
    constructor(name, model,price, color){
        this.id = Math.floor(Math.random()*100000);
        this.model = model;
        this.price = price;
        this.name = name;
        this.color = color;
        this.sim = [];

    }
    getMobileInfo(){
        console.log(`${this.id} -${this.model} - ${this.name}- ${this.color} `); 
    }
    insertSim(sim){
        if(this.sim === 2){
            console.log("sorry you alredy have 2 sim installed");
            return;
        }
        this.sim.push(sim);
    }
}

class Sim{
    constructor (brand,balance){
        this.brand =brand;
        this.balance = balance;
    }
    addBalancde(balance){
        if(balance < 0){
            return `pelease enter a valid balance`
        }
        this.balance += balance
    }

}


let myMobileShop = new Mobileshop();
let samsung = new Mobile("Samsung S21", "S21",120000,"black");
let bsnl = new Sim("BSNL", 500);

samsung.insertSim(bsnl);
console.log(myMobileShop.addmobile(samsung));




