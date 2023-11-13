const logFormInput = () => {
  // Get form values
  const firstName = document.querySelector('.first-name').value;
  const lastName = document.querySelector('.last-name').value;
  const email = document.querySelector('.email').value;
  const confirmEmail = document.querySelector('.confirm-email').value;
  const mobilenumber = document.querySelector('.mobilenumber').value;

  // Log the form input to the console
  console.log(firstName, lastName, email, confirmEmail, mobilenumber);
};

// Prevent default submit button behavior
const submitHandler = (event) => {
  event.preventDefault();

// Add an event listener to the button
document.querySelector('.submit-button').addEventListener('click', logFormInput);
};