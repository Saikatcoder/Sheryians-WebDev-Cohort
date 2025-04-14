
function findNumber(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
      return num1
    }else if(num2 > num3){
     return num2
    }else{
     return  num3
    }
 }
 


 function findLargestNumber(num1,num2,num3){
    let largest = num1; // i am assuguming num1 is a largestt number ; 

    for(let num of [num2,num3]){
         if(largest < num){
           largest = num
         }
    }
    return largest
 }

