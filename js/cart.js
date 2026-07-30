// ===========================
// PHANTOM WRLD SHOPPING CART
// ===========================

let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartCount || !cartItems || !cartTotal) return;

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>$${item.price} × ${item.quantity}</p>
            </div>
        `;
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = "$" + totalPrice.toFixed(2);
}

function toggleCart() {

    const panel = document.getElementById("cart-panel");

    if (panel.classList.contains("open")) {
        panel.classList.remove("open");
    } else {
        panel.classList.add("open");
    }
}

