// Parte 1
const form = document.querySelector("form");
const valor = documente.getElementById("valor");
const banco = documente.getElementById("banco");
const meses = documente.getElementById("meses");

// Parte 2
const valorDaParcela = documente.getElementById("valorParcela");
const valorFinal = documente.getElementById("valorFinal");

// Juros

const jurosCaixa = 1.0487
const jurosSantander = 1.0567
const jurosBradesco = 1.0532
const jurosItau = 1.0519
const jurosNubank = 1.0595
const jurosInter = 1.0602

function formatCurrencyBRL(value) {
    value = value.tolocaleString("pt-BR", { style: "currency", currency: "BRL" });
    return value;

}

valor.addEventListener("input",() =>{
    const hasCaracter = /\D+/g;
    valor.value = valor.value.replace(hasCaracter, "");
})

valor.oninput = () => {
    let value = valor.value.replace(/\D/g, "");
    value = Number(value) / 100;
    valor.value = formatCurrencyBRL(value);
}

function calcularFinanciamento(valor, meses ,juros) {
    try{
        
        let valorParcela = formatCurrencyBRL((valor * juros) / (1 - (1 + juros)**-meses))

        let valorTotal = formatCurrencyBRL(meses * valorParcela)

        valorDaParcela.textContent = `R$ ${valorParcela.toFixed(2)}`;

        valorFinal.textContent = valorTotal;

    } catch{
        alert("Erro ao calcular o financiamento");
    }
}
    
function calcular() {
    
    if(banco.value === "caixa"){
        calcularFinanciamento(valor.value, meses.value, jurosCaixa);
    }
    else if(banco.value === "santander"){
        calcularFinanciamento(valor.value, meses.value, jurosSantander);
    }
    else if(banco.value === "bradesco"){
        calcularFinanciamento(valor.value, meses.value, jurosBradesco);
    }
    else if(banco.value === "itau"){
        calcularFinanciamento(valor.value, meses.value, jurosItau);
    }
    else if(banco.value === "nubank"){
        calcularFinanciamento(valor.value, meses.value, jurosNubank);
    }
    else if(banco.value === "inter"){
        calcularFinanciamento(valor.value, meses.value, jurosInter);
    }
    else{
        alert("Selecione um banco");
    }
}