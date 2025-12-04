let password = ("354");
let input = prompt("Was ist dein passwort du netter mensch");

if (password == input) {
    console.log("access granted");
}else if (password !== input) {
    console.log("access denied");
}