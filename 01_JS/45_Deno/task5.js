let temperature = prompt("What Temperature?");

if (temperature < -5) {
  console.log("stay inside!");
} 

if (temperature > -5 && temperature <10){
    console.log("you need to wear warm clothes");
}

if (temperature >= 10 && temperature < 20){
    console.log("you can go outside");
}

if (temperature >=20 && temperature < 30){
    console.log("you can go swim");
}

if (temperature > 30){
    console.log("get in the fridge");
}

