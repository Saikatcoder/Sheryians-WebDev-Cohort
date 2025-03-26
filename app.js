// let interval; // To store the interval reference

// function startButton() {
//     let value = document.getElementById("input").value;
//     let countdown = parseInt(value);
//     let timerDisplay = document.getElementById("timer");

//     if (isNaN(countdown) || countdown <= 0) { 
//         alert("Please enter a valid number!"); 
//         return; 
//     }

//     clearInterval(interval); // Clear any existing timer before starting a new one

//     timerDisplay.innerHTML = countdown; // Display initial value

//     interval = setInterval(() => {
//         countdown--; // Decrease value
       
//         timerDisplay.style.color = getRandomColor()
//         document.body.style.backgroundColor = getRandomColor(); 
//         // getRandomColor();
//         if (countdown === 0) { 
//             clearInterval(interval); 
//             timerDisplay.innerHTML = "Time's up! ⏳";
//         } else {
//             timerDisplay.innerHTML = countdown;
//         }

//     }, 1000);
// }
// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// function resetTimer() {
//     clearInterval(interval);
//     document.getElementById("timer").innerHTML = "";
//     document.getElementById("input").value = "";
// }

// function pausebutton(){
//     clearInterval(interval)
// }

// do{
// let num1 = Number(prompt("enter first number"));
// let num2  = Number(prompt("enter secound number"));

// let operator = prompt("enter a valid operator(+,-,*,/)")

// switch(operator){
//     case '+':
//         console.log("result: "+ (num1 + num2));
//     break   
//     case '-':
//         console.log("result: "+ (num1 - num2));
//     break   
//     case '*':
//         console.log("result: "+ (num1 * num2));
//     break  
//     case '/':
//         if(num2 !==0)
//         console.log("result: "+ (num1 / num2));
//     break  
// }while ()


function sumOfDigits(num){
   return num.toString().split('').map(Number).reduce((acc,digit)=>acc + digit,0);
}

console.log(sumOfDigits(55912672) );


let pricesUSD = [10, 20, 30, 40, 50];
let pricesINR = pricesUSD.map((num)=> num *83)
console.log(pricesINR); // [830, 1660, 2490, 3320, 4150]

let numbers = [2, 4, 6, 8, 10];
let squares = numbers.map((num)=> num*num)
console.log(squares); // [4, 16, 36, 64, 100]

let student = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Emily", lastName: "Davis" }
  ];
  
  let fullNames = student.map((students)=>{
   let Fullname =  students.firstName + " " + students.lastName
   return Fullname
  })
  console.log(fullNames); 

  let celsiusTemps = [0, 10, 25, 30, 40];
  let fahrenheit = celsiusTemps.map((cel)=>{
   return Math.floor((cel*9/5)+32);
  })
  console.log(fahrenheit);
  
  let names = ["ali", "sara", "ahmed", "zara"];
  let Upeertcase = names.map((upper)=> upper.toUpperCase());

  let lowerCase = names.map((upper)=> upper.toLowerCase())
  console.log(Upeertcase);
  console.log(lowerCase);

  let title= names.map((title)=>{
   return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
  })
  console.log(title);
  

  let number =  [10, 15, 20, 25, 30]
  let doubleNumeber = number.map((num)=>{
    if(num % 2 ==0){
        return `even number`+ num*2;
    }else{
        return `odd number` + num*3;
    }
    
  })

  console.log(doubleNumeber);
  

  let squerRoot = number.map((num)=>{
    return`{number:${num} , square:${num * num }, sqrt: ${Math.sqrt(num).toFixed(2)}}`
  })

  console.log(squerRoot);
  

  let prices = [100, 250, 399, 799, 1299];
  let gstCalculate = prices.map((gst)=>{
    return ( gst + (gst * 18 / 100 ));
  })
  console.log(gstCalculate);
//   ₹500 se kam wale products par 5% discount milega.
// ₹500 ya usse zyada wale products par 10% discount milega.
let dic = 5;
  let discount = prices.map((pric)=>{
    if(pric < 500){
        return pric - (pric * 5 / 100);  // 5% discount
    } else {
        return pric - (pric * 10 / 100); // 10% discount
    }
  })

  console.log(discount);
  

  let marks = [95, 82, 76, 59, 47, 88, 91, 67,30,95,85,69,87,56,20,76,52,32,88,90];

  let greads = marks.map((gread)=>{
    if(gread >= 90){
        return "A+"
    }else if(gread >= 80){
        return "A"
    }else if (gread >= 70){
        return "B"
    }else if(gread >= 60){
        return "C"
    }else if(gread >=50){
        return "D"
    }else{
        return `You donot pass the exam , better luck next time 👍`
    }
  })

  console.log(greads);
  
  let people = [
    { name: "ali", age: 20 },
    { name: "sara", age: 25 },
    { name: "ahmed", age: 30 },
    { name: "zara", age: 35 }
];

let modify = people.map(mody=>{
   
    return   {
            names : mody.name.toUpperCase(),
            age : mody.age + 5
        };
    
});

console.log(modify);


let students = [
    { name: "Ali", marks: 99 },
    { name: "Sara", marks: 82 },
    { name: "Ahmed", marks: 45 },
    { name: "Zara", marks: 76 },
    { name: "Bilal", marks: 32 }
];

let category = students.map((student) => {
    if (student.marks >= 90) {
        return {
            name: student.name + " - Excellent🔥",
            marks: student.marks
        };
    } else if (student.marks >= 75) {
        return {
            name: student.name + " - Good🚀",
            marks: student.marks
        };
    } else if (student.marks >= 50) {
        return {
            name: student.name + " - Average✅",
            marks: student.marks
        };
    } else {
        return {
            name: student.name + " - Needs Improvement❌",
            marks: student.marks
        };
    }
});

console.log(category);


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 },
    { name: "Smartwatch", price: 10000 }
];


let disCountPrice = products.map((disc)=>{
    return {
        name : disc.name,
        price :disc.price - (disc.price * (20/100)),
    }
})
console.log(disCountPrice);


let scolrShip = students.map(student =>{
   if(student.marks >= 90){
    return {
       name : student.name,
       marks :  "Scholarship" 
    } 
   }else if(student.marks >= 75){
    return {
        name : student.name,
        marks :  "Merit"
     } 
   }else{
    return {
        name : student.name,
        marks :  "General"
     } 
   }
} )

console.log(scolrShip);

let employees = [
    { name: "Rahul", salary: 60000 },
    { name: "Priya", salary: 45000 },
    { name: "Amit", salary: 25000 },
    { name: "Neha", salary: 50000 }
];

let employeeBouns = employees.map((emp)=>{
    if(emp.salary >= 50000){
        return {
            name: emp.name,
            salary: emp.salary,
            bonus : emp.salary * 20/100,
            perks: "Health"
        }
    }else if(emp.salary >=30000){
        return {
            name: emp.name,
            salary: emp.salary,
            bonus : emp.salary * 15/100,
            perks: "Meal"
        }
    }else{
        return {
            name: emp.name,
            salary: emp.salary,
            bonus : emp.salary * 10/100,
            perks: "Free Transport"
        }
    }
})
console.log(employeeBouns);


let employee = [
    { name: "Rahul", experience: 12 },
    { name: "Priya", experience: 7 },
    { name: "Amit", experience: 3 },
    { name: "Neha", experience: 10 }
];

let promotion = employee.map((promot)=>{
    if(promot.experience >= 10){
        return{
            name:promot.name,
            experience : promot.experience,
            promotion: 'Promoted to Manager'
        }
    }else if(promot.experience>= 5){
        return{
            name:promot.name,
            experience : promot.experience,
            promotion: 'Promoted to Senior Developer"'
        }
    }else{
        return{
            name:promot.name,
            experience : promot.experience,
            promotion: "Keep Working Hard!"
        }
    }
})

console.log(promotion);

let sum = 0;
function printNumber (num){
    for(let i=0;i<=num; i++ ){
        sum  += i
        
    }
    console.log( sum);
}
printNumber(9875);



function abcd(cd){
    let executed = false;
    return function(){
       if(!executed){
        executed = true;
        cd()
       }
    }
}
let newfun = abcd(()=>{
    console.log("some code which should be executed");
})

newfun()


let ISBN = 1401601499

let arr = [];

arr.push = ISBN;

function isbnFunction(arrs){
    if(arrs.length !== 10){
        return false
    }
    let sum =0

    for (let i = 0; i < 10; i++) {
        const element =parseInt (arrs[i]);
        
        if(isNaN(arrs)){
            return false;
        }

        sum += element * (i +1);
    }
    return sum % 11 === 0
}

console.log(isbnFunction(1286595783))
 

let x = 1289638575;

let sam = 0

let isvalid = true;

if(x.length !==10){
    console.log("enter a valid number");
}else{
    for(let i=0; i<10; i++){
        let digit = (x[i]);
        if(digit === "x" || digit === 10){
            digit = 10
        }else{
            digit = Number(digit);
            if(isNaN(digit)){
                console.log("contains non mumeric character");
                isvalid = false;
                break;
            }
        }
        sum += digit*i
    }
    if(isvalid) (sum % 11 ===0 ) ? console.log("valid isbn"): console.log("invalid ");
    ;
    
}


function isvalidISBN10(isbn){
    isbn = isbn.toString();

    if(isbn.length !== 10){
        return false
    }
    let sum = isbn.split("").map((digit, index)=>{
        if(digit === "X")
            return 10;
        return parseInt(digit) * (index + 1);
    })
    .reduce((acc,val)=> acc + val, 0);

    return sum % 11 === 0

}


let a =12;
let b =18;

// function HCF_GDC(a,b){
//     let factor = 1;
//     for (let i = 0; i <=Math.min(a,b); i++) {
//         if(i% a === 0 && i% b=== 0){
//             factor = i;
//         }
        
//     }
//     return factor;
// }
// console.log(HCF_GDC(12,18));



function HCF_GCD(a, b) {
    let factor = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            factor = i; // ✅ Highest common factor store karo
        }
    }
    return factor;
}

console.log(HCF_GCD(12, 18)); // ✅ Output: 6


function HarsedNumber(n){
    let num = n.toString();
    let sum = 0
    for (let i = 0; i <num.length; i++) {

        sum +=parseInt(num[i]);
    }
    if(n % sum === 0){
        return "Harshad Number"
    }else{
      return  "Not a Harshad Number";
    }
    console.log(sum);
    
}

console.log(HarsedNumber(19));
 


function harsedNumber(n){
    let sum = 0;
    let num = n
    while(n>0){
        sum += n % 10
        n = Math.floor(n / 10);  // ✅ Last digit hata do
    }
    return num % sum === 0 ? "HarshadNumber" : "Not a HarshadNumber";
}

console.log(harsedNumber(18))



function hcf(a,b){
    let factor = 1;
    for (let i = 0; i <= Math.min(a,b); i++) {
        if (a% i ===0 && b % i === 0) {
            factor = i;
        }
    }
    return factor;
}

console.log(hcf(12,18));



function harsednumber(n){
    let sum = 0;
    let num = n
    while(n>0){
        sum = n % 10;
        n = Math.floor( n / 10);
    }
    if(num % sum === 0){
        return "HarsedNumber"
    }else{
      return  "not a harsed number"
    }
    // return num;
}

console.log( harsednumber(25));


function evennumber(n){
    let i =1
    while (n >=i) {
        if(i% 2===0){
            
            console.log(i);
            
        }
        i++
    }

}

console.log(evennumber(10))


// function sumofNumber(n){
//     let i =1;
//     // let sum = ;
//     while(n >= i){
//        if(i % 2 === 0){
//         return "its prime number"
//        }
//         i++
//     }

// }
// console.log(sumofNumber(5))


function atm(amount){
    let rupes = [2000,500,200,100,50,20,10,5,2,1];

   let result =  rupes.map((note)=>{
        let count = Math.floor(amount/note)
        amount %= note;
        return `${note}  x ${count}`
    });
    return result.join("\n")
}

console.log(atm());




function movierating(rate,name){
    let movie = name
    if(rate >= 4.5 && rate <=5.0){
        return `${movie} is a Superhit ${rate}`
    }else if(rate >= 3.5){
          return `${movie} is a Hit ${rate}`
    }else if(rate >= 2.0){
          return `${movie} is a Semi-Hit ${rate}`
    }else{
       return `${movie} is a Flop ${rate}`
    }
}
console.log(movierating(3.4,"RRR"))



function leapyear(year){
    let islepear = false;
    if(year % 4 === 0){
        if(year % 100 ===0){
            if(year % 400 == 0){
               return islepear = true;
            }else{
               return islepear = false;
            }
        }else{
          return  islepear = true;
        }
    }else{
       return islepear = false
    }
}

console.log(leapyear(200));



function leapYear(year){
    if(year% 4 === 0 && year%100!==0 || year% 400 ===0){
        return `${year} is leapyear`
    }else{
        return `${year} not leapyear`
    }
}
console.log(leapYear(1600))


function salary(gender, serviceYear, qualifications) {
    if (gender === "Male") {
        if (qualifications === "Postgraduate" && serviceYear >= 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 15000`;
        } else if (qualifications === "Graduate" && serviceYear >= 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 10000`;
        } else if (qualifications === "Postgraduate" && serviceYear < 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 10000`;
        } else if (qualifications === "Graduate" && serviceYear < 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 7000`;
        }
    } else if (gender === "Female") {
        if (qualifications === "Postgraduate" && serviceYear >= 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 12000`;
        } else if (qualifications === "Graduate" && serviceYear >= 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 9000`;
        } else if (qualifications === "Postgraduate" && serviceYear < 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 10000`;
        } else if (qualifications === "Graduate" && serviceYear < 10) {
            return `Gender: ${gender}\nYear of Service: ${serviceYear}\nQualifications: ${qualifications}\nSalary: 6000`;
        }
    }
    return "Invalid Input"; // Agar input galat ho toh ye return karega
}

console.log(salary("Male", 18, "Graduate")); 
console.log(salary("Female", 8, "Graduate"));   



let numberarr = [56,-89,5,-5,86,7,-96,-23,52,75,8,-9]

let possitiveNumber = numberarr.filter((positive)=> {
    return  positive>=0;
})

console.log(possitiveNumber);
let snamearr = ["saikat","rahul","sonu","deep","fsrk","sumit","srijit","pritam","Deep","sakit"]

let findName = snamearr.filter((sname)=>{
    return sname[0].toLowerCase() === "s"
})
console.log(findName);

let mixedarr = ["saikat",56,45,"rahul",86,"sonu","deep","fsrk",5,8,9,70]

let findnum = mixedarr.filter((num)=>{
    return Number(num)
})
console.log(findnum);

let school = [
    { name: "Amit", age: 20 },
    { name: "Neha", age: 17 },
    { name: "Ravi", age: 22 },
    { name: "Pooja", age: 16 },
    { name: "Rahul", age: 18 },
    { name: "Simran", age: 21 }
];

let adult = school.filter((student)=>{
   return  student.age >=18
})
console.log(adult);

let city = ["Mumbai", "Delhi", "New York", "Dubai", "London","ocity"]

let findcity = city.filter((ocity)=>{
    return ocity.toLowerCase().includes("o")
})
console.log(findcity);

for (let i = 0; i < city.length; i++) {
    
    
}

const users = [
    { name: "Rahul", email: "rahul@gmail.com" },
    { name: "Mohan", email: "mohan@yahoo.in" },
    { name: "Ayesha", email: "ayesha@hotmail.com" },
    { name: "Sita", email: "sita@outlook.net" }
];

let findgamil = users.filter((user)=> user.email.endsWith("gmail.com"));
console.log(findgamil);

let mark = [85, 42, 90, 67, 50, 76, 33, 95, 88, 29];

let findmarks = mark.filter((num)=> num %2 === 0 && num >= 50)
console.log(findmarks);

function minmaxvalue (arr){
   let min =Math.min(...arr)
   let max = Math.max(...arr);
   return `maxvalue= ${max} , minvalue =${min}`
}





function findNumber(arr){
    let even = arr.filter((element)=> {
      if(element >= 50){
        return element
      }
    })
    return even;
}

console.log(findevenNumber([56,89,12,75,63,78,0,-12,78,-96,-2,6])); 

 
function average(arr){
    let sum =0;
    let average = 1;
    for(let i=0; i<arr.length;i++){
        sum +=arr[i]
        average = sum / arr.length
    }
    return average
}


function unionArray(arr1,arr2){
    let uniquearr = [];
    uniquearr.push(arr1);
    for(let i=0; i<arr1.length;i++){
        for(let j=1;j<arr2.length; j++){
        if(arr1[i] === arr2[j] && !arr1.includes(arr[i])){
            return 
        }else{
            return uniquearr.push(arr2[j])
        }

        }      
    }

}



function carEngine(){
    let fule = 100

    return ()=>{
        if (fuel > 0) {
            fuel--; 
            return `Fuel remaining: ${fuel}%`;
        } else {
            return `Tank is empty! Please refill.`;
        }

    }
}
lass Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    // Ye method ek string return karega
    getCarInfo() {
      return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
  }
  
  // Object banaya
  let car1 = new Car("Toyota", "Corolla", 2022);
  




class person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}


let person1 = new person("Saikat", 20)




function StrongNumber(n){
    let num = n;
    let fact = 1;
    let ans =0
   while(n>0){
    let rimender = num %10
    for(let i = 1; i<=num;i++){
        fact *= i
    }
    ans = ans + fact
    n = Math.floor(n/10)
   }
   if(n== ans) console.log("strong number")
    else console.log("no strong number")
    
}



