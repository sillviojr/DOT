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
