const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

burger.addEventListener("click", function showList() {
    list.classList.toggle('_active');
    burger.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});



