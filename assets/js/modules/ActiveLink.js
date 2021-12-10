class ActiveLink {
    constructor() {
        this.links = document.querySelectorAll('.site-header__menu-link');
        this.urls = location.href.split('/');
        this.currentPage = this.urls[this.urls.length - 1];
        this.activate();
    }

    activate() {
        for (var i = 0; i < this.links.length; i++) {
            var pageLink = this.links[i].href.split("/");
            if (pageLink[pageLink.length - 1] == this.currentPage) {
                this.links[i].classList.add('site-header__menu-link--active');
            } else {
                this.links[i].classList.remove('site-header__menu-link--active');
            }
        }
    }
}