let a = prompt("What is your heartrate?");
let b = prompt("What is your age?");
 
let HeartRate = Number(a);
let age = Number(b);

if (age < 30 && HeartRate < 100) {
  console.log("Light exercise");
}
if (age > 30 && HeartRate > 100) {
  console.log("Hard working!!");
}