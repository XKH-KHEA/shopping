document.addEventListener("DOMContentLoaded", () => {
  const productDetails = document.getElementById("product-details");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetch(`https://khmer-shoping.onrender.com/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p><strong>Price:</strong> $${product.price}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <button id="buy-button">Buy Now</button>
                        <button id="add-cart">Add to Cart</button>
                    </div>
                `;
        productDetails.appendChild(productCard);

        const buyButton = document.getElementById("buy-button");
        buyButton.addEventListener("click", () => {
          alert("Product purchased!");
        });
        const addcart = document.getElementById("add-cart");
        addcart.addEventListener("click", () => {
          alert("Add to carted!");
        });
      })
      .catch((error) => console.error("Error:", error));
  } else {
    productDetails.innerHTML = "<p>Product not found.</p>";
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const productDetails = document.getElementById("product-details");

//     // Fetch product details (example product)
//     const product = {
//         name: "Sample Product",
//         description: "This is a sample product description.",
//         price: 19.99,
//         imageUrl: "http://example.com/image.jpg"
//     };

//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     productCard.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}">
//         <div class="product-details">
//             <h2>${product.name}</h2>
//             <p>${product.description}</p>
//             <p><strong>Price: $${product.price}</strong></p>
//         </div>
//     `;

//     productDetails.appendChild(productCard);
// });
