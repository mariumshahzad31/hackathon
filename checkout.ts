const form = document.getElementById("checkout-form") as HTMLFormElement;
const continueButton = document.getElementById("continue-btn") as HTMLButtonElement;

continueButton.addEventListener("click", () => {
  if (form.checkValidity()) {
    alert("Order placed successfully!");
  } else {
    alert("Please fill out all required fields.");
  }
});
