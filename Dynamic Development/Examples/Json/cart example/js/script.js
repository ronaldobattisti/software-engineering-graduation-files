var totalValue = [0, 0];
var valueP = [9.99, 20.90];
var qtd = [0, 0];

function addItem(item) {
    var quantity = document.getElementById('quant' + item);
    var total = document.getElementById('total' + item);
    qtd[item] += 1;
    totalValue[item] = Number.parseFloat(valueP[item]) * qtd[item];
    quantity.innerHTML = qtd[item];
    total.innerHTML = totalValue[item].toFixed(2);
    purchaseValue()
}

function removeItem(item) {
    if (qtd[item] > 0) {
        var quantity = document.getElementById('quant' + item);
        var total = document.getElementById('total' + item);
        qtd[item] -= 1;
        quantity.innerHTML = qtd[item];
        totalValue[item] = Number.parseFloat(valueP[item]) * qtd[item];
        total.innerHTML = totalValue[item].toFixed(2);
        purchaseValue()
    }
}

function purchaseValue() {
    var tValue = document.getElementById("totalValuePurchase");
    var value = 0;
    for (var i = 0; i < totalValue.length; i++) {
        value += totalValue[i];
    }
    tValue.innerHTML = value.toFixed(2);
}