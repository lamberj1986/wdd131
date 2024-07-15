document.addEventListener('DOMContentLoaded', function() {
    class DateManager {
        lastModified;
        copyYear;

        constructor() {
            this.genCopyYear();
            this.genLastModified();
        }

        genCopyYear() {
            this.copyYear = new Date().getFullYear();
        }

        genLastModified() {
            this.lastModified = document.lastModified;
        }

        displayLastModified() {
            return this.lastModified.toString();
        }

        displayCopyYear() {
            return `${this.copyYear}`;
        }
    }

    class HamburgerMenu {
        btn;
        nav;

        constructor(buttonEl, navEl) {
            this.btn = buttonEl;
            this.nav = navEl;
        }

        setMenuListener() {
            this.btn.addEventListener('click', () => {
                this.nav.classList.toggle('open');
                this.btn.classList.toggle('open');
            });
        }
    }

    function main() {
        const manager = new DateManager();

        const menuBtn = document.querySelector('.menu-button');
        const navi = document.querySelector('.site-nav');
        const hamburger = new HamburgerMenu(menuBtn, navi);
        hamburger.setMenuListener();

        const currentYear = document.getElementById('currentYear');
        const lastModified = document.getElementById('lastModified');

        currentYear.innerHTML = manager.displayCopyYear();
        lastModified.innerHTML = `Last modified: ${manager.displayLastModified()}`;
    }

    main();
});
