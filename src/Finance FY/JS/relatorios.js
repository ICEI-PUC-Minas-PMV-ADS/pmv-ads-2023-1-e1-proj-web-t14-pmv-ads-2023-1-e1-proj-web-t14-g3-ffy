const itemStorage = JSON.parse(localStorage.getItem('item')); 
const totalStorage = JSON.parse(localStorage.getItem('total')); 

const formMes = document.querySelector('#mes');
const listaMesAtual = document.querySelector('#mesAtual');
const listaMesAnterior = document.querySelector('#mesAnterior');
const listaRealValor = document.querySelector('#realValor');
const listaIdealValor = document.querySelector('#idealValor');
const listaRitmo = document.querySelector('#listaRitmo');

var mesAtual = 0;
var mesAnterior = 0;

formMes.addEventListener('submit' , (evento => {
    evento.preventDefault()
    mesAtual = evento.target['mesAtual'].value;
    
    //zera todas as listas ao trocar de mês.
    listaMesAtual.innerHTML = ""
    listaMesAnterior.innerHTML = ""
    listaRealValor.innerHTML = ""
    listaIdealValor.innerHTML = ""
    listaRitmo.innerHTML = ""
    
    if (mesAtual === '1') {
        mesAnterior = '12';
    }
    else {
        mesAnterior = (parseInt(mesAtual) - 1).toString();
    }
    criaItem(itemStorage , mesAtual, listaMesAtual);
    criaItem(itemStorage , mesAnterior, listaMesAnterior);
    criaItem(totalStorage , mesAtual, listaRealValor);
    ritmo(listaRitmo);
}))

function criaItem (array , mesEsc , lista ) {
    
    //<li class="itemRelatorio itemContainer">Conta de agua<div class="reais">80</div></li>
    array.forEach(element => {
        
        if (element.mes === mesEsc) {
            if (element.tipo === 'despesa' || element.tipo === 'resgate'){
                constroiItem(element.valor , element.nome , lista )
            }
            if (element.tipo == undefined) {

                constroiItem(element.totalDespesa, "Despesas:", lista);
                constroiItem(element.economiaMen, "Economia/Investimentos:", lista);
                constroiItem(element.totalRem, "Remanescente:", lista);
                
                x50_30_20(element.totalReceita, listaIdealValor);
                
            }
        }
       
    });
}

function constroiItem(valor , nome , lista) {

    const listItem = document.createElement('li');
    const div = document.createElement('div');
    listItem.classList.add('itemRelatorio');
    listItem.classList.add('itemContainer');
    div.classList.add('reais');
    
    div.innerHTML = valor;
    listItem.innerHTML = nome;
    listItem.appendChild(div);

    lista.appendChild(listItem);
}

function x50_30_20(valor, lista) {
    
    constroiItem(valor*0.5, "Despesas:", lista);
    constroiItem(valor*0.3, "Economia/Investimento:", lista);
    constroiItem(valor*0.2, "Remanescente:", lista);
}


function ritmo(lista) {
    var ritmoRemanescente = 0;
    var ritmoDespesa = 0;
    var ritmoEconomia = 0;

    totalStorage.forEach(element => {
        ritmoRemanescente += parseFloat(element.totalRem);
        ritmoDespesa += parseFloat(element.totalDespesa);
        ritmoEconomia += parseFloat(element.economiaMen);
    })

    ritmoRemanescente = (ritmoRemanescente / totalStorage.length).toFixed(2);
    ritmoDespesa = (ritmoDespesa / totalStorage.length).toFixed(2);
    ritmoEconomia = (ritmoEconomia / totalStorage.length).toFixed(2);

    constroiItem(ritmoDespesa, "Despesas:", lista);
    constroiItem(ritmoEconomia, "Economia/Investimento:", lista);
    constroiItem(ritmoRemanescente, "Remanescente:", lista);    

}