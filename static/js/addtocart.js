// Getting  the necessary elements from the DOM
const addToCartButton = document.querySelector('.cart-btn');
const cartIconPopUp=document.querySelector('.nav-menu-right');
const quantity=document.querySelector('.count');
const cartsmall=document.querySelector('.cart-quantity');
const cartIcon = document.getElementById('cart-icon');
const productName = document.querySelector('.heading');
const productAmount = document.querySelector('.discounted-price');
const quantityDisplay = document.querySelector('.cart-quantity');
const mobileView = document.getElementById('ham-menu');
const closeMenu = document.getElementById('close-menu');

 
// <--add to cart logic-->
addToCartButton.addEventListener('click', () => {
    let count=parseInt(quantity.textContent);
    console.log(count);
    cartsmall.textContent=parseInt(quantity.textContent);
    if (count > 0) {
      cartsmall.style.display = 'block';
    } else {
      cartsmall.style.display = 'none';
    }
  });
  var cartOpen=false; // Variable to track if the cart is open or closed

  // Function to remove the notification content if it exists
  function removeNotificationContent(){
    const notificationContent=document.querySelector('.notification-content');
    if(notificationContent){
      notificationContent.remove();
    }
  }
  // To handle the cart icon when clicked
  cartIcon.addEventListener('click', () => {
    if(cartOpen){
      removeNotificationContent();
      // Toggling the cart state
      cartOpen=!cartOpen;
      console.log(cartOpen);
    }
    else{
      
      const notificationContent=document.createElement('div'); //when the cart is closed, we open it by creating the notification content
      notificationContent.classList.add('notification-content');

      // Cart Title
      const cartTitle = document.createElement('h2');
      cartTitle.textContent = 'Cart'; 
      notificationContent.appendChild(cartTitle);
      
      // To handle When the cart is empty
      const cartEmpty = document.createElement('div');
      cartEmpty.classList.add('cart-empty');
      cartEmpty.style.display = 'none';
      notificationContent.appendChild(cartEmpty);

      const emptyCart = document.createElement('p');
      emptyCart.textContent = 'Your cart is empty.';
      cartEmpty.appendChild(emptyCart);

      
      //Notification Details Div
      const notificationDetails = document.createElement('div');
      notificationDetails.classList.add('notification-details');
      notificationContent.appendChild(notificationDetails);

      // Product Image
      const productImage = document.createElement('img');
      productImage.src = './images/image-product-1-thumbnail.jpg';
      productImage.alt = 'Product Image';
      notificationDetails.appendChild(productImage);

      //Notification Product Details Div
      const notificationProdDetails = document.createElement('div');
      notificationProdDetails.classList.add('notification-prod-details');
      notificationDetails.appendChild(notificationProdDetails);

      //Product Title
      const productTitle = document.createElement('p');
      productTitle.textContent = productName.textContent;
      notificationProdDetails.appendChild(productTitle);

      //Notification Pricing Div
      const notificationPricing = document.createElement('div');
      notificationPricing.classList.add('notification-price');
      notificationProdDetails.appendChild(notificationPricing);

      //Product Price
      const productPrice = document.createElement('p');
      productPrice.textContent = productAmount.textContent;
      notificationPricing.appendChild(productPrice);

      //Product Quantity
      const productQuantity = document.createElement('p');
      productQuantity.textContent = 'x ' + quantityDisplay.textContent;
      notificationPricing.appendChild(productQuantity);

      //Total Amount 
      console.log(productPrice,productQuantity,quantityDisplay.textContent);
      const totalAmount = document.createElement('strong');
      totalAmount.textContent = '$' + (parseInt(productPrice.textContent ||0) * parseInt(quantityDisplay.textContent ||0));
      notificationPricing.appendChild(totalAmount);

      // Delete Icon
      const deleteIcon = document.createElement('img');
      deleteIcon.src = './images/icon-delete.svg';
      deleteIcon.alt = 'Delete Icon';
      deleteIcon.addEventListener('click', () => {
      notificationDetails.style.display = 'none';
      // checkoutButton.style.display = 'none';

      if (notificationDetails.style.display === 'none') {
        cartEmpty.style.display = 'flex';
      } else {
        notificationDetails.style.display = 'block';
        cartEmpty.style.display = 'none';
      }
    });
    notificationDetails.appendChild(deleteIcon);

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.addEventListener('click', () => {
    notificationContent.style.display = 'none';
    quantityDisplay.textContent = '0';
    });

    notificationContent.appendChild(checkoutButton);
  
    cartIconPopUp.appendChild(notificationContent);
    //Toggling the cart state
    cartOpen=!cartOpen;
    console.log(cartOpen);
    document.body.appendChild(notificationContent)
    }
  });

// Function to handle the mobile hamburger menu click and closing it
function MobileView() {
  mobileView.addEventListener('click', () => {
    const navMobileMenu = document.querySelector('.menu');
    navMobileMenu.style.display = 'block';
  
    document.getElementById('close-menu').addEventListener('click', () => {
      navMobileMenu.style.display = 'none';
    })
  
  })
}
MobileView();

