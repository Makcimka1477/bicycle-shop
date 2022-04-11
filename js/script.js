const burger = document.querySelector('.burger');
const list = document.querySelector('.header__list');


burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    list.classList.toggle('active');
})

