function placeorder()
{
    let payment = document.getElementById("payment-method").value;

    if (payment === "Select Payment Method") {
        alert("Please select a payment method");
        return;
    }

    localStorage.setItem("paymentMethod", payment);

    alert("Order placed successfully");

    window.location.href = "orderconform.html";
}