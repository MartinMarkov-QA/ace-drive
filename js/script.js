// Triggering header phone icon animation shake
let phone = document.querySelector('.telephone-icon');

setInterval(() => {
  phone.classList.remove('telephone-icon');
}, 2000);

setInterval(() => {
  phone.classList.add('telephone-icon');
}, 3000);
