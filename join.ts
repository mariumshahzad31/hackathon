const form = document.getElementById("signup-form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
  const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;

  if (!gender) {
    alert("Please select a gender");
    return;
  }

  console.log("Form Data:", { email, password, firstName, lastName, dob, gender });
  alert("Sign-up successful!");
});
