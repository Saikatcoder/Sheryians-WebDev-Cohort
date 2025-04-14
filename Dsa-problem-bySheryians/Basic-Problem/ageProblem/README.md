# Age Category Program 🎯

## 📌 Overview  
This program takes a user's age as input and categorizes them into one of the following:  
- **Minor** (Below 18 years)  
- **Adult** (Between 18 and 59 years)  
- **Senior Citizen** (60 years and above)  

## 🛠️ Technology Used  
- **JavaScript (ES6+)**  

## 🚀 How It Works  
The function `ageCalculate(age)` determines the age category using the ternary operator:

```js
function ageCategory(age){
    if(age<=18){
        return `Yo are a minor`
    }else if(age>=18 && age < 60){
        return `You are an adult`
    }else{
        return `You are a senior Citizen`
    }
};
