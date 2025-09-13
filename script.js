// let cart = [];

// function addToCart(button) {

//     let productDiv = button.closest(".product");
//     let name = productDiv.querySelector(".product-name").innerText;
//     let price = productDiv.querySelector(".product-price").innerText;
//     let product = {
//         name: name,
//         price: price
//     };

//     cart.push(product);
//     displayCart();
// }

// function displayCart() {
//     let cartDiv = document.getElementById("cart-items");
//     cartDiv.innerHTML = "";

//     if (cart.length === 0) {
//         cartDiv.innerHTML = "<p>Cart is empty</p>";
//         return;
//     }

//     cart.forEach(item => {
//         let div = document.createElement("div");
//         div.classList.add("cart-item");
//         div.innerHTML = `${item.name} - Rs. ${item.price}`;
//         cartDiv.appendChild(div);
//     });
// }

let cart = [];

function addToCart(button) {
    let productDiv = button.closest(".item");

    if (!productDiv) {
        console.error("Product item not found!");
        return;
    }
    let name = productDiv.querySelector(".product-detail h3").innerText;
    let price = productDiv.querySelector(".new-price").innerText;

    let product = { name, price };
    cart.push(product);

    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ${item.price}</p>`;
    });
}
