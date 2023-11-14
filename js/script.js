const form = document.querySelector('.customer-details')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const confirmEmail = document.querySelector('.confirm-email')
const mobilenumber = document.querySelector('.mobilenumber')

form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log('Firstname: ', firstName.value)
    console.log('Lastname: ', lastName.value)
    console.log('E-mail: ', email.value)
    console.log('Confirm e-mail: ', confirmEmail.value)
    console.log('Mobile number: ', mobilenumber.value)
});