/* =================================
   RESTAURANT POS DASHBOARD
   Pure JavaScript Implementation
   ================================= */

/* =================================
   PRODUCT DATA
   Edit this array to modify the menu items
   ================================= */
const PRODUCTS = [
  // Lunch Items
  { id: 1, name: "Pasta Bolognese", description: "Delicious beef lasagna with double chili", price: 50.5, image: "https://picsum.photos/seed/1/200", category: "lunch", stock: 12 },
  { id: 2, name: "Spicy Fried Chicken", description: "Crispy spicy chicken", price: 45.7, image: "https://picsum.photos/seed/2/200", category: "lunch", stock: 12 },
  { id: 3, name: "Grilled Steak", description: "Juicy grilled steak", price: 80.0, image: "https://picsum.photos/seed/3/200", category: "lunch", stock: 6 },
  { id: 4, name: "Fish And Chips", description: "Classic battered fish and fries", price: 90.4, image: "https://picsum.photos/seed/4/200", category: "lunch", stock: 5 },
  { id: 5, name: "Beef Bourguignon", description: "Slow-cooked beef", price: 75.5, image: "https://picsum.photos/seed/5/200", category: "lunch", stock: 8 },
  { id: 6, name: "Spaghetti Carbonara", description: "Creamy carbonara", price: 35.3, image: "https://picsum.photos/seed/6/200", category: "lunch", stock: 10 },
  { id: 7, name: "Ratatouille", description: "Vegetable medley", price: 26.7, image: "https://picsum.photos/seed/7/200", category: "lunch", stock: 12 },
  { id: 8, name: "Kimchi Jjigae", description: "Spicy Korean stew", price: 45.7, image: "https://picsum.photos/seed/8/200", category: "lunch", stock: 7 },
  { id: 9, name: "Tofu Scramble", description: "Savory tofu mix", price: 85.6, image: "https://picsum.photos/seed/9/200", category: "lunch", stock: 4 },

  // Breakfast Items
  { id: 10, name: "Pancakes", description: "Fluffy pancakes", price: 15.5, image: "https://picsum.photos/seed/10/200", category: "breakfast", stock: 20 },
  { id: 11, name: "Omelette", description: "Three-egg omelette", price: 12.0, image: "https://picsum.photos/seed/11/200", category: "breakfast", stock: 15 },
  { id: 12, name: "French Toast", description: "Sweet french toast", price: 14.5, image: "https://picsum.photos/seed/12/200", category: "breakfast", stock: 10 },
  { id: 28, name: "Eggs Benedict", description: "Poached eggs with hollandaise", price: 18.0, image: "https://picsum.photos/seed/28/200", category: "breakfast", stock: 8 },
  { id: 29, name: "Breakfast Burrito", description: "Eggs, cheese, and sausage wrap", price: 13.5, image: "https://picsum.photos/seed/29/200", category: "breakfast", stock: 12 },

  // Dinner Items
  { id: 13, name: "Steak Dinner", description: "Full steak dinner", price: 120.0, image: "https://picsum.photos/seed/13/200", category: "dinner", stock: 3 },
  { id: 14, name: "Roast Chicken", description: "Herb roast chicken", price: 55.0, image: "https://picsum.photos/seed/14/200", category: "dinner", stock: 6 },
  { id: 15, name: "Salmon Fillet", description: "Pan-seared salmon", price: 65.5, image: "https://picsum.photos/seed/15/200", category: "dinner", stock: 5 },
  { id: 30, name: "Lobster Thermidor", description: "Luxury lobster dish", price: 89.0, image: "https://picsum.photos/seed/30/200", category: "dinner", stock: 2 },
  { id: 31, name: "Rack of Lamb", description: "Herb-crusted lamb", price: 78.5, image: "https://picsum.photos/seed/31/200", category: "dinner", stock: 4 },

  // Soup Items
  { id: 16, name: "Tomato Soup", description: "Warm tomato soup", price: 8.5, image: "https://picsum.photos/seed/16/200", category: "soup", stock: 25 },
  { id: 17, name: "Miso Soup", description: "Classic miso soup", price: 6.0, image: "https://picsum.photos/seed/17/200", category: "soup", stock: 30 },
  { id: 32, name: "Chicken Noodle", description: "Classic comfort soup", price: 9.0, image: "https://picsum.photos/seed/32/200", category: "soup", stock: 20 },
  { id: 33, name: "French Onion", description: "Rich onion soup with cheese", price: 11.5, image: "https://picsum.photos/seed/33/200", category: "soup", stock: 15 },

  // Desserts
  { id: 18, name: "Chocolate Cake", description: "Decadent chocolate cake", price: 9.5, image: "https://picsum.photos/seed/18/200", category: "desserts", stock: 18 },
  { id: 19, name: "Ice Cream Sundae", description: "Ice cream with toppings", price: 7.5, image: "https://picsum.photos/seed/19/200", category: "desserts", stock: 20 },
  { id: 20, name: "Fruit Tart", description: "Seasonal fruit tart", price: 6.5, image: "https://picsum.photos/seed/20/200", category: "desserts", stock: 10 },
  { id: 34, name: "Tiramisu", description: "Italian coffee dessert", price: 8.5, image: "https://picsum.photos/seed/34/200", category: "desserts", stock: 12 },

  // Side Dishes
  { id: 21, name: "Garlic Bread", description: "Toasted garlic bread", price: 4.5, image: "https://picsum.photos/seed/21/200", category: "side_dish", stock: 20 },
  { id: 22, name: "Mashed Potato", description: "Creamy mashed potatoes", price: 5.0, image: "https://picsum.photos/seed/22/200", category: "side_dish", stock: 15 },
  { id: 35, name: "Roasted Vegetables", description: "Seasonal roasted vegetables", price: 6.5, image: "https://picsum.photos/seed/35/200", category: "side_dish", stock: 18 },

  // Appetizers
  { id: 23, name: "Spring Rolls", description: "Vegetable spring rolls", price: 6.0, image: "https://picsum.photos/seed/23/200", category: "appetizer", stock: 12 },
  { id: 24, name: "Bruschetta", description: "Tomato bruschetta", price: 5.5, image: "https://picsum.photos/seed/24/200", category: "appetizer", stock: 10 },
  { id: 36, name: "Buffalo Wings", description: "Spicy chicken wings", price: 12.5, image: "https://picsum.photos/seed/36/200", category: "appetizer", stock: 15 },

  // Beverages
  { id: 25, name: "Iced Tea", description: "Refreshing iced tea", price: 3.5, image: "https://picsum.photos/seed/25/200", category: "beverages", stock: 30 },
  { id: 26, name: "Coffee", description: "Hot brewed coffee", price: 2.5, image: "https://picsum.photos/seed/26/200", category: "beverages", stock: 50 },
  { id: 27, name: "Orange Juice", description: "Fresh orange juice", price: 3.0, image: "https://picsum.photos/seed/27/200", category: "beverages", stock: 40 },
  { id: 37, name: "Smoothie Bowl", description: "Fresh fruit smoothie", price: 7.5, image: "https://picsum.photos/seed/37/200", category: "beverages", stock: 25 },
];

/* =================================
   CATEGORY CONFIGURATION
   Edit this to modify category display
   ================================= */
const CATEGORIES = {
  breakfast: { name: "Breakfast", icon: "🍳" },
  lunch: { name: "Lunch", icon: "🍽️" },
  dinner: { name: "Dinner", icon: "🌙" },
  soup: { name: "Soup", icon: "🍲" },
  desserts: { name: "Desserts", icon: "🧁" },
  side_dish: { name: "Side Dish", icon: "🥗" },
  appetizer: { name: "Appetizer", icon: "🥟" },
  beverages: { name: "Beverages", icon: "🥤" }
};

/* =================================
   APPLICATION STATE
   ================================= */
let state = {
  currentCategory: 'lunch',      // Currently selected category
  searchQuery: '',               // Current search term
  cart: {},                      // Cart items: { productId: { product, quantity } }
  paymentMethod: 'credit'        // Selected payment method
};

/* =================================
   CONSTANTS
   ================================= */
const TAX_RATE = 0.1; // 10% tax rate
const CART_STORAGE_KEY = 'pos-cart'; // localStorage key for cart persistence

/* =================================
   INITIALIZATION
   When the page loads, set up event listeners and render initial state
   ================================= */
document.addEventListener('DOMContentLoaded', function() {
  console.log('POS Dashboard initializing...');
  
  // Load cart from localStorage
  loadCartFromStorage();
  
  // Initialize all components
  initializeEventListeners();
  renderCategoryTabs();
  renderProducts();
  renderCart();
  updateMobileCartButton();
  
  console.log('POS Dashboard ready!');
});

/* =================================
   EVENT LISTENERS
   Set up all interactive elements
   ================================= */
function initializeEventListeners() {
  // Search input with debouncing
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
      announceToScreenReader(`Searching for ${state.searchQuery || 'all items'}`);
    }, 200); // 200ms debounce
  });

  // Mobile cart button
  document.getElementById('openCartBtn').addEventListener('click', openMobileCart);
  
  // Mobile cart close buttons
  document.getElementById('closeCartBtn').addEventListener('click', closeMobileCart);
  document.querySelector('.cart-panel-backdrop').addEventListener('click', closeMobileCart);
  
  // Place order buttons (desktop and mobile)
  document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
  document.getElementById('mobilePlaceOrderBtn').addEventListener('click', placeOrder);
  
  // Keyboard navigation for accessibility
  document.addEventListener('keydown', handleKeyboardNavigation);
}

/* =================================
   CATEGORY TAB RENDERING
   ================================= */
function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  container.innerHTML = '';
  
  Object.entries(CATEGORIES).forEach(([key, category], index) => {
    const productCount = PRODUCTS.filter(p => p.category === key).length;
    
    const tab = document.createElement('button');
    tab.className = `category-tab ${key === state.currentCategory ? 'active' : ''}`;
    tab.setAttribute('data-testid', `category-${key}`);
    tab.setAttribute('data-category', key);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', key === state.currentCategory);
    tab.setAttribute('tabindex', key === state.currentCategory ? '0' : '-1');
    
    tab.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <div class="category-name">${category.name}</div>
      <div class="category-count">${productCount} Menu${productCount !== 1 ? 's' : ''} In Stock</div>
    `;
    
    tab.addEventListener('click', () => selectCategory(key));
    container.appendChild(tab);
  });
}

/* =================================
   CATEGORY SELECTION
   ================================= */
function selectCategory(categoryKey) {
  if (state.currentCategory === categoryKey) return;
  
  state.currentCategory = categoryKey;
  state.searchQuery = ''; // Clear search when switching categories
  
  // Clear search input
  document.getElementById('searchInput').value = '';
  
  // Update category tabs
  renderCategoryTabs();
  
  // Update section title
  document.getElementById('sectionTitle').textContent = `${CATEGORIES[categoryKey].name} Menu`;
  
  // Re-render products
  renderProducts();
  
  // Announce to screen readers
  announceToScreenReader(`Switched to ${CATEGORIES[categoryKey].name} menu`);
}

/* =================================
   PRODUCT RENDERING
   ================================= */
function renderProducts() {
  const container = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  
  // Filter products by category and search
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = product.category === state.currentCategory;
    const matchesSearch = !state.searchQuery || 
      product.name.toLowerCase().startsWith(state.searchQuery);
    
    return matchesCategory && matchesSearch;
  });
  
  // Show/hide empty state
  if (filteredProducts.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  } else {
    container.style.display = 'grid';
    emptyState.style.display = 'none';
  }
  
  // Render product cards
  container.innerHTML = '';
  filteredProducts.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

/* =================================
   PRODUCT CARD CREATION
   ================================= */
function createProductCard(product) {
  const quantity = getQuantity(product.id);
  const isOutOfStock = product.stock === 0;
  const isMaxQuantity = quantity >= product.stock;
  
  const card = document.createElement('div');
  card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
  card.setAttribute('data-testid', `product-${product.id}`);
  
  card.innerHTML = `
    ${isOutOfStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
    
    <div class="product-header">
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        class="product-image"
        onerror="this.style.backgroundColor='var(--color-neutral-200)'; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjMyIiB5PSI0MCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🍽️PC90ZXh0Pgo8L3N2Zz4='"
      >
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
      </div>
    </div>
    
    <div class="product-footer">
      <div class="product-price">${formatMoney(product.price)}</div>
      <div class="quantity-controls">
        <button 
          class="quantity-btn minus" 
          ${quantity === 0 ? 'disabled' : ''}
          data-testid="minus-${product.id}"
          aria-label="Decrease quantity of ${product.name}"
          onclick="decrement(${product.id})"
        >-</button>
        <span class="quantity-display">${quantity}</span>
        <button 
          class="quantity-btn plus" 
          ${isOutOfStock || isMaxQuantity ? 'disabled' : ''}
          data-testid="plus-${product.id}"
          aria-label="Increase quantity of ${product.name}"
          onclick="addToCart(${product.id})"
        >+</button>
      </div>
    </div>
  `;
  
  return card;
}

/* =================================
   CART MANAGEMENT FUNCTIONS
   ================================= */

// Add item to cart or increment existing
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.stock === 0) return;
  
  const currentQuantity = getQuantity(productId);
  if (currentQuantity >= product.stock) {
    showToast('Maximum stock reached', `Only ${product.stock} ${product.name} available`, 'warning');
    return;
  }
  
  if (state.cart[productId]) {
    state.cart[productId].quantity += 1;
  } else {
    state.cart[productId] = {
      product: product,
      quantity: 1
    };
  }
  
  saveCartToStorage();
  renderProducts(); // Re-render to update quantity displays
  renderCart();
  updateMobileCartButton();
  
  // Accessibility announcement
  announceToScreenReader(`Added ${product.name}, quantity ${state.cart[productId].quantity}`);
}

// Increment quantity
function increment(productId) {
  addToCart(productId);
}

// Decrement quantity
function decrement(productId) {
  if (!state.cart[productId]) return;
  
  const product = state.cart[productId].product;
  
  if (state.cart[productId].quantity <= 1) {
    delete state.cart[productId];
    announceToScreenReader(`Removed ${product.name} from cart`);
  } else {
    state.cart[productId].quantity -= 1;
    announceToScreenReader(`Decreased ${product.name}, quantity ${state.cart[productId].quantity}`);
  }
  
  saveCartToStorage();
  renderProducts(); // Re-render to update quantity displays
  renderCart();
  updateMobileCartButton();
}

// Remove item completely from cart
function removeFromCart(productId) {
  if (!state.cart[productId]) return;
  
  const product = state.cart[productId].product;
  delete state.cart[productId];
  
  saveCartToStorage();
  renderProducts();
  renderCart();
  updateMobileCartButton();
  
  announceToScreenReader(`Removed ${product.name} from cart`);
}

// Get quantity of specific product in cart
function getQuantity(productId) {
  return state.cart[productId]?.quantity || 0;
}

// Get all cart items as array
function getCartItems() {
  return Object.values(state.cart);
}

// Calculate cart totals
function getCartTotals() {
  const subTotal = Object.values(state.cart).reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );
  const tax = subTotal * TAX_RATE;
  const total = subTotal + tax;
  
  return { subTotal, tax, total };
}

/* =================================
   CART RENDERING
   ================================= */
function renderCart() {
  renderDesktopCart();
  renderMobileCart();
}

function renderDesktopCart() {
  const cartItems = getCartItems();
  const container = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const countElement = document.getElementById('cartItemCount');
  
  // Update item count
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  countElement.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  
  // Show/hide empty state
  if (cartItems.length === 0) {
    emptyCart.style.display = 'block';
    container.querySelectorAll('.cart-item').forEach(item => item.remove());
  } else {
    emptyCart.style.display = 'none';
    
    // Clear existing items
    container.querySelectorAll('.cart-item').forEach(item => item.remove());
    
    // Render cart items
    cartItems.forEach(item => {
      const cartItem = createCartItem(item);
      container.appendChild(cartItem);
    });
  }
  
  // Update summary
  updateCartSummary();
  
  // Update payment methods
  updatePaymentMethods();
  
  // Update place order button
  updatePlaceOrderButton();
}

function renderMobileCart() {
  const cartItems = getCartItems();
  const container = document.getElementById('mobileCartItems');
  
  // Clear existing items
  container.innerHTML = '';
  
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
        <small>Add some delicious items from the menu</small>
      </div>
    `;
  } else {
    cartItems.forEach(item => {
      const cartItem = createCartItem(item, true);
      container.appendChild(cartItem);
    });
  }
  
  // Update mobile summary and payment methods
  updateMobileSummary();
  updateMobilePaymentMethods();
  updateMobilePlaceOrderButton();
}

function createCartItem(item, isMobile = false) {
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.setAttribute('data-testid', `cart-${item.product.id}`);
  
  cartItem.innerHTML = `
    <img 
      src="${item.product.image}" 
      alt="${item.product.name}" 
      class="cart-item-image"
      onerror="this.style.backgroundColor='var(--color-neutral-200)'; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjI0IiB5PSIzMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🍽️PC90ZXh0Pgo8L3N2Zz4='"
    >
    <div class="cart-item-info">
      <div class="cart-item-name">${item.product.name}</div>
      <div class="cart-item-note">Don't Add Vegetables</div>
    </div>
    <div class="cart-item-quantity">${item.quantity}x</div>
    <div class="cart-item-price">${formatMoney(item.product.price * item.quantity)}</div>
    <button 
      class="cart-item-remove" 
      onclick="removeFromCart(${item.product.id})"
      aria-label="Remove ${item.product.name} from cart"
    >✕</button>
  `;
  
  return cartItem;
}

function updateCartSummary() {
  const totals = getCartTotals();
  
  document.getElementById('subTotal').textContent = formatMoney(totals.subTotal);
  document.getElementById('tax').textContent = formatMoney(totals.tax);
  document.getElementById('total').textContent = formatMoney(totals.total);
}

function updateMobileSummary() {
  const totals = getCartTotals();
  const container = document.getElementById('mobileSummary');
  
  container.innerHTML = `
    <div class="summary-row">
      <span>Sub Total:</span>
      <span data-testid="subtotal">${formatMoney(totals.subTotal)}</span>
    </div>
    <div class="summary-row">
      <span>Tax (10%):</span>
      <span data-testid="tax">${formatMoney(totals.tax)}</span>
    </div>
    <div class="summary-row total">
      <span>Total Payment:</span>
      <span data-testid="total">${formatMoney(totals.total)}</span>
    </div>
  `;
}

function updatePaymentMethods() {
  const options = document.querySelectorAll('#paymentMethods .payment-option');
  options.forEach(option => {
    const method = option.getAttribute('data-method');
    option.className = `payment-option ${method === state.paymentMethod ? 'active' : ''}`;
    option.setAttribute('aria-selected', method === state.paymentMethod);
    
    option.onclick = () => setPaymentMethod(method);
  });
}

function updateMobilePaymentMethods() {
  const container = document.getElementById('mobilePaymentMethods');
  
  container.innerHTML = `
    <h4>Payment Method</h4>
    <div class="payment-options" role="radiogroup" aria-label="Payment method">
      <button class="payment-option ${state.paymentMethod === 'credit' ? 'active' : ''}" data-method="credit" onclick="setPaymentMethod('credit')">
        <span class="payment-icon">💳</span>
        <span>Credit Card</span>
      </button>
      <button class="payment-option ${state.paymentMethod === 'paylater' ? 'active' : ''}" data-method="paylater" onclick="setPaymentMethod('paylater')">
        <span class="payment-icon">⏳</span>
        <span>Pay Later</span>
      </button>
      <button class="payment-option ${state.paymentMethod === 'cash' ? 'active' : ''}" data-method="cash" onclick="setPaymentMethod('cash')">
        <span class="payment-icon">💵</span>
        <span>Cash</span>
      </button>
    </div>
  `;
}

function setPaymentMethod(method) {
  state.paymentMethod = method;
  updatePaymentMethods();
  updateMobilePaymentMethods();
  announceToScreenReader(`Payment method changed to ${method === 'credit' ? 'credit card' : method === 'paylater' ? 'pay later' : 'cash'}`);
}

function updatePlaceOrderButton() {
  const button = document.getElementById('placeOrderBtn');
  const hasItems = getCartItems().length > 0;
  
  button.disabled = !hasItems;
}

function updateMobilePlaceOrderButton() {
  const button = document.getElementById('mobilePlaceOrderBtn');
  const hasItems = getCartItems().length > 0;
  
  button.disabled = !hasItems;
}

/* =================================
   MOBILE CART FUNCTIONS
   ================================= */
function updateMobileCartButton() {
  const totalItems = getCartItems().reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById('mobileCartCount');
  const button = document.getElementById('openCartBtn');
  
  countElement.textContent = totalItems;
  
  if (totalItems > 0) {
    button.style.display = 'flex';
  } else {
    button.style.display = 'none';
  }
}

function openMobileCart() {
  const panel = document.getElementById('cartPanel');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  // Focus management for accessibility
  setTimeout(() => {
    document.getElementById('closeCartBtn').focus();
  }, 100);
}

function closeMobileCart() {
  const panel = document.getElementById('cartPanel');
  panel.classList.remove('open');
  document.body.style.overflow = '';
  
  // Return focus to the button that opened the cart
  document.getElementById('openCartBtn').focus();
}

/* =================================
   ORDER PLACEMENT
   ================================= */
function placeOrder() {
  const cartItems = getCartItems();
  if (cartItems.length === 0) return;
  
  const totals = getCartTotals();
  
  // Show success message
  showToast(
    'Order placed successfully!', 
    `Total: ${formatMoney(totals.total)} via ${state.paymentMethod === 'credit' ? 'Credit Card' : state.paymentMethod === 'paylater' ? 'Pay Later' : 'Cash'}`,
    'success'
  );
  
  // Clear cart
  state.cart = {};
  saveCartToStorage();
  
  // Close mobile cart if open
  closeMobileCart();
  
  // Re-render everything
  renderProducts();
  renderCart();
  updateMobileCartButton();
  
  // Announce to screen reader
  announceToScreenReader('Order placed successfully. Cart cleared.');
}

/* =================================
   PERSISTENCE (localStorage)
   ================================= */
function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
}

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      state.cart = JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    state.cart = {};
  }
}

/* =================================
   UTILITY FUNCTIONS
   ================================= */

// Format currency using Intl.NumberFormat
function formatMoney(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(amount);
}

// Show toast notification
function showToast(title, message = '', type = 'success') {
  const container = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconMap = {
    success: '✅',
    error: '❌',
    warning: '⚠️'
  };
  
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">${iconMap[type]}</div>
      <div class="toast-message">
        <div class="toast-title">${title}</div>
        ${message ? `<div class="toast-description">${message}</div>` : ''}
      </div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">✕</button>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 5000);
  
  // Remove on click
  toast.addEventListener('click', (e) => {
    if (e.target.classList.contains('toast-close')) {
      toast.remove();
    }
  });
}

// Announce to screen readers
function announceToScreenReader(message) {
  const ariaLive = document.getElementById('cartAriaLive');
  ariaLive.textContent = message;
  
  // Clear after announcement
  setTimeout(() => {
    ariaLive.textContent = '';
  }, 1000);
}

/* =================================
   KEYBOARD NAVIGATION
   For accessibility - arrow keys in category tabs
   ================================= */
function handleKeyboardNavigation(e) {
  // Only handle navigation in category tabs
  if (!e.target.classList.contains('category-tab')) return;
  
  const tabs = Array.from(document.querySelectorAll('.category-tab'));
  const currentIndex = tabs.indexOf(e.target);
  let newIndex;
  
  switch (e.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      break;
    case 'Home':
      e.preventDefault();
      newIndex = 0;
      break;
    case 'End':
      e.preventDefault();
      newIndex = tabs.length - 1;
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      e.target.click();
      return;
    default:
      return;
  }
  
  // Update tabindex and focus
  tabs.forEach((tab, index) => {
    tab.setAttribute('tabindex', index === newIndex ? '0' : '-1');
  });
  
  tabs[newIndex].focus();
}

/* =================================
   GLOBAL FUNCTION EXPORTS
   These functions need to be globally accessible for onclick handlers
   ================================= */
window.addToCart = addToCart;
window.increment = increment;
window.decrement = decrement;
window.removeFromCart = removeFromCart;
window.setPaymentMethod = setPaymentMethod;
window.openMobileCart = openMobileCart;
window.closeMobileCart = closeMobileCart;
window.placeOrder = placeOrder;