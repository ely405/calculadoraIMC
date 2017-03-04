function imc(){
  var w = document.getElementById("peso").value;
  var h = document.getElementById("estatura").value;
  alert("Tu IMC ES: " + (w/Math.pow(h,2)).toFixed(2));
}
