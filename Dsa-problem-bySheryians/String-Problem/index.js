// is palimdrom 
// input: MADAM , Hellow
function isPalimdrom(str){
    let pallindrome = true;
    let i = 0 ;
    let j = str.length-1;
   while(i<j){
    if(str[i] != str[j]){
        pallindrome = false;
        break;
    }
    i++
    j--
    }
return pallindrome ? "Yes" : "No"
}



// Toggle each alphabet of String
// input : aaDfgeHF outPut : AAdFGEhf
function toggleString(str){
    let ans ="";
      for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        if(charCode>=65 && charCode <=90){
             ans +=  String.fromCharCode(charCode +32);
        }else if(charCode>=97 && charCode<=122){
             ans += String.fromCharCode(charCode -32);
        }
      }
      return ans;
}

// Taken an array of string words and a string prefix .print the number of string in words that contain pref as prefix. 
// input = ["Pay","attention","practice","attend"] pref ="at"

function fiendPrefix(arr, pref){
    let count =0;
    for(let i=0; i<arr.length; i++){
         if(arr[i].startsWith(pref)){
            count++
         }
    }
    return count;
}

// Capaitalize first and last character of each word like :
// hellow bhai kyse ho : Hello Bhai Kyse Ho

function CapaitalizeFirstAndLastChar(str){
     let splitStr = str.split(" ")
     let ans ="" ;
     for(let i=0; i<splitStr.length; i++){
        let word = splitStr[i];
        if(word.length<=2){
            ans += word.toUpperCase()+ " ";
        }else{
            ans +=  word.charAt(0).word.subString(1,word.length-1)+word.charAt(word.length-1).toUpperCase()+ " ";
        }
     }
 return ans;
}








// practice
function ispalimdorm(str){
    let isplaimdom = true;
    let i=0; let j= str.length-1;
   while(i<j){
    if(str[i] != str[j]){
        isPalimdrom = false;
        break;
    }
    i++
    j--
   }
   return isplaimdom ? "yes" : "no"
}


function toggleAlphabet(str){
    let ans ="";
    for (let i = 0; i < str.length; i++) {
        let asci = str.charCodeAt(i);
        if(asci>=65 && asci<=90){
            ans += String.fromCharCode(asci+32);
        }else if(asci >=97 && asci<=122){
            ans+=String.fromCharCode(asci-32)
        }
    }
}





function isPalimdrom(str){
    let PlaimDrom= true;
    let i=0;
    let j = str.length;
    while(i<j){
        if(str[i] != str[j]){
            PlaimDrom = false;
            break;
        }
        i++
        j--
    }
    return  PlaimDrom ? "YES" : "NO"
}



function ispalimdrom(str){
    let palimdrom = true;
    let i = 0 , j= str.length-1
    while(i<j){
        if(str[i] != str [j]){
            palimdrom =false;
        }
        i++
        j--
    }
    return palimdrom ? "yes" : "no"
}



function togglestr(str){
    let ans ="";
    
}


function palimdromStr(str){
    let ispalimdom = true
    let left = 0;
    let right = str.length-1;
  while(left<right){
    if (str[left] != str[right]) {
        ispalimdom =false
    }
    left++
    right--
  }
  return 
}



function StrCount(str){
    let freqArr =  new Array(123).fill(0);
    for (let i = 0; i < str.length; i++) {
     let ascciValue = str.charCodeAt(i);
     freqArr[ascciValue] = freqArr[ascciValue]+1
    }
   
    for(let i=0; i<freqArr.length; i++){
        if(freqArr[i]>0){
            return (String.fromCharCode(i)+"=>"+freqArr[i])
        }
    }
    return freqArr
}

console.log(StrCount("absbdssklsddsklnfv"));



