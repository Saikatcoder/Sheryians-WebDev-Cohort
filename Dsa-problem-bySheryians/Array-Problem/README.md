**Array Problem**

#Calculate Sum and Mean of Arraay Elements
--write a program a that accept an integer n from the user, creates an array of size n, takes inputs to fill the array, and then calculate and return the sum and mean of the array elements.

//input : 5
12345
--output : sum:15
Mean:3.0


# 📃 JavaScript Array Problems

This repository contains solutions to **common array problems** asked in interviews and during practice, written in JavaScript. These include logic building, DSA fundamentals, and optimization techniques.

---

## 🔢 Problem 1: Calculate Sum and Mean of Array Elements

**Description**: Accept an integer `n` from the user, create an array of size `n`, take inputs to fill the array, and then calculate and return the **sum and mean** of the array elements.

**Input**:
```
5
1 2 3 4 5
```
**Output**:
```
Sum: 15
Mean: 3.0
```

```js
function calculateSumAndMean(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let mean = sum / n;
    return [sum, mean.toFixed(1)];
}
```

---

## 🥈 Problem 2: Find the Second Greatest Element

```js
function findSecondGreatestElement(arr) {
    let max = Math.max(arr[0], arr[1]);
    let smax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            smax = max;
            max = arr[i];
        } else if (arr[i] > smax && arr[i] != max) {
            smax = arr[i];
        }
    }
    return smax;
}
```

---

## 🔄 Problem 3: Copy Array and Reverse

```js
function copyAndReverseArray(arr) {
    let copy = [...arr];
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        [copy[startIndex], copy[endIndex]] = [copy[endIndex], copy[startIndex]];
        startIndex++;
        endIndex--;
    }
    return copy;
}
```

---

## ♻️ Problem 4: Reverse Array In-Place (Without Extra Space)

```js
function reverseArrayInPlace(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
```

---

##  Problem 5: Move Zeros to the End

```js
function moveZerosToEnd(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}
```

---

## Problem 6: Move Zeros In-Place (Without Extra Space)

```js
function moveZerosInPlace(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}
```

---

## 🔄Problem 7: Array Left Rotation by 1

```js
function leftRotateByOne(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}
```

---

> 📚 These problems are a part of my structured DSA journey from [Sheryians Coding School](https://www.youtube.com/@sheryians).
Feel free to use this repository to enhance your JavaScript array logic and practice for interviews.

### Contributions are welcome!

