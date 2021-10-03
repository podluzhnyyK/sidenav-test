
// меню
const btnNav = document.querySelector('.btn-menu');
const sidenav = document.querySelector('.sidenav');


btnNav.addEventListener('click', () => {
  sidenav.classList.toggle('sidenav-open');
});

// цвет

const checkboxBtn = document.querySelector('.switch-btn');
const body = document.querySelector('.body');

checkboxBtn.addEventListener('click', () => {
  if (checkboxBtn.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
