var formularioPrincipal = document.dniLetter;

var letterOptions = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni
var userLetter
var calculatedLetter;

function validateDNI() {
  dni = document.getElementById("number").value;
  if (dni == null || dni == undefined || dni == "") {
    window.alert("Error: el campo DNI no puede estar vacío");
    document.getElementById("number").value = "";
  } else if (isNaN(dni)) {
    window.alert("Error: en el campo DNI solo pueden insertarse números");
    document.getElementById("number").value = "";
  } else if (!dni.match(/(\d{7,8})/)){
    //se aceptan 7 números por si un usuario con DNI que empieza en 0 no quiere ponerlo
    window.alert("Error: el DNI ha de contener 7 u 8 dígitos");
    document.getElementById("number").value = "";
  } else {
    dni = parseInt(dni);
    return true;
  }
  return false;
}

function validateLetter() {
  userLetter = document.getElementById("letter").value;
  if (userLetter == null || userLetter == undefined || userLetter == "") {
    window.alert("Error: el campo letra no puede estar vacío");
    document.getElementById("letter").value = "";
  } else if (userLetter.match(/([(+:!?,;).¡¿"\d\s])/)) {
    window.alert("Error: en el campo letra solo pueden insertarse letras");
    document.getElementById("letter").value = "";
  } else if (userLetter.length >= 2) {
    window.alert("Error: en el campo letra solo puede introducirse una letra");
    document.getElementById("letter").value = "";
  } else {
    userLetter = userLetter.toUpperCase();
    return true;
  }
  return false;
}

function showResults() {
  if (!validateDNI()) {
    return false;
  }
  if (!validateLetter()) {
    return false;
  }
  calculatedLetter = letterOptions[dni % 23];
  if (userLetter == calculatedLetter) {
    document.getElementById("p1").innerHTML = ("<h1 class=okTest> La letra " + calculatedLetter + " es correcta </h1>");
  } else {
    document.getElementById("p1").innerHTML = ("<h3 class=koTest> La letra " + userLetter + " no coincide con la calculada " + calculatedLetter + "</h3>");
    document.getElementById("number").value = "";
    document.getElementById("letter").value = "";
  }
  return false;
}
