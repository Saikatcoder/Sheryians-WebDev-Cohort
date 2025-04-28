### Study Javascript Basic.

**1. Difference between var, let, const**
--Because of Temporal Dead Zone (TDZ), even though JavaScript has created a reference in memory during hoisting, you cannot access let and const variables before their declaration — if you try, JavaScript throws a ReferenceError (not undefined, not null).
``
console.log(a);  // undefined
var a = 10;
var ka memory allocate ho jata hai hoisting phase me.

//Isliye undefined milta hai, error nahi.

//* 2. let and const:

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
``
**2. Temporal Dead Zone kya hota hai?**
-- Temporal Dead Zone (TDZ) refers to the time period between the hoisting of a let or const variable and its actual initialization. During this time, the variable exists in memory but cannot be accessed. If you try to access it before initialization, it results in a ReferenceError. Accessing the variable is only allowed after the initialization
**3. Make a program to show block scope and function scope.**
``
function BlockScope(){
    console.log(fnscope)

    var fnscope = "i am function scope"


    let blockscope = "i am block scope"
}
    console.log (blockscope)
``
**4. Can we redeclare variables? Where?**

**1. List all JS primitive types.**
*string* , *Boolean*, *Number*,*Null*
*Undefine* , *Integer*, *Symbol*,*Operators*

**2. typeof null kya deta hai? Why?**
-- type of null null he deta he , 
**3. Number('123') kya karega? String(456)? Boolean(0)?**
**4. == vs === difference code example.**
**5. What will be output of: "5" + 1, "5" - 1, "five" * 2**


### 1. Prototype Chain Question:
## Q: Create a simple object Person with a method greet. Then create an object Student that inherits from Person and has its own method study. Demonstrate prototype inheritance.

### 2. Changing Prototype:
## Q: Write a program that creates a constructor function Car with a method startEngine. Change the prototype of Car to add a new method stopEngine. Demonstrate how the prototype works by calling the stopEngine method on an instance of Car.

### 3. Inheritance via Prototypes:
## Q: Create a constructor function Employee and Manager. The Manager should inherit from Employee using prototype-based inheritance. Add a work method to Employee and a manage method to Manager. Create an instance of Manager and call both methods.

### 4. Object.create() vs Constructor Function:
## Q: Explain how the Object.create() method is different from creating an object using a constructor function. Demonstrate both ways of creating objects and compare how the prototypes are set.

### 5. Prototype Methods:
## Q: Given a constructor function Book, create a method getDetails on its prototype that returns the details of the book. Create an instance of Book and call the method.

## 6. Check If Object Inherits from Another Object:


## 6: Write a function that checks if an object inherits from a certain prototype. Use Object.getPrototypeOf() to demonstrate how prototype chains work.

## 7. Review and Practice More Examples: Try solving these questions yourself and experiment with more complex inheritance patterns.

## 8. Understand Object Methods: Dive deep into Object.getPrototypeOf(), Object.setPrototypeOf(), and Object.create().

## 9. Code Challenges: Once you are confident with prototypes, practice on platforms like LeetCode, Codewars, or HackerRank to reinforce your learning with real-world problems.

## 10. Interview Preparation: Focus on problem-solving questions that require you to demonstrate prototype inheritance in JavaScript.

