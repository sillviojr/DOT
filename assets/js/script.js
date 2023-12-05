// script.js
function buscarCEP() {
  var cep = document.getElementById("cep").value;

  // Verifique se o CEP é válido antes de fazer a consulta
  if (cep.length === 8 && /^\d+$/.test(cep)) {
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    // Realize a requisição HTTP usando Fetch
    fetch(url)
      .then((response) => response.json())
      .then((data) => preencherEndereco(data))
      .catch((error) => console.error("Erro ao buscar CEP:", error));
  } else {
    alert("CEP inválido. Insira um CEP válido para buscar o endereço.");
  }
}

function preencherEndereco(data) {
  // Preencha os campos de endereço com os dados retornados pela API
  document.getElementById("endereco").value = data.logradouro || "";
  document.getElementById("bairro").value = data.bairro || "";
  document.getElementById("cidade").value = data.localidade || "";
}

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButton = document.getElementById("addToCartBtn");

  addToCartButton.addEventListener("click", function () {
    addToCartButton.classList.add("addToCartAnimation");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".btn");
  var cartItemCountElement = document.getElementById("cartItemCount");
  var cartIconContainer = document.getElementById("cartIconContainer");
  var cartItemCount = 0;

  // Adiciona um ouvinte de evento de clique a cada botão "adicionar ao carrinho"
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.add("addToCartAnimation");

      // Atualiza o contador
      cartItemCount++;
      cartItemCountElement.textContent = cartItemCount;
    });
  });
});

// CALCULADORA

function calculateCeramic() {
  var ceramicLengthCM = parseFloat(
    document.getElementById("ceramicLength").value
  );
  var ceramicWidthCM = parseFloat(
    document.getElementById("ceramicWidth").value
  );
  var areaLength = parseFloat(document.getElementById("areaLength").value);
  var areaWidth = parseFloat(document.getElementById("areaWidth").value);
  var perdaInput = parseFloat(document.getElementById("perdaInput").value) || 0; // Valor padrão é 0 se não houver entrada
  var resultElement = document.getElementById("calcResult");

  if (
    isNaN(ceramicLengthCM) ||
    isNaN(ceramicWidthCM) ||
    isNaN(areaLength) ||
    isNaN(areaWidth)
  ) {
    resultElement.textContent = "Por favor, insira números válidos.";
    return;
  }

  // As dimensões da cerâmica estão em centímetros, não é necessário ajustar
  var ceramicLength = ceramicLengthCM;
  var ceramicWidth = ceramicWidthCM;

  // Convertendo as dimensões da cerâmica para metros quadrados
  var ceramicSize = (ceramicLength / 100) * (ceramicWidth / 100);
  var areaTotal = areaLength * areaWidth;

  // Calcula a área com a perda especificada
  var areaComPerda = areaTotal * (1 + perdaInput / 100);

  console.log("ceramicLength:", ceramicLength);
  console.log("ceramicWidth:", ceramicWidth);
  console.log("ceramicSize:", ceramicSize);
  console.log("areaTotal:", areaTotal);
  console.log("areaComPerda:", areaComPerda);

  var ceramicQuantity = areaComPerda / ceramicSize;

  resultElement.textContent = ceramicQuantity.toFixed(2) + " m²";
}
