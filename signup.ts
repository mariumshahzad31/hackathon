const form = document.getElementById('signup-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
  const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
  const dob = (document.getElementById('dob') as HTMLInputElement).value;
  const country = (document.getElementById('country') as HTMLSelectElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || '';
  const emailUpdates = (document.getElementById('email-updates') as HTMLInputElement).checked;

  const user = {
    email,
    password,
    firstName,
    lastName,
    dob,
    country,
    gender,
    emailUpdates,
  };

  console.log('User Data:', user);

  // You can now send this data to a server or display a success message.
  alert('Thank you for signing up!');
});
