let i = Number(prompt("How many grades? "));
let arr = []
let sum = 0
let input = 0;


while(i > 0) {
    input = Number(prompt("Grade?: "));
    if (input > 0 && input < 6) {
        arr.push(input);
    } else {
        console.log("not a real grade!");
    }
    i--;
}

for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    
}
console.log(sum/arr.length)