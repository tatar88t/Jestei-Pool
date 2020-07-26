function showMenu () {
    let trigger = document.querySelector('.header__burger'),
        menu = document.querySelector('.menu');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        trigger.classList.toggle('header__burger_active');
    })
};
export default showMenu;
