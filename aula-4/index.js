function searchCEP() {
    let cep = prompt("Qual CEP gostaria de buscar?");
    if (!/^\d{5}-?\d{3}$/.test(cep)) { // Verifica formato de CEP válido (XXXXX-XXX ou XXXXXXXX)
        alert("CEP inválido! Por favor, insira um CEP no formato XXXXX-XXX ou XXXXXXXX.");
        return;
    }
    let url = `https://brasilapi.com.br/api/cep/v1/${cep}`;3780

    // Fazer a requisição:
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar o CEP. Verifique se o CEP é válido.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados do CEP:", data);

            // Montar mensagem condicionalmente
            let mensagem = `Sua cidade é ${data.city}`;
            if (data.neighborhood) {
                mensagem += `, no bairro ${data.neighborhood}`;
            }
            if (data.street) {
                mensagem += `, na rua ${data.street}`;
            }

            alert(mensagem);
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Ocorreu um erro ao buscar o CEP. Tente novamente.");
        });
}

searchCEP();
