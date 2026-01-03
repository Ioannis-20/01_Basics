let a = prompt("Was hast du für eine Note?");
let b = prompt("Was ist deine Anwesenheit?");
let c = prompt("Hast du extra Aufgaben?");

let grade = Number(a);
let attendance = Number(b);
let extraCredit = Number(c);

if (grade < 0 || grade > 100) {
  console.log("false input");
}
if (attendance < 0 || attendance > 100) {
  console.log("false input");
}
if (extraCredit > 10 || extraCredit < 0) {
  console.log("false Input");
}
if ((grade >= 80 && attendance >= 90) || extraCredit >= 5) {
  console.log("Eligible for advanced exam.");
} else console.log("Not eligible for advanced exam.");
