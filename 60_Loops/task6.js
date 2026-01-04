let count = prompt("How many numbers do you want to enter?");
count = Number(count);
let sum = 0;
 
for (let i = 1; i <= count; i++) {
  let number = prompt("Enter number " + i + "enter");
  number = Number(number);
  sum += number;
}
let average = sum / count;
average = prompt("The averege is:" + average);
 