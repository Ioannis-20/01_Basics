let a = prompt("Wie alt bist du?");
let b = prompt("Wie viel Geld hast du?");
 
let age = Number(a);
let money = Number(b);
 
if (age >= 18 && money >= 12) {
  console.log("Ticket purchased");
}
if (age <= 18 || money <= 12) {
  console.log("Not enough money or you are too young!!");
}