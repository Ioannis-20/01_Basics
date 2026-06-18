document.getElementById("btn").addEventListener("click", function () {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;

  if (isNaN(value1) || isNaN(value2) || value1 === "" || value2 === "") {
    alert("Achtung, keine Zahl!");
  } else {
    const sum = parseFloat(value1) + parseFloat(value2);
    document.getElementById("result").innerHTML = "Summe: " + sum;
  }
});