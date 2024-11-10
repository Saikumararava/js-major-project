document.addEventListener('DOMContentLoaded', () => {
  const cartCountElement = document.getElementById('cart-count');

  // Load cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  updateCartDisplay();

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      cart[productId] = (cart[productId] || 0) + 1;
      updateCartDisplay();
      saveCart();
    });
  });

  function updateCartDisplay() {
    let totalItems = 0;
    for (const count of Object.values(cart)) {
      totalItems += count;
    }
    cartCountElement.textContent = totalItems;

    // Update individual product item counts
    document.querySelectorAll('.item-count').forEach(span => {
      const productId = span.getAttribute('data-product-id');
      span.textContent = cart[productId] || 0;
    });
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});
