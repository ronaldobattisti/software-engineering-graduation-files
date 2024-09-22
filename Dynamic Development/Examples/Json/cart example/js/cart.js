let cart = [];

function start() {
    fetch('https://fakestoreapi.com/products?limit=10')
        .then(response => response.json())
        .then(data => {
            fillCart(data);
        })
        .catch((error) => {
            console.log("An error has occured: " + error);
        })
}

function fillCart(products) {
    products.forEach(element => {
        addToCart(
            element.title,
            element.image,
            element.description,
            element.price
        )
    });

    updateCart();
}

function addToCart(name, img, description, price) {
    cart.push({
        "name": name,
        "image": img,
        "description": description,
        "price": Number.parseFloat(price),
        "quantity": 0,
        "total": 0.00
    })
}

function updateCart() {
    let cartHTML = document.getElementById("cart");
    cart.forEach((product, index) => {
        cartHTML.innerHTML +=
            `<div id='product${index}' class='d-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pt-2 pb-3 border-bottom mobile'>
                <div class='d-flex flex-row align-items-center'>
                    <div>
                        <img 
                            src='${product.image}' 
                            width='150' 
                            height='150'
                            id='image'
                        />
                    </div>
                    <div class='d-flex flex-column pl-md-4 pl-1'>
                        <div>
                            <h6>${product.name}</h6>
                        </div>
                    </div>
                </div>
                <div class='pl-md-2 pl-1'>
                    <b>$${product.price}</b>
                </div>
                <div class='pl-md-3 pl-2'>
                    <span class='fa fa-minus-square text-secondary' onclick='removeItem(${index})'></span>
                    <span class='px-md-3 px-1' id='quantity${index}'>
                        ${product.quantity}
                    </span>
                    <span class='fa fa-plus-square text-secondary' onclick='addItem(${index})'></span>
                </div>
                <div class='pl-md-0 pl-1'>
                    <b>$<span id='total${index}'>${product.total.toFixed(2)}</span></b>
                </div>
                <div class='close' onclick='removeProduct(${index})'></div>
            </div>`
    })
}

function addItem(item) {
    let qtd = document.getElementById('quantity' + item);
    let prod = cart[item];
    prod.quantity += 1;
    qtd.innerHTML = prod.quantity;
    updateNumbersScreen(item);
}

function removeItem(item) {
    let qtd = document.getElementById('quantity' + item);
    let prod = cart[item];
    if (prod.quantity > 0) {
        prod.quantity -= 1;
        qtd.innerHTML = prod.quantity;
        updateNumbersScreen(item);
    }
}

function updateNumbersScreen(qtd, item) {
    qtd.innerHTML = cart[item].quantity;
    updateTotalProduct(item);
    updateSubtotal();

}

function updateTotalProduct(item) {
    let total = document.getElementById('total' + item);
    let prod = cart[item];
    product.total = Number.parseFloat(product.quantity * product.price);
    total.innerHTML = product.total.toFixed(2);
}

function updateSubtotal() {
    let totalPurch = document.getElementById('totalPurchaseValue');
    let subtotal = 0;
    cart.forEach(product => {
        subtotal += product.quantity * product.price;
    })
    totalPurch.innerHTML = subtotal.toFixed(2);
}

function removeProduct(item) {
    let cartHTML = document.getElementById('cart');
    let product = document.getElementById('product' + item);

    if (confirm("Are you sure that want  to delet the product?")) {
        cart[item].quantity = 0;
        updateSubtotal();
        cartHTML.removeChild(product);

    }
}