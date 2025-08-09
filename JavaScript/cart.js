// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 40, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 50, image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: 60, image: 'product5.jpg' },
    { id: 6, name: 'Product 6', price: 70, image: 'product6.jpg' },
    { id: 7, name: 'Product 7', price: 80, image: 'product7.jpg' },
    { id: 8, name: 'Product 8', price: 90, image: 'product8.jpg' },
    { id: 9, name: 'Product 9', price: 100, image: 'product9.jpg' },
    { id: 10, name: 'Product 10', price: 110, image: 'product10.jpg' },
    { id: 11, name: 'Product 11', price: 120, image: 'product11.jpg' },
    { id: 12, name: 'Product 12', price: 130, image: 'product12.jpg' },
    { id: 13, name: 'Product 13', price: 140, image: 'product13.jpg' },
    { id: 14, name: 'Product 14', price: 150, image: 'product14.jpg' },
    { id: 15, name: 'Product 15', price: 160, image: 'product15.jpg' },
    { id: 16, name: 'Product 16', price: 170, image: 'product16.jpg' },
    { id: 17, name: 'Product 17', price: 180, image: 'product17.jpg' },
    { id: 18, name: 'Product 18', price: 190, image: 'product18.jpg' },
    { id: 19, name: 'Product 19', price: 200, image: 'product19.jpg' },
    { id: 20, name: 'Product 20', price: 210, image: 'product20.jpg' },
    // Add more products as needed
];
// Function to add product to cart
function addToCart(product) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.dataset.id = product.id; // Store product ID in a data attribute
    cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50">
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <button onclick="removeFromCart(${product.id})">Remove</button>
    `;
    cartItems.appendChild(cartItem);
}

// Function to remove item from cart
function removeFromCart(productId) {
    const cartItems = document.getElementById('cart-items');
    const items = cartItems.getElementsByClassName('cart-item');
    for (let item of items) {
        if (parseInt(item.dataset.id) === productId) {
            cartItems.removeChild(item);
            break;
        }
    }
}
// Function to handle product search
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear existing products

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    
    if (filteredProducts.length === 0) {
        productsDiv.innerHTML = '<p>No products found.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}
// Event listener for search input
// Function to filter products by category
function filterProductsByCategory(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear existing products

    const filteredProducts = products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        productsDiv.innerHTML = '<p>No products found in this category.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
} 
// Event listener for category filter buttons
document.querySelectorAll('.category-filter').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterProductsByCategory(category);
    });
});
// Function to reset product display
function resetProductDisplay() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear existing products
    displayProducts(); // Re-display all products
} 
// Event listener for quantity change buttons
document.querySelectorAll('.quantity-change').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.dataset.id);
        const quantity = parseInt(button.dataset.quantity);
        changeProductQuantity(productId, quantity);
    });
});
// Function to apply discount code
function applyDiscountCode() {
    const discountCode = document.getElementById('discount-code').value;
    const totalDisplay = document.getElementById('total-price');
    let total = calculateTotal();

    if (discountCode === 'DISCOUNT10') {
        total *= 0.9; // Apply 10% discount
        alert('Discount applied!');
    } else {
        alert('Invalid discount code.');
    }

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
} 
document.getElementById('login-link').addEventListener('click', function() {
    const username = window.prompt('Enter your username:');
    const password = window.prompt('Enter your password:');

    // This is a placeholder for checking if the user exists
    const userExists = checkUserCredentials(username, password);

    if (userExists) {
        alert('Login successful!');
    } else {
        const register = window.confirm('User not found. Would you like to register?');
        if (register) {
            const existingEmail = window.prompt('Enter your Email to register:');
            if (!existingEmail) {
                alert('Registration cancelled.');
                return;
            }
            const existingPhone = window.prompt('Enter your phone number to register:');
            if (!existingPhone) {
                alert('Registration cancelled.');
                return;
            }

            const newUsername = window.prompt('Enter a username for registration:');
            if (!newUsername) {
                alert('Registration cancelled.');
                return;
            }
            const newPassword = window.prompt('Enter a password for registration:');
            if (!newPassword) {
                alert('Registration cancelled.');
                return;
            }
            // Here you would normally save the new user details to a database or data structure
            // For this example, we will just alert the user
            alert(`Registration successful for user: ${newUsername}`);
        }
    }
});

// Placeholder function for user credential check
function checkUserCredentials(username, password) {
    // This would normally involve checking a database or a data structure
    // For now, let's assume the user doesn't exist
    return false;
}
document.getElementById('search-link').addEventListener('click', function() {
    // Toggle the visibility of the search input
    const searchInput = window.prompt('Enter your search query:');
    if (!searchInput) {
        alert('Search cancelled.');
        return;
    }
    const searchInputElement = document.getElementById('search-input');
    if (!searchInputElement) {
        alert('Search input not found.');
        return;
    }
    if (searchInputElement.style.display === 'block') {
        searchInputElement.style.display = 'none';
    } else {
        searchInputElement.style.display = 'block';
        searchInputElement.focus();
    }
});
document.getElementById('search-button').addEventListener('click', function() {
    searchProducts();
});