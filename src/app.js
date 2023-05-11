const formulario = document.querySelector('#formularioCad');
const botaoPrincipal = document.querySelector('#botaoPrincipal');
const listaDespesa = document.querySelector('#despesas');
const listaReceita = document.querySelector('#receitas');
var totalDespesa = 0
var totalReceita = 0
const storage = JSON.parse(localStorage.getItem('item')) || [];

storage.forEach((element) =>{
    criaReceita(element);
})

formulario.addEventListener('submit' , (evento) => {
    evento.preventDefault();
    
    const valor = evento.target['valor'];
    const nome = evento.target['nome'];
    const tipo = evento.target['tipo'];

    //construindo e adicionando o item
    const item = {
        "nome" : nome.value ,
        "valor" : valor.value ,
        "tipo" : tipo.value
    }
    storage.push(item);
    
    if (parseInt(item.valor) > 0 && item.nome != ""){
        criaReceita(item);
    }
    else{
        alert("Valor ou nome inválido")
    }

    // **LocalStorage**
    const json = JSON.stringify(storage);
    localStorage.setItem("item" , json);
    
    //Fazendo o campo ficar vazio após o submit
    valor.value = ""
    nome.value = ""
})

function criaReceita(item) {

    //Essa função é responsável por criar o Elemento e por fazer o somatório do total acada loop.
        const novoItem = document.createElement('li');
        const divValor = document.createElement('div');

        novoItem.classList.add("itemCadastrado");
        divValor.classList.add("reais");
        divValor.innerHTML = item.valor;
        novoItem.innerHTML += item.nome;
        novoItem.appendChild(divValor);

        if(item.tipo === 'despesa'){
            listaDespesa.appendChild(novoItem);
            totalDespesa += parseFloat(item.valor);
        }
        else{
            listaReceita.appendChild(novoItem);
            totalReceita += parseFloat(item.valor);
        }

        calculaTotal(totalReceita, totalDespesa) 
}


function calculaTotal(receita,despesa) {
    const totalRemanescente = document.querySelector('#totalRemanescente');
    const mostraDespesa = document.querySelector('#totalDespesa');

    const remanescenteFormatado = receita - despesa;
    const despesaFormatado = despesa;

    mostraDespesa.innerHTML = despesaFormatado.toFixed(2);
    totalRemanescente.innerHTML =  remanescenteFormatado.toFixed(2)
}

botaoPrincipal.addEventListener('click' , (e) => {
    confirm('Você confirma que todos os dados estão corretos?')
})