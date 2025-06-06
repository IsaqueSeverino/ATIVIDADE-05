// Dados
const form = document.querySelector("form");
const valor = document.getElementById("Valor");
const banco = document.getElementById("banco");
const meses = document.getElementById("meses");

// Juros
const juros = {
    caixa: 1.0487,
    santander: 1.0567,
    bradesco: 1.0532,
    itau: 1.0519,
    nubank: 1.0595,
    inter: 1.0602
};

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    return value;

}

valor.oninput = () => {
    let value = valor.value.replace(/\D/g, "");
    value = Number(value) / 100;
    valor.value = formatCurrencyBRL(value);
}

function calcularFinanciamento(valor, meses, juros) {
    try {
        const jurosMensal = juros / 100;
        const valorParcela = (valor * jurosMensal) / (1 - Math.pow(1 + jurosMensal, -meses));

        const valorTotal = meses * valorParcela

        return {
            valorParcela: valorParcela,
            valorFinal: valorTotal
        };

    } catch {
        alert("Erro ao calcular o financiamento");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const bancoSelecionado = banco.value;
    const jurosSelecionado = juros[bancoSelecionado];

    if (!jurosSelecionado) {
        alert("Selecione um banco válido");
        return;
    }

    const valorNumerico = Number(valor.value.replace(/\D/g, "")) / 100;
    const numeroMeses = Number(meses.value);

     if (!valorNumerico || !numeroMeses) {
        alert("Preencha todos os campos corretamente");
        return;
    }

    const resultado = calcularFinanciamento(valorNumerico, numeroMeses, jurosSelecionado);

    if (!resultado) {
        alert("Erro no cálculo do financiamento");
        return;
    }

    const params = new URLSearchParams({
        parcela: resultado.valorParcela.toFixed(2),
        total: resultado.valorFinal.toFixed(2),
        meses: numeroMeses
    });

    window.location.href = "index2.html?" + params.toString();
});