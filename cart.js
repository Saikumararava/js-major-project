document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const cartCountElement = document.getElementById('cart-count');

    // Load cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Update this object to match your products
    const productPrices = {
        "1": 16995,  // Air Jordan 1 Retro High OG
        "2": 7000,   // Nike Calm
        "3": 9995,   // Nike Motiva
        "4": 9995,   // Nike Motiva (duplicate, adjust if necessary)
        "5": 22995,  // Air Jordan 1 Retro High OG Red
        "6": 16995,  // Air Jordan 1 Retro High OG Gold
        "7": 12000,  // Nike Court Vision Low Next Nature
        "8": 6005    // Nike Offcourt Adjust
    };

    // Map product IDs to product names
    const productNames = {
        "1": "Air Jordan 1 Retro High OG",
        "2": "Nike Calm",
        "3": "Nike Motiva",
        "4": "Nike Motiva",
        "5": "Air Jordan 1 Retro High OG Red",
        "6": "Air Jordan 1 Retro High OG Gold",
        "7": "Nike Court Vision Low Next Nature",
        "8": "Nike Offcourt Adjust"
    };

    // Map product IDs to image filenames
    const productImages = {
        "1": "nb merc 1.png",
        "2": "nb merch 2.png",
        "3": "nb merch 3.png",
        "4": "nb1.png",
        "5": "nb2.png",
        "6": "nb3.png",
        "7": "nb4.png",
        "8": "puma 5.png"
    };

    function displayCartItems() {
        let totalAmount = 0;
        cartItemsContainer.innerHTML = ''; // Clear existing items

        for (const [productId, quantity] of Object.entries(cart)) {
            if (quantity > 0) {
                const price = productPrices[productId];
                const itemTotal = price * quantity;
                totalAmount += itemTotal;

                // Create cart item element
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${productImages[productId]}" alt="Product Image">
                    <div class="cart-item-details">
                        <h4>${productNames[productId]}</h4>
                        <p class="cart-item-price">Price: ₹ ${price.toLocaleString()}</p>
                        <span class="cart-item-quantity">Quantity: ${quantity}</span>
                    </div>
                    <div>Total: ₹ ${itemTotal.toLocaleString()}</div>
                    <button class="delete-button" data-product-id="${productId}">Remove One</button>
                `;

                cartItemsContainer.appendChild(cartItem);
            }
        }

        totalAmountElement.textContent = `₹ ${totalAmount.toLocaleString()}`;
        cartCountElement.textContent = Object.values(cart).reduce((a, b) => a + b, 0);
        
        // Add delete functionality
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                removeOneFromCart(productId);
            });
        });
    }

    function removeOneFromCart(productId) {
        if (cart[productId] > 1) {
            cart[productId]--; // Decrement the quantity
        } else {
            delete cart[productId]; // Remove the product if quantity is 0
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
        displayCartItems(); // Refresh the cart display
    }

    document.getElementById('proceed-button').addEventListener('click', () => {
        // Redirect to the Thank You page
        window.location.href = 'buy page.html'; // Make sure this page exists
    });

    displayCartItems();
});
