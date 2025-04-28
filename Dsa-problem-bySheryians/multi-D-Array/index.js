function multiDArray(){
    let arr =[[2,3,3,5,80],[5,9,3,58],[8,29,3,7]]
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr[i].length; j++) {
         process.stdout.write(`${arr[i][j]}`)
          return arr
       }   
       console.log();
       
    }
}

// console.log(multiDArray());mu

// multiDArray()


class MyArr {
    constructor() {
      this.length = 0;
      this.data = {};
    }
// *get the data from the arr
    get(index) {
      return this.data[index];
    }

  //* push the item from the arr
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
//*   pop the item from the arr
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
//*   delete item index base
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
//*   shift item index wise;
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1]; 
      this.length--;
    }
  }
  

const newArray = new Myarr()
newArray.push("hi")
newArray.push("you");
console.log(newArray);

newArray.push("saikat");
// newArray.pop("you");
console.log(newArray);


function muiltiDarr(arr){
    for (let i = 0; i < arr.length; i++) {
     for(let j=0; j<arr[i].length; j++){
        return arr
     }
    }
}