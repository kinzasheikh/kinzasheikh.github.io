// Check if the cart exists in localStorage, otherwise create an empty cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listeners to 'Add to Cart' buttons (assuming you're using class="add-to-cart")
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.getAttribute('data-name');
    const productPrice = parseFloat(e.target.getAttribute('data-price'));

    // Create the product object
    const product = {
      name: productName,
      price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Save the cart array to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    alert(`${productName} added to the cart!`);
  });
});

// Display cart on the cart page (this would be called on the 'cart.html' page)
function displayCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.getElementById('total');

  if (!cartItemsContainer) return;

  // Load the cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartItemsContainer.innerHTML = ''; // Clear any existing items

  let total = 0;

  // Loop through the cart and display each item
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(div);
    total += item.price;
  });

  // Update total price
  totalPriceElement.textContent = total.toFixed(2);
}

// Call displayCart when on the cart page
if (window.location.pathname.includes('cart.html')) {
  displayCart();
}

// Placeholder function for handling messages (for the messages page)
function handleMessages() {
  const sendMessageButton = document.querySelector('button');
  const messageInput = document.querySelector('textarea');

  if (!sendMessageButton || !messageInput) return;

  sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;

    if (message.trim() !== '') {
      // Here, you'd send the message to the server
      console.log('Message sent:', message);
      messageInput.value = ''; // Clear input after sending
    } else {
      alert('Please type a message');
    }
  });
}

// Call handleMessages when on the messages page
if (window.location.pathname.includes('messages.html')) {
  handleMessages();
}
