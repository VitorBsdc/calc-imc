function calcular() {
  var altura = document.getElementById("height").value;
  var peso = document.getElementById("weight").value;
  
  altura = altura / 100;

  const imc = peso / (altura * altura);
  var imcArrendondado = parseFloat(imc.toFixed(2));


  document.getElementById("result").innerHTML = 'IMC: ' + imcArrendondado;

  if(imcArrendondado <= 18.5){
    document.getElementById("resultTwo").innerHTML = 'Baixo peso';
  } else if(imcArrendondado >= 18.5 && imcArrendondado <= 24.99){
    document.getElementById("resultTwo").innerHTML = 'Normal';
  } else if(imcArrendondado >= 25 && imcArrendondado <= 29.99){
    document.getElementById("resultTwo").innerHTML = 'Sobrepeso';
  } if(imcArrendondado > 30){
    document.getElementById("resultTwo").innerHTML = 'Obesidade';
  }
}

function limpar() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('resultTwo').innerHTML = '';
}