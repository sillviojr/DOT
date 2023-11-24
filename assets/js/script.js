// script.js
function buscarCEP() {
    var cep = document.getElementById('cep').value;

    // Verifique se o CEP é válido antes de fazer a consulta
    if (cep.length === 8 && /^\d+$/.test(cep)) {
        var url = `https://viacep.com.br/ws/${cep}/json/`;

        // Realize a requisição HTTP usando Fetch
        fetch(url)
            .then(response => response.json())
            .then(data => preencherEndereco(data))
            .catch(error => console.error('Erro ao buscar CEP:', error));
    } else {
        alert('CEP inválido. Insira um CEP válido para buscar o endereço.');
    }
}

function preencherEndereco(data) {
    // Preencha os campos de endereço com os dados retornados pela API
    document.getElementById('endereco').value = data.logradouro || '';
    document.getElementById('bairro').value = data.bairro || '';
    document.getElementById('cidade').value = data.localidade || '';
}


document.addEventListener('DOMContentLoaded', function () {
    // Obtenha o botão "adicionar ao carrinho" pelo id
    var addToCartButton = document.getElementById('addToCartBtn');

    // Adicione um ouvinte de evento de clique ao botão
    addToCartButton.addEventListener('click', function () {
        // Adicione uma classe para acionar a animação
        addToCartButton.classList.add('addToCartAnimation');

        // Você pode querer remover a classe após uma determinada duração
        // setTimeout(function () {
        //     addToCartButton.classList.remove('addToCartAnimation');
        // }, 1000); // Ajuste a duração da animação conforme necessário
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.btn'); // Todos os botões "adicionar ao carrinho"
    var cartItemCountElement = document.getElementById('cartItemCount'); // O elemento do contador
    var cartIconContainer = document.getElementById('cartIconContainer'); // O contêiner do ícone do carrinho

    var cartItemCount = 0; // Inicializa o contador

    // Adiciona um ouvinte de evento de clique a cada botão "adicionar ao carrinho"
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Adiciona uma classe para acionar a animação
            button.classList.add('addToCartAnimation');

            // Atualiza o contador
            cartItemCount++;
            cartItemCountElement.textContent = cartItemCount;

            // Você pode querer remover a classe após uma determinada duração
            // setTimeout(function () {
            //     button.classList.remove('addToCartAnimation');
            // }, 1000); // Ajuste a duração da animação conforme necessário
        });
    });
});



// CALCULADORA 

function calculateCeramic() {
    var ceramicLength = parseFloat(document.getElementById('ceramicLength').value);
    var ceramicWidth = parseFloat(document.getElementById('ceramicWidth').value);
    var areaLength = parseFloat(document.getElementById('areaLength').value);
    var areaWidth = parseFloat(document.getElementById('areaWidth').value);
    var resultElement = document.getElementById('calcResult');

    // Verifica se as entradas são números válidos
    if (isNaN(ceramicLength) || isNaN(ceramicWidth) || isNaN(areaLength) || isNaN(areaWidth)) {
        resultElement.textContent = 'Por favor, insira números válidos.';
        return;
    }

    // Converte as medidas da cerâmica para metros quadrados
    var ceramicSize = (ceramicLength / 100) * (ceramicWidth / 100);

    // Calcula a quantidade de cerâmica necessária
    var areaTotal = areaLength * areaWidth;
    var ceramicQuantity = (areaTotal / ceramicSize).toFixed(2); // Limita o resultado a 2 casas decimais

    // Exibe o resultado incluindo a unidade de medida
    resultElement.textContent = '' + ceramicQuantity + ' m²';
}


