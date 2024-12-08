document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart");
  
    if (addToCartButton) {
      addToCartButton.addEventListener("click", () => {
        alert("Nike Air Force 1 PLT.AF.ORM added to cart!");
        // Here, you could add further functionality, such as updating a cart UI or storing the cart data
      });
    }
  });
  