
function calculate(num1,num2,operator){
    if(isNaN(num1) || isNaN (num2)) return `please enter a valid number`
    if(operator == "+"){
        return `${num1}+ ${num2}=`+ (num1 + num2) ;
    }else if(operator == "-"){
        return `${num1}-${num2}=`+ (num1 - num2) ;
    }else if(operator == "*"){
        return `${num1}x ${num2}=`+ (num1 * num2) ;
    }else if(operator == "/"){
        return `${num1} / ${num2}=`+ (num1 / num2) ;
    }

 }



//  using object maping
function Calculator(num1,num2,operator){
      if(isNaN(num1) || isNaN (num2)) return `please enter a valid number`;

      let calculate = {
        "+" :()=> num1 + num2,
        "-" :()=> num1 - num2,
        "*" :()=> num1 * num2 ,
        "/" :()=> num1 / num2,
      }

      return calculate[operator] !== undefined ? `${num1} ${operator} ${num2}= ${calculate[operator]}` : "Invalid operator! Please use +, -, *, or /";
}


for (let i = 0; i <=6; i++) {
  for (let j = 0; j <= 5; j++) {
    
    console.log("x");
    
    
  }
  console.log();
  
}


 let n ; //prompt("enter a number")
  for (let i = 1; i <=n; i++) {
    
    for (let j = 1; j<=n+i-1; j++) {
      
      process.stdout.write("* ")
      
    }

    console.log();  
  }


  function evenorOdd(num){
    let sum = 0;
    if(isNaN(num)) return `enter a valid number`
    for (let i = 1; i <=num; i++) {
      if(i % 2 === 0 ){
        sum += i
      }
     
    }
    return sum
  }


  function sumOfAllDegitsOfNumber(n){
    let sum =0;
    while(n>0){
      sum+= n % 10
      n = Math.floor(n/10)
    }
    return sum
  }

  function sumofArr(arr){
    let sum =0;
    for (let i = 1; i <=arr.length-1; i++) {
      sum += i
    }
    return sum
  }

  function primeNumber(num){
   
  }