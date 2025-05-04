// generating random integer array
let randomNums = [];
for (let i = 0 ; i <10 ; i++ )
    randomNums[i] = Math.floor(Math.random()*100);
console.log("original array: ", randomNums);

// Exercise 1: Reverse an Array
let start = 0;
let end = randomNums.length - 1;
while (start < end) {
    let temp = randomNums[start];
    randomNums[start] = randomNums[end];
    randomNums[end] = temp;
    start++;
    end--;
}

console.log("sorted array",randomNums);


// Exercise 2: Find the Maximum and Minimum in an Array
let min = randomNums[0];
let max = randomNums[0];
for ( let i = 1; i<randomNums.length; i++){
    if (randomNums[i] > max) {
        max = randomNums[i];
    }
    if (randomNums[i] < min) {
        min = randomNums[i];
    }
}
console.log("min: "+min +", max: "+max);

// Exercise 3: Remove Duplicates from an Array
const n = [6,3,5,6,6,3,1,2,10]
let uniqueIndex = 0;

for (let i = 1; i < n.length; i++) {
    if (n[i] !== n[uniqueIndex]) {
        uniqueIndex++;
        n[uniqueIndex] = n[i]; 
    }
}

let uniqueArray = n.slice(0, uniqueIndex + 1);
console.log(uniqueArray);











