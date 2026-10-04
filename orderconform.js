let name = localStorage.getItem("cartName");
let image = localStorage.getItem("cartImage");
let price = Number(localStorage.getItem("cartPrice"));

document.getElementById("order-product").innerText = name;
document.getElementById("order-image").src = image;

let quantity = localStorage.getItem("cartQuantity") || 1;

document.getElementById("order-quantity").innerText = quantity;

let total = price * quantity;

document.getElementById("order-total").innerText = total;

let payment = localStorage.getItem("paymentMethod");

document.getElementById("order-payment").innerText = payment;