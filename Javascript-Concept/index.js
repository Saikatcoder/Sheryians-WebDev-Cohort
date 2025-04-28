//*1. Problem: create an array containing different types of teas.
let arr = ["red tea", "green tea", "lemon tea", "blue tea", "cold tea", "ice tea"];


//*2. problem: Add "black Tea " from the list of teas.

arr.push("olong tea")
console.log(arr);

//*3. problem: Remove "oolong Tea from the lest of teas"
arr.pop("olong tea")
console.log(arr);
const index = arr.indexOf("olong tea");
if(index > -1){
    arr.splice(index, 1)
}

//*4.  problem Filter the list to only include teas that are caffeinated.

function caffeinatedTea(arr){
    let caffeintea = []
   arr.filter((tea)=> tea != "herbal tea");
   caffeintea.push(arr)
   return caffeintea
}
//*5. problem sort the list of teea in alphabetical order.
const  test = ["🐔","🥚"]
console.log(test.sort());

//*6. problem use a for loop to print each type of tea in the array.
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
    
}

//*6. problem use a for loop to count how many teas are caffeinated (excluding "harbal tea")?
let caffeintea = 0;
// for(let i =0; i<arr.length;i++){
//     if(teas[i] !== "herbel tea"){
//         caffeintea++
//     }
// }

//*7. use a for loop to create a new array with all tea names in uppercase?
const teas = []
for (let i = 0; i < arr.length; i++) {
  teas.push (arr[i].toUpperCase())  
}
//*8.problem use a for loop to fild the tea name with the most characters?
let longestTea = ""
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].length > longestTea.length){
            longestTea = arr[i]
       }
    }

//*9. problem use a for a loop to reverse the order of teas in the array?
    let reverseArr =[];
    for(let i = arr.length-1; i>=0; i--){
        reverseArr.push(arr[i])
    }

//*problem: Create an object represending a type of tea with properties for name , type and caffeine content
let nameofTeas ={
    name: "lemon tea",
    type: "green tea",
    caffine : "low"
}

//*problem: Access and print the name and type properties of the tea object.
// console.log(nameofTeas.name);

//*Problem : Add a new Property origin to the tea object,
nameofTeas.origin = "Assam"

// *Problem : Cahange the caffeine leve; of the tea object to "Medium"
nameofTeas.caffine = "medium"

// *Problem: Remove the type property from the tea object
delete nameofTeas.type

// *Problem: Check if the tea object has a prperty origin 


// *Problem: Use a for...in lop to print all property origin,
for(let teas in nameofTeas){
    console.log(teas + ":" + nameofTeas[teas]);
    
}

// *Problem: Cereate a nested object rperesenting defferent types of teas and their Properties
const myTeas = {
    greentea:{
        name: "green Tea",
        cup:{
            one:"1",
            two: "2"
        }
    },
    blackTea:{
        name: "Black Tea"
    }
}



// *problem Create a copy of the tea object.
const teaCopy = {...myTeas}
// console.log(teaCopy);
teaCopy.greentea.cup.one =4

const newObj = new Object(myTeas)
console.log(newObj);
