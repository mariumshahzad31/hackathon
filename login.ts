document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
  
      if (email && password) {
        alert(`Welcome back, ${email}!`);
        // Add logic for authentication or API integration here
      } else {
        alert("Please fill in all required fields.");
      }
    });
  });
  