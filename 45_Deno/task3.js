let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let input = prompt("Enter operator (+, -, *, /):");

if (input == "+") {
    console.log("result is " + (a + b));
} else {
    console.log("operator is not plus");
}

if (input == "-") {
    console.log("result is " + (a - b));
} else {
    console.log("operator is not minus");
}

if (input == "*") {
    console.log("result is " + (a * b));
} else {
    console.log("operator is not multiply");
}

if (input == "/") {
    console.log("result is " + (a / b));
} else {
    console.log("operator is not divide");
}


