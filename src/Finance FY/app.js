const formulario = document.querySelector('#formularioCad');
const botaoPrincipal = document.querySelector('#botaoPrincipal');
const listaDespesa = document.querySelector('#despesas');
const listaReceita = document.querySelector('#receitas');
const listaMes = document.querySelector('#listaMes');
const totalRemanescente = document.querySelector('#totalRemanescente');
const mostraDespesa = document.querySelector('#totalDespesa');

//Variáveis que guardam os campos preenchiveis
var valor;
var nome;

var mesVig = "";
var totalDespesa = 0;
var totalReceita = 0;

const storage = JSON.parse(localStorage.getItem('item')) || [];

listaMes.addEventListener('click' , (evento) => {
    mesVig = evento.target.value;

    listaDespesa.innerHTML = "";
    listaReceita.innerHTML = "";
    calculaTotal()

    //Imprime os itens iniciais. condicional verifica mes escolhido
    storage.forEach((element) =>{

        if(element.mes === mesVig){
            criaItem(element);
        }
    })
})

formulario.addEventListener('submit' , (evento) => {
    evento.preventDefault();
    
    valor = evento.target['valor'];
    nome = evento.target['nome'];
    const tipo = evento.target['tipo'];
    
    //construindo e adicionando o item
    const item = {
        "nome" : (nome.value).toUpperCase() ,
        "valor" : valor.value ,
        "tipo" : tipo.value,
        "mes" : mesVig
    }
    

    const procuraExistente = storage.find(element => element.nome === item.nome && element.mes === item.mes && element.tipo === item.tipo);
   
    if (item.valor === ""){
        alert("Valor inválido");
    }
    else if (item.nome === ""){
        alert("Nome inválido");
    }
    else if (item.mes === ""){
        alert("Favor selecionar um mês!");
    }
    else {
        if (procuraExistente){
            item.id = procuraExistente.id;
            atualizaItem(item);
        }
        else {
            item.id = storage[storage.length -1] ? (storage[storage.length -1]).id + 1 : 0; 
            
            criaItem(item);
            storage.push(item);
            calculaTotal();   
            //Fazendo o campo ficar vazio após o submit
            valor.value = "";
            nome.value = "";
        }
    }
    

    // **LocalStorage**
    const json = JSON.stringify(storage);
    localStorage.setItem("item" , json);
    
})

function criaItem(item) {

    //Essa função é responsável por criar o Elemento e por fazer o somatório do total acada loop.
        const novoItem = document.createElement('li');
        const divValor = document.createElement('div');

        divValor.dataset.id = item.id
        
        novoItem.classList.add("itemCadastrado");
        divValor.classList.add("reais");
        divValor.innerHTML = item.valor;
        novoItem.innerHTML += item.nome;
        novoItem.appendChild(divValor);
        novoItem.appendChild(botaoDelet(item.id));
        
        if (item.mes === mesVig){
            if(item.tipo === 'despesa'){
                listaDespesa.appendChild(novoItem);
                
            }
            else{
                listaReceita.appendChild(novoItem);
            }
        }
    }

    
function calculaTotal() {

    totalDespesa = 0;
    totalReceita = 0;
    totalRemanescente.innerHTML =  "";
    mostraDespesa.innerHTML = "";
    
    
    storage.forEach((element) => {
        
        if (element.mes === mesVig){
            if(element.tipo === 'despesa'){
                totalDespesa += parseFloat(element.valor);
            }
            else {
                totalReceita += parseFloat(element.valor);
            }
        }

        const remanescenteFormatado = totalReceita - totalDespesa;
        const despesaFormatado = totalDespesa;

        mostraDespesa.innerHTML = despesaFormatado.toFixed(2);
        totalRemanescente.innerHTML =  remanescenteFormatado.toFixed(2);
    })

}


function atualizaItem(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.valor;

    storage[storage.findIndex(elemento => elemento.id === item.id )] = item;
    const json = JSON.stringify(storage);
    localStorage.setItem("item" , json);

    calculaTotal()
    
    valor.value = "";
    nome.value = "";
}

botaoPrincipal.addEventListener('click' , () => {
    confirm('Você confirma que todos os dados estão corretos?');
})

function botaoDelet(id) {
    const botao = document.createElement('button');
    botao.classList.add('botaoDelet');
    botao.innerHTML = "Excluir";

    botao.addEventListener('click' , function() {
        deletaItem(this.parentNode , id);
    })

    return(botao)
}

function deletaItem(item, id) {
    item.remove();

    storage.splice(storage.findIndex(elemento => elemento.id === id) , 1);
    
    calculaTotal();
    
    const json = JSON.stringify(storage);
    localStorage.setItem("item" , json);
}