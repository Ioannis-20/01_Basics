let temperature = Math.floor(Math.random() * 36); 
let humidity = Math.floor(Math.random() * 60);    

console.log("Temperature:", temperature);
console.log("Humidity:", humidity);

if (temperature >= 20 && temperature <= 25 && humidity < 60) {
    console.log("Perfect day for outdoor activities!");
} else if (temperature < 10 || temperature > 35) {
    console.log("Consult a doctor before exercising");
} else {
    console.log("Maybe stay indoors today.");
}