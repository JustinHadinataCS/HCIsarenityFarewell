import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// Get all elements with the class 'liveToastBtn'
const toastTriggers = document.querySelectorAll('.liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTriggers.length > 0) {
  const toastBootstrap = new bootstrap.Toast(toastLiveExample);

  // Iterate over each button and add click event listener
  toastTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      toastBootstrap.show();
    });
  });
}

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
      <div>
      <p>${product.name}</p>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>



      <div class="product-spacer"></div>

      <button type="button" class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}" id="liveToastBtn">
        Add to Cart
      </button>
    </div>
  `;
});
let seconds = 0
document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  seconds = 0
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  button.addEventListener('click', () => {
    seconds = 0
    toastBootstrap.show()
  })
  });
document.querySelector('.toast-time');
setInterval(function() {
  seconds++
  document.querySelector('.toast-time').innerHTML = `${seconds} seconds ago`;
}, 1000);

const toastCart = document.getElementById('toastButton')
const toastSignReminder = document.getElementById('toastRemind')

if (toastCart) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastCart.addEventListener('click', () => {
    toastBootstrap.show()
  })
}