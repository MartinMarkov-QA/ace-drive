// Dropdown menu show/hide on hover logic
let dropdownBtn = document.querySelector('.dropdown');
let dropdown_menu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('mouseenter', () => {
  dropdown_menu.style.display = 'inline-block';
})

dropdown_menu.addEventListener('mouseenter', () => {
  dropdown_menu.style.display = 'inline-block';
})

dropdownBtn.addEventListener('mouseleave', () => {
  dropdown_menu.style.display = 'none';
})

dropdown_menu.addEventListener('mouseleave', () => {
  dropdown_menu.style.display = 'none';
})
