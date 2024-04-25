const form = document.getElementById('form-contatos');
const imgEmoji = '<img src=imagens/afirmativo.png alt="Emoji joinha" />';
const nomes = []
const numeros = []
let linhas = '';

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
})

function adicionaContato() {
    const inputNome = document.getElementById('nome-completo');
    if (validaNome(inputNome.value) === false){
        alert("Nome completo por favor.");
    } else {
        const inputTelefone = document.getElementById('telefone');
        
        nomes.push(inputNome.value);
        numeros.push(parseInt(inputTelefone.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${imgEmoji}</td>`;
        linha += '</tr>';
        
        linhas += linha;
        
        inputNome.value = '';
        inputTelefone.value = '';
        atualizaTabela();
    }
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('tabela');
    corpoTabela.innerHTML = linhas;
}
