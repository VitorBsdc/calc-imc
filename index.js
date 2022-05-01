function calcular() {
  var altura = document.getElementById("height").value;
  var peso = document.getElementById("weight").value;
  
  altura = altura / 100;

  const imc = peso / (altura * altura);
  var imcArrendondado = parseFloat(imc.toFixed(2));


  document.getElementById("result").innerHTML = 'IMC: ' + imcArrendondado;
}
