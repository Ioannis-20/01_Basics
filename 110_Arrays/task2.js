let arr = [1,5,7,3,5];
let sum = 0;

for (let i of arr) {
  sum = sum + i;
}

let average = sum / arr.length;
console.log(average);
