
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('products');

    // Fetch and display products
    fetch('https://khmer-shoping.onrender.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                const rating = 4;
                const stars = getStarRating(rating);
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p><strong>Price:</strong> $${product.price}</p>
                        <div class="star-rating">${stars}</div>
                    </div>
                `;
                productCard.addEventListener('click', () => {
                    window.location.href = `./page/buy-product.html?id=${product._id}`;
                });
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error:', error));
});

function getStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}
document.getElementById("account-link").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

document.getElementById("close-sidebar").onclick = function() {
    document.getElementById("sidebar").style.width = "0";
}
