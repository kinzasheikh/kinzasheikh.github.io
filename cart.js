const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total');

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
function displayCart() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    totalPriceElement.textContent = '0';
  } else {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(div);
      total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
  }
}

// Call function to display the cart
displayCart();
