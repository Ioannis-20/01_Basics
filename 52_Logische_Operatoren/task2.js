let a = prompt("How fast in km/h?");
let b = prompt("What Trafficlevel?");
 
let kmh = Number(a);
let TrafficLevel = Number(b);
 
if ((kmh > 80) | (TrafficLevel > 7)) {
  console.log("Slow down");
} else {
  console.log("You are good to go!");
}