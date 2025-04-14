function userSum(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        return "Please enter a valid number"
    }
    let sum = num1 + num2
    if(sum % 2=== 0){
        return `Even Sum ${num1} + ${num2}= ${sum}`
    }else{
        return `Odd sum ${num1} + ${num2}= ${sum}`
    }
}

function userSum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {  
        return "Please enter a valid number";
    }
    
    let sum = num1 + num2;
    let result = { 
        0: "Even Sum", 
        1: "Odd Sum" 
    };

    return `${result[sum % 2]}: ${num1} + ${num2} = ${sum}`;
}


console.log(userSum(20,56));