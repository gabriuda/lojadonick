let precos = [];
for (let i = 0; i < 100; i++) {
    precos[i] = window.document.querySelectorAll('#preco')[i].innerHTML;
}

function precosMembro() {
    for (let i = 0; i < 100; i++) {
        window.document.querySelectorAll('#preco')[i].innerHTML = `${precos[i].toLocaleString('pt-BR', { minimumFractionDigits: 0})}`;
    }
}

function aplicarPromo(porcentagem) {
    for (let i = 0; i < 100; i++) {
        window.document.querySelectorAll('#preco')[i].innerHTML = `${precos[i].toLocaleString('pt-BR', { minimumFractionDigits: 0})}`;

        let precos2 = window.document.querySelectorAll('#preco')[i].innerHTML.replace('.','');

        window.document.querySelectorAll('#preco')[i].innerHTML = `<span class="preco-anterior">${precos[i]}</span>${(precos2 - ((porcentagem / 100) * precos2)).toLocaleString('pt-BR', { minimumFractionDigits: 0})}`;
    }
}