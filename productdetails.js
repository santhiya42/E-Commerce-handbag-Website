 const selectedProduct = localStorage.getItem("selectedProduct");

const product = products.find(function(item) {
    return item.name === selectedProduct;
});

console.log(selectedProduct);
console.log(product);
const detailsContainer = document.getElementById("product-details");
detailsContainer.innerHTML = `
        <div class="product-page">

        <img src= "${product.image}" width="300">

        <h2>${product.name}</h2>

        <p>Price: $ ${product.price}</p>

        <p>Category: ${product.category}</p>

        <p>Stock: ${product.stock} available</p>

        <p>Color: ${product.color}</p>

        <p>Quality: ${product.quality}</p>

        <p>This is a very stylish and luxury bag.</p>

        <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
        Add to Cart
        </button>
        <button onclick="window.location.href='website.html'">
            Back to Home
        </button>

    </div>
`;