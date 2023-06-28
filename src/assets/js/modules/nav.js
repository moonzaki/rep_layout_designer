
function nav() {
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.header-burger');
    const navItems = document.querySelectorAll('.nav__list-item');
    const eventTypes = ['mouseenter', 'mouseleave', 'touchstart', 'touchend'];

    function hoverSubNav(event) {
        event.stopPropagation();
        if (window.innerWidth <= 768 && event.type == 'touchstart') {
            this.classList.add('nav__list-item--hover');
        } else if (window.innerWidth <= 768 && event.type == 'touchend') {
            this.classList.remove('nav__list-item--hover');
        } else if (window.innerWidth > 768 && event.type == 'mouseenter') {
            this.classList.add('nav__list-item--hover');
        } else if (window.innerWidth > 768 && event.type == 'mouseleave') {
            this.classList.remove('nav__list-item--hover');
        }
    };

    eventTypes.forEach(e => navItems.forEach(item => item.addEventListener(e, hoverSubNav)));

    function bodyScrollLock() {
        document.body.classList.toggle('scroll--lock');
    }

    function toggleNavMenu() {
        nav.style.transition = '0.3s';
        nav.classList.toggle('nav--open');
        let timer = setTimeout(() => {
            nav.style.transition = '0s';
            clearTimeout(timer);
        }, 100);
    }


    function burgerHandler(event) {
        event.stopPropagation();
        burger.classList.toggle('header-burger--hover');
        bodyScrollLock();
        toggleNavMenu();
    }


    burger.addEventListener('click', burgerHandler);
    window.addEventListener('resize', (event) => {
        if (nav.classList.contains('nav--open')) {
            burgerHandler(event);
        }
    });
}

export { nav };