const resultado = document.querySelector("#resultado");

const Calcular = () => {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);

  if (isNaN(peso) || isNaN(altura)) {
    resultado.innerHTML = `<p>Preencha todos os campos obrigatórios</p>`;
  }

  if (peso >= 10 || peso >= 300 || altura < 0.5 || altura > 2.5) {
    resultado.innerHTML = `<p>Insira valores válidos para peso e altura.</p>`;
  }

  const imc = (peso / (altura * altura)).toFixed(1);

  if (imc < 18.5) {
    resultado.innerHTML = `<p>IMC: ${imc}. Abaixo do peso</p>`;
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado.innerHTML = `<p>IMC: ${imc}. Peso normal</p>`;
  } else if(imc >= 25 && imc < 29.9){
    resultado.innerHTML = `<p>IMC: ${imc}. Sobrepeso</p>`;
  } else if(imc >= 30 && imc < 34.9){
    resultado.innerHTML = `<p>IMC: ${imc}. Obesidade Grau 1</p>`;
  } else if(imc >= 35 && imc < 39.9){
    resultado.innerHTML = `<p>IMC: ${imc}. Obesidade Grau 2</p>`;
  }else {
    resultado.innerHTML = `<p>IMC: ${imc}. Obesidade Grau 3</p>`;
  }
};

const Limpar = () => {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);

  peso.textContent = "";
  altura.textContent = "";
  resultado.textContent = "";
}