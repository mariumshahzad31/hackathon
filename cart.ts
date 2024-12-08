let subtotal = 20890;

const bagIcon = document.getElementById("bag-icon") as HTMLElement;
const subtotalElement = document.getElementById("subtotal") as HTMLElement;
const totalElement = document.getElementById("total") as HTMLElement;

const updateCart = () => {
  subtotalElement.textContent = `₹ ${subtotal}`;
  totalElement.textContent = `₹ ${subtotal}`;
};

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productPrice = parseInt(
      (button as HTMLButtonElement).getAttribute("data-price") || "0"
    );
    subtotal += productPrice;
    updateCart();
    alert("Item added to the bag!");
  });
});
