const searchBox = document.getElementById("search");
const productContainer = document.getElementById("product-container");


/* SEARCH */

if (searchBox) {

    searchBox.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const searchText = searchBox.value.toLowerCase();

            const filteredProducts = products.filter(function(product) {
                return product.name.toLowerCase().includes(searchText);
            });

            productContainer.innerHTML = "";

            filteredProducts.forEach(function(product) {

                productContainer.innerHTML += `
                    <div class="card">

                        <img src="${product.image}"
                             onclick="viewProduct('${product.name}')">

                        <h3 onclick="viewProduct('${product.name}')">
                            ${product.name}
                        </h3>

                        <p class="p1">$ ${product.price}</p>

                        <p>Stock: ${product.stock} available</p>

                        <p>Color: ${product.color}</p>

                        <p>Quality: ${product.quality}</p>

                        <button class="b1"
                            onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
                            Add to Cart
                        </button>

                    </div>
                `;

            });

        }

    });

}


/* CATEGORY */

function showcategory(categoryName) {

    const filteredProducts = products.filter(function(product) {
        return product.category === categoryName;
    });

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    filteredProducts.forEach(function(product) {

        container.innerHTML += `
            <div class="card">

                <img src="${product.image}"
                     onclick="viewProduct('${product.name}')">

                <h3 onclick="viewProduct('${product.name}')">
                    ${product.name}
                </h3>

                <p class="p1">$ ${product.price}</p>

                <p>Stock: ${product.stock} available</p>

                <p>Color: ${product.color}</p>

                <p>Quality: ${product.quality}</p>

                <button class="b1"
                    onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
                    Add to Cart
                </button>

            </div>
        `;

    });

}


/* SORT */

const sortPrice = document.getElementById("sortPrice");

if (sortPrice) {

    sortPrice.addEventListener("change", function() {

        if (sortPrice.value === "low") {

            products.sort(function(a, b) {
                return a.price - b.price;
            });

        } else if (sortPrice.value === "high") {

            products.sort(function(a, b) {
                return b.price - a.price;
            });

        }

        productContainer.innerHTML = "";

        products.forEach(function(product) {

            productContainer.innerHTML += `
                <div class="card">

                    <img src="${product.image}"
                         onclick="viewProduct('${product.name}')">

                    <h3 onclick="viewProduct('${product.name}')">
                        ${product.name}
                    </h3>

                    <p class="p1">$ ${product.price}</p>

                    <p>Stock: ${product.stock} available</p>

                    <p>Color: ${product.color}</p>

                    <p>Quality: ${product.quality}</p>

                    <button class="b1"
                        onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
                        Add to Cart
                    </button>

                </div>
            `;

        });

    });

}


/* ADD TO CART */

function addToCart(name, price, image) {

    const product = products.find(function(item) {
        return item.name === name;
    });

    if (product && product.stock > 0) {
        product.stock--;
    }

    if (product && product.stock === 0) {
        alert("Out of stock");
        return;
    }

  

    localStorage.setItem("cartName", name);
    localStorage.setItem("cartPrice", price);
    localStorage.setItem("cartImage", image);
    localStorage.setItem("cartQuantity", 1);

    window.location.href = "cart.html";
}

/* VIEW PRODUCT */

function viewProduct(name) {

    localStorage.setItem("selectedProduct", name);

    window.location.href = "productDetails.html";
}

/*login*/
function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    alert("Login successful!");
}
function removeWishlist() {

    document.querySelector(".list").innerHTML =
        "<p>Wishlist is empty</p>";

}
function headerCheckout() {

    localStorage.setItem("cartName", "Mini Bag");
    localStorage.setItem("cartPrice", 400);
    localStorage.setItem("cartImage", "Mini bag.png");
    localStorage.setItem("cartQuantity", 1);

    window.location.href = "cart.html";
}
function removeHeaderCart() {

    localStorage.removeItem("cartName");
    localStorage.removeItem("cartPrice");
    localStorage.removeItem("cartImage");
    localStorage.removeItem("cartQuantity");

    document.querySelector(".cont").innerHTML =
        "<p>Cart is empty</p>";
}
function shopNow() {
    document.getElementById("product-container").scrollIntoView({
        behavior: "smooth"
    });
}