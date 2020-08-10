function showMenu () {
    let trigger = document.querySelector('.header__burger'),
        menu = document.querySelector('.menu');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        trigger.classList.toggle('header__burger_active');
    })
    window.addEventListener('resize', () => {
            menu.classList.remove('menu_active');
            trigger.classList.remove('header__burger_active')
    })
};
export default showMenu;
