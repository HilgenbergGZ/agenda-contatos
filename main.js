const form = document.getElementById("cadastroContato")
const nomes = []
const telefones = []
let contatos = ""

form.addEventListener("submit", function(e){
    e.preventDefault()

    adicionarContato()
    atualizarLista()
    removerZerosEsquerda()
    formatarTelefone()
})



function adicionarContato () {

    const nome = document.getElementById("inputnomeContato")
    const telefone = document.getElementById("inputContato")

    if (telefone.value.length != 11) {
        alert(`Digite um número válido! exemplo: 41988887777`)
    } else {
        nomes.push(nome.value)
        telefones.push(Number(telefone.value))

        let contato = `<tr>`
        contato += `<td style="margin-left: 12px; margin-right: 12px">${nome.value}</td>`
        contato += `<td>${formatarTelefone(telefone.value)}</td>`
        contato += `</tr>`

        contatos += contato
    }
}

function atualizarLista() {
    const listaContatos = document.querySelector("tbody")
    listaContatos.innerHTML = contatos 
}

function removerZerosEsquerda(input) {
    let inputValue = input.value.toString();

    // Remover os zeros à esquerda
    let novoValor = parseInt(inputValue).toString();
  
    // Atualizar o valor do input com o novo valor sem zeros à esquerda
    input.value = novoValor;
}

// função para formatar o telefone nesse formato: (xx) xxxxx-xxxx
function formatarTelefone(formatar) {
    if (formatar.length !== 11) {
        return "Número de inválido!"
    }

    const ddd = formatar.substring(0, 2);
    const primeiraParte = formatar.substring(2, 7);
    const segundaParte = formatar.substring(7);

    const numeroFormatado = `(${ddd}) ${primeiraParte}-${segundaParte}`;

    return numeroFormatado;
}