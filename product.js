document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const backButton = document.getElementById('backButton');
    const wishlistButton = document.getElementById('wishlist');
    let wishlist = [];
    // Sample product data
    const products = [
        {
            name: 'Polka Dot',
            image: 'images/polka_dot.webp',
            description: 'Indoor Plant',
            features: '15 - 22 cm',
            Pot_Size: '4 inch diameter',
            Soil:'Coco Peat+Soil+Leca Balls+Charcoal',
            ratings: '4.5/5',
            cost: '$59'
        },
        {
            name: 'Snake plant',
            image: 'images/snake_plant.webp',
            description: 'Office Desk plant',
            features: 'small size',
            Pot_Size: '4 inch diameter',
            Soil:'Coco Peat+Soil+Leca Balls+Charcoal',
            ratings: '4.2/5',
            cost: '$50'
        },
        // Add more products as needed
        {
            name: 'Jade plant',
            image: 'images/jade_plant.webp',
            description: 'Indoor Plant',
            features: '15 - 22 cm',
            Pot_Size: '4 inch diameter',
            Soil:'Coco Peat+Soil+Leca Balls+Charcoal',
            ratings: '4.5/5',
            cost: '$99'
        },

        {
            name: 'lilly',
            image: 'images/lilly.webp',
            description: 'Indoor Plant, low-maintenance,perfect choice for first-time gardeners',
            features: '15 - 20 cm',
            Pot_Size: '4 inch diameter',
            Soil:'Soil+Coco Peat+Coco Chips',
            ratings: '4.5/5',
            cost: '$199'
        },

        {
            name: 'Bonsai Plant',
            image: 'images/bonsai_plant.webp',
            description: 'Indoor Plant',
            features: '15 - 22 cm',
            Pot_Size: '4 inch diameter',
            Soil :'Coco Peat+Soil+Leca Balls+Charcoal',
            ratings: '4.5/5',
            cost: '$99'
        },

        {
            name: 'Bamboo Plant',
            image: 'images/bamboo_plant.webp',
            description: 'Indoor Plant,  slow-growing plants but they can reach heights of up to 10 feet indoors.',
            features: '30 - 40 cm',
            Pot_Size: '5 inch diameter',
            Soil :'Coco Peat+Coco Chips+Soil',
            ratings: '4.5/5',
            cost: '$799'
        },
    ];
 
    // Function to display products in the catalog
    function displayProducts(productArray) {
        productList.innerHTML = '';
        productArray.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
 
            const image = document.createElement('img');
            image.classList.add('product-image');
            image.src = product.image;
image.alt = product.name;
 
            const description = document.createElement('p');
            description.classList.add('product-description');
            description.textContent = `
${product.name} - description: ${product.description} soil: ${product.Soil} - Pot_Size: ${product.Pot_Size} - Ratings: ${product.ratings} - Cost: ${product.cost} 
            `;
            /*const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.classList.add('add-to-cart-btn');
            addToCartBtn.addEventListener('click', function() {
                // Redirect to the Cart Page (Page 2)
                window.location.href = 'cart.html?productName=' + encodeURIComponent(product.name) + '&price=' + encodeURIComponent(product.cost)+ '&image=' + encodeURIComponent(product.image); // Replace 'cart.html' with the URL of your Cart Page
            }); */
            const addToWishlistBtn = document.createElement('button');
            addToWishlistBtn.textContent = 'Add to Wishlist';
            addToWishlistBtn.classList.add('add-to-wishlist-btn');
            addToWishlistBtn.addEventListener('click', function(){
                alert('Product added to wishlist!');
                wishlist.push({ name: product.name, image: product.image, price: product.cost });
            });
            productItem.appendChild(image);
            productItem.appendChild(description);
            //productItem.appendChild(addToCartBtn);
            productItem.appendChild(addToWishlistBtn);
 
            productList.appendChild(productItem);
        });
    }
 
    // Event listener for search button
    searchBtn.addEventListener('click', function() {
        const searchText = searchInput.value.toLowerCase();
const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
       
        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
        } else {
            productList.innerHTML = '<p>No products found.</p>';
backButton.style.display = 'inline'; // Show the back button
        }
    });
 
    // Event listener for back button
    backButton.addEventListener('click', function() {
        displayProducts(products); // Show all products again
backButton.style.display = 'none'; // Hide the back button
    });
    // Display all products when the page loads initially
    displayProducts(products);
 
 
    wishlistButton.addEventListener('click', function() {
        // Construct the URL with wishlist items as parameters
        let wishlistParams = encodeURIComponent(JSON.stringify(wishlist));
        let url = 'wishlist.html?wishlist=' + wishlistParams;
        // Navigate to the wishlist page
        window.location.href = url;
    });
});
document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});







old