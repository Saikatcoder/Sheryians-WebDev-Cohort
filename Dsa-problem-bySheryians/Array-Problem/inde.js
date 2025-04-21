// Calculate the sum of Mean of Array
function calculateSumAndMean(arr, n) {
    // Write your logic here
   let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let mean = sum / n;
    return [sum, mean.toFixed(1)]; 
}


// Find the Secoud Gretest elemnt
function findSecondGreatestElement(arr) {
    // Write your logic here
    let max = Math.max(arr[0], arr[1]);
    let smax =Math.min(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        
        if(arr[i]>max){
            smax = max;
            max = arr[i]
        }else if(arr[i] > smax && arr[i] != max){
            smax = arr[i]
        }
    }
    return smax
}


// Copy Array and Reverse
function copyAndReverseArray(arr) {
    let copy = [...arr],
     startIndex=0;
     endIndex = arr.length -1
    // Write your logic here
    while(startIndex<endIndex){
        [copy[startIndex],copy[endIndex]]= [
            copy[endIndex],
            copy[startIndex]
            ];
            startIndex++;
            endIndex--;
    }
    return copy
}


//Array Reverse without using Extra Space 
function reverseArrayInPlace(arr) {
    let i= 0; j= arr.length-1;
    // Write your logic here
    while(i<j){
        
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] =temp;
        i++
        j--
    }
    return arr
}


// Move Zeros
function moveZerosToEnd(arr) {
    // Write your logic here
   let j = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}


// Move Zero Without using Extra Space
function moveZerosInPlace(arr) {
    // Write your logic here
    let j = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}


//Array Left Rotation by 1
function leftRotateByOne(arr) {
    // Write your logic here
    
}


// Linear Search in Array
function linearSearch(arr, target) {
    // Write your logic here
    
}

