document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const cartItems = document.getElementById('cartItems');
    const proceedToPayBtn = document.getElementById('proceedToPayBtn');
    const cart = [];
 
    // Sample product data
    const products = [
        { name: 'iQOO 12', image: 'images/iQOO-12.webp', description: 'new product' },
        { name: 'ViVo IQOO 11', image: 'images/ViVo IQOO 11.webp', description: 'ViVo IQOO 11' },
        // Add more products as needed
    ];
 
    // Function to display products in the catalog
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
 
            const image = document.createElement('img');
            image.classList.add('product-image');
            image.src = product.image;
image.alt = product.name;
 
            const description = document.createElement('p');
            description.classList.add('product-description');
            description.textContent = product.description;
 
            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.classList.add('add-to-cart-btn');
            addToCartBtn.addEventListener('click', function() {
                addToCart(product);
            });
 
            productItem.appendChild(image);
            productItem.appendChild(description);
            productItem.appendChild(addToCartBtn);
 
            productList.appendChild(productItem);
        });
    }
 
    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }
 
    // Function to render cart items
    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
 
            const image = document.createElement('img');
            image.src = product.image;
image.alt = product.name;
 
            const productName = document.createElement('span');
productName.textContent = product.name;
 
            cartItem.appendChild(image);
            cartItem.appendChild(productName);
            cartItems.appendChild(cartItem);
        });
    }
 
    // Event listener for Proceed to Pay button
    proceedToPayBtn.addEventListener('click', function() {
        // Add logic to proceed to payment page
        console.log('Proceeding to pay...');
    });
 
    // Display products when the page loads
    displayProducts();
});
 