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
  var ceramicLength = parseFloat(
    document.getElementById("ceramicLength").value
  );
  var ceramicWidth = parseFloat(document.getElementById("ceramicWidth").value);
  var areaLength = parseFloat(document.getElementById("areaLength").value);
  var areaWidth = parseFloat(document.getElementById("areaWidth").value);
  var resultElement = document.getElementById("calcResult");

  if (
    isNaN(ceramicLength) ||
    isNaN(ceramicWidth) ||
    isNaN(areaLength) ||
    isNaN(areaWidth)
  ) {
    resultElement.textContent = "Por favor, insira números válidos.";
    return;
  }

  var ceramicSize = (ceramicLength / 100) * (ceramicWidth / 100);

  var areaTotal = areaLength * areaWidth;
  var ceramicQuantity = (areaTotal / ceramicSize).toFixed(2); // Limita o resultado a 2 casas decimais

  resultElement.textContent = "" + ceramicQuantity + " m²";
}


