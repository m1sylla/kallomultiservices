class MobileMenu {
    constructor() {
        this.menu = document.querySelector('.site-header__menu');
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.menuItem = document.querySelectorAll('site-header__menu-item');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.toggleTheClass(this.menu, 'site-header__menu--mobile');
        this.toggleTheClass(this.menuContent, 'site-header__menu-content--mobile');
        for (var i = 0; i < this.menuItem.length; i++) {
            this.toggleTheClass(this.menuItem[i], 'site-header__menu-item--mobile');
        }
    }

    toggleTheClass(element, className) {
        element.classList.toggle(className);
    }
}