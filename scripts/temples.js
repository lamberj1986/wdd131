class DateManager {
    lastModified;
    copyYear;

    constructor(){
        this.genCopyYear();
        this.genLastModified();
    }

    genCopyYear(){
        this.copyYear = new Date().getFullYear();
    }

    genLastModified(){
        this.lastModified = document.lastModified;
    }

    displayLastModified(){
        return this.lastModified.toString();
    }

    displayCopyYear(){
        return `${this.copyYear}`;
    }
}

class HamburgerMenu {
    btn;
    nav;

    constructor(buttonEl, navEl){
        this.btn = buttonEl;
        this.nav = navEl
    }

    setMenuListener(){
        //the .open class must be defined in the stylesheet.
        this.btn.addEventListener('click', () => {
            this.nav.classList.toggle('open');
            this.btn.classList.toggle('open');
        })
    }
}

function pageTitle(){
    const pageTitleEl = document.getElementById('page-title');
    const activePageEl = document.querySelector('.active');

    pageTitleEl.textContent = activePageEl.textContent;
}

function main() {
    const manager = new DateManager();

    const menuBtn = document.querySelector('.menu-btn');
    const navi = document.querySelector('.site-nav');
    const hamburger = new HamburgerMenu(menuBtn, navi);
    hamburger.setMenuListener();

    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');

    currentYear.innerHTML = manager.displayCopyYear();
    lastModified.innerHTML = `Last modified: ${manager.displayLastModified()}`;

    pageTitle();
}

main();