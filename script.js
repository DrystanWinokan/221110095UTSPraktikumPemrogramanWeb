// Mendapatkan keranjang dari local storage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Menyimpan keranjang ke local storage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Menambah produk ke keranjang
function addToCart(productId) {
    const cart = getCart();
    const item = cart.find((item) => item.productId === productId);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    saveCart(cart);
    alert("Produk telah ditambahkan ke keranjang.");
}

// Menampilkan isi keranjang belanja
function displayCart() {
    const cart = getCart();
    const cartContainer = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Keranjang belanja kosong.</p>";
        return;
    }

    cart.forEach((item) => {
        cartContainer.innerHTML += `<p>Produk ${item.productId} - Kuantitas: ${item.quantity}</p>`;
    });
}

// Menampilkan keranjang saat halaman cart.html dimuat
if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
