// Getting  the necessary elements from the DOM
const addToCartButton = document.querySelector('.cart-btn');
const cartIconPopUp=document.querySelector('.nav-menu-right');
const quantity=document.querySelector('.count');
const cartsmall=document.querySelector('.cart-quantity');
const cartIcon = document.getElementById('cart-icon');
const productName = document.querySelector('.heading');
const productAmount = document.querySelector('.discounted-price');
const quantityDisplay = document.querySelector('.cart-quantity');

// <--add to cart logic-->
addToCartButton.addEventListener('click', () => {
    // const cartQuantity = document.createElement('small');
    // cartQuantity.classList.add('cart-quantity');
    let count=parseInt(quantity.textContent);
    console.log(count);
    cartsmall.textContent=parseInt(quantity.textContent);
    if (count > 0) {
      cartsmall.style.display = 'block';
    } else {
      cartsmall.style.display = 'none';
    }
  });
// <--Cart On clicking add-to cart--a popup window appears -->
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
      cartOpen=!cartOpen;
      console.log(cartOpen + "kthhthstr")
    }
    else{
      // cartsmall.style.display='none';
      const notificationContent=document.createElement('div'); //when the cart is closed, we open it by creating the notification content
      notificationContent.classList.add('notification-content');
      notificationContent.textContent='Cart';
      
      const productImage = document.createElement('img');
      productImage.src = './images/image-product-1-thumbnail.jpg';
      productImage.alt = 'Product Image';
      notificationContent.appendChild(productImage);

      const emptyCart = document.createElement('p');
      emptyCart.textContent = 'Your cart is empty.';
      notificationContent.appendChild(emptyCart);

      const productTitle = document.createElement('p');
      productTitle.textContent = productName.textContent;
      notificationContent.appendChild(productTitle);

      const productPrice = document.createElement('p');
      productPrice.textContent = productAmount.textContent;
      notificationContent.appendChild(productPrice);
      

      const productQuantity = document.createElement('p');
      productQuantity.textContent = 'x ' + Number(quantityDisplay.textContent || 0);
      notificationContent.appendChild(productQuantity);

      console.log(productPrice,productQuantity,quantityDisplay.textContent);
      const totalAmount = document.createElement('strong');
      totalAmount.textContent = '$' + (parseInt(productPrice.textContent ||0) * parseInt(quantityDisplay.textContent ||0));
      notificationContent.appendChild(totalAmount);

      cartIconPopUp.appendChild(notificationContent);
      cartOpen=!cartOpen;
      console.log(cartOpen);
      
    }

  })

