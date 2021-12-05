/*.site-header__menu-icon*/
class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__logo-image");
        console.log(this.menuIcon);
        this.menuIcon.addEventListener('click', function() {
            console.log("logo clicked");
        });
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu);
    }

    toggleTheMenu() {
        console.log("Hey");
    }
}
var mobileMenu = new MobileMenu();