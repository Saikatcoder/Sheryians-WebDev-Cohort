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


//* Create a simple object **Person** with a method **greet**. Then create an object **Student** that inherits from Person and has its own method study. Demonstrate prototype inheritance.


function Person(name){
 this.name = name;
 console.log(name + "1");
 
}

Person.prototype.greet = function (name, subject){
    Person.call(this,name);
    this.subject = subject;
}


if(!Array.prototype.mymap){
    Array.prototype.mymap = function (usefn){
        const result = []
        for(let i=0; i<this.length; i++){
          const newvalue =  usefn(this[i],i)
          result.push(newvalue)
        }
        return result
    }
}


let arr = [8,8,9,4,5]

const double = arr.mymap((e)=> e *3)
console.log(double);

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function (callback){
        const result = []
        for (let i = 0; i < this.length; i++) {
            if(callback(this[i])){
                result.push(this[i])
                console.log(result);  
            }
        }
     return result
    }
}


const primenumber = arr.myfilter((e)=> e % 3 === 0)
console.log(primenumber);
console.log(arr);







if (!window.fetch) {
    window.fetch = function (url, options = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
  
        xhr.open(options.method || 'GET', url, true);
  
        // Set headers
        if (options.headers) {
          for (let key in options.headers) {
            xhr.setRequestHeader(key, options.headers[key]);
          }
        }
  
        xhr.onload = function () {
          const response = {
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
            url: xhr.responseURL,
            text: () => Promise.resolve(xhr.responseText),
            json: () => Promise.resolve(JSON.parse(xhr.responseText))
          };
          resolve(response);
        };
  
        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };
  
        xhr.send(options.body || null);
      });
    };
  }


  //* Q1. Create an object for a mobile phone with properties: brand, model, price.
        const mobile = {
            brand : "Samsung",
            model : "s21",
            price : 120000
        }
  //* Q2. Add a new property: "warranty" = "1 year".
        mobile.warranty = "1"
        const warranty = {...mobile, warranty:"1"}
        console.log(warranty);
  //* Q3. Delete the "price" property.
  delete mobile.price


  let weather = ["rainy", "sunny", "cloudy"]

  for(let i = 0; i<weather.length; i++){
    if(weather[i] === "rainy"){
        return "Today is rainy day☔"
    }else if(weather[i] === "sunny"){
        return `today is ${weather}, so enjoy 😎`
    }else if (weather[i]=== "cloudy"){
        return `tody is cloudy day 😶‍🌫️`
    }
  }


  // Array of students
const students = [
    { name: "Amit", marks: 78 },
    { name: "Sara", marks: 88 },
    { name: "Ravi", marks: 45 },
  ];
  
  // Q: Filter students who passed (marks >= 50)
  for(let i=0;i<students.length;i++){
    
  }
  // Q: Return an array of names only
  // Q: Calculate average marks
  

  let numberOFGest = 4

  let pizzaSize = ["small","medium","large"];
//   small<=2
// medium<=5
//large

function divedePizza(numberOfPeouple){
        if(numberOfPeouple <=2){
            return `dont west money buy small size pizza `
        }
}


