const urlParams = new URLSearchParams(window.location.search);
const parcela = urlParams.get("parcela");
const total = urlParams.get("total");
const meses = urlParams.get("meses");

document.getElementById("valorParcela").textContent = `R$ ${Number(parcela).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
document.getElementById("valorFinal").textContent = `R$ ${Number(total).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
document.querySelector(".financiamento").textContent = `*Financiamento em ${meses} meses.`;

document.querySelector("button").addEventListener("click", () => {
    window.location.href = "index.html";
});