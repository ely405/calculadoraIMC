function imc(){
  var p = document.getElementById("peso").value;
  var e = document.getElementById("estatura").value;
  alert("Tu IMC ES: " + (p/Math.pow(e,2)).toFixed(2));
}
