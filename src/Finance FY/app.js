const formulario = document.querySelector('#formularioCad');
const botaoPrincipal = document.querySelector('#botaoPrincipal');
const listaDespesa = document.querySelector('#despesas');
const listaReceita = document.querySelector('#receitas');
const listaMes = document.querySelector('#listaMes');
const totalRemanescente = document.querySelector('#totalRemanescente');
const mostraDespesa = document.querySelector('#totalDespesa');

var mesVig = ""
var totalDespesa = 0;
var totalReceita = 0;

const storage = JSON.parse(localStorage.getItem('item')) || [];

listaMes.addEventListener('click' , (evento) => {
    mesVig = evento.target.value;
    
    // Zerando tudo a cada click
    totalDespesa = 0;
    totalReceita = 0;
    listaDespesa.innerHTML = "";
    listaReceita.innerHTML = "";
    totalRemanescente.innerHTML =  "";
    mostraDespesa.innerHTML = "";
    
    //Imprime os itens iniciais. condicional verifica mes escolhido
    storage.forEach((element) =>{

        if(element.mes === mesVig){
            criaReceita(element);
        }
    })
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
        "tipo" : tipo.value,
        "mes" : mesVig
    }
    
    console.log(item.valor)
    if (item.valor === ""){
        alert("Valor inválido")
    }
    else if (item.nome === ""){
        alert("Nome inválido")
    }
    else if (item.mes === ""){
        alert("Favor selecionar um mês!")
    }
    else {
        storage.push(item);
        criaReceita(item);
        
        //Fazendo o campo ficar vazio após o submit
        valor.value = ""
        nome.value = ""
    }
    

    // **LocalStorage**
    const json = JSON.stringify(storage);
    localStorage.setItem("item" , json);
    
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
            if(item.mes === mesVig){
                totalDespesa += parseFloat(item.valor);
            }
        }
        else{
            listaReceita.appendChild(novoItem);
            if (item.mes === mesVig){
                totalReceita += parseFloat(item.valor);
            }
        }

        calculaTotal(totalReceita, totalDespesa) 
}


function calculaTotal(receita,despesa) {
    const remanescenteFormatado = receita - despesa;
    const despesaFormatado = despesa;

    mostraDespesa.innerHTML = despesaFormatado.toFixed(2);
    totalRemanescente.innerHTML =  remanescenteFormatado.toFixed(2)
}

botaoPrincipal.addEventListener('click' , () => {
    confirm('Você confirma que todos os dados estão corretos?')
})