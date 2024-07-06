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
            this.nav = navEl
        }

        setMenuListener() {
            // The .open class must be defined in the stylesheet.
            this.btn.addEventListener('click', () => {
                this.nav.classList.toggle('open');
                this.btn.classList.toggle('open');
            });
        }
    }

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
        {
            templeName: "Denver Colorado",
            location: "Denver, Colorado, United States",
            dedicated: "1986, October, 24",
            area: 27006,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"
        },
        {
            templeName: "Fort Collins Colorado",
            location: "Fort Collins, Colorado, United States",
            dedicated: "2016, October, 16",
            area: 42000,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/2018/400x250/Fort-Collins-Temple02.jpg"
        },
        {
            templeName: "Preston England",
            location: "Chorley, Lancashire, England",
            dedicated: "1998, June, 7",
            area: 69630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765114-wallpaper.jpg"
        }
      ];

      function renderTemples(filteredTemples) {
        const templesAlbumSection = document.getElementById("album");
        templesAlbumSection.innerHTML = "";
    
        filteredTemples.forEach((temple) => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("card");
    
            const templeImage = document.createElement("img");
            templeImage.src = temple.imageUrl;
            templeImage.alt = temple.templeName;
            templeImage.loading = "lazy";
            // add width and height attributes from url to improve performance
            let width = temple.imageUrl.split("/")[8].split("x")[0];
            let height = temple.imageUrl.split("/")[8].split("x")[1];
            templeImage.width = width;
            templeImage.height = height;
    
            templeCard.appendChild(templeImage);
    
            const templeInfo = document.createElement("div");
            templeInfo.classList.add("info");
    
            const templeName = document.createElement("h3");
            templeName.textContent = temple.templeName;
            templeInfo.appendChild(templeName);
    
            const templeLocation = document.createElement("p");
            templeLocation.textContent = temple.location;
            templeInfo.appendChild(templeLocation);
    
            const templeDedicated = document.createElement("p");
            templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
            templeInfo.appendChild(templeDedicated);
    
            const templeArea = document.createElement("p");
            templeArea.textContent = `Area: ${temple.area.toLocaleString()} sqft`;
            templeInfo.appendChild(templeArea);
    
            templeCard.appendChild(templeInfo);
    
            templesAlbumSection.appendChild(templeCard);
        });
    }
    
    // on page load, render the temples
    renderTemples(temples);
    
    // render temples when clicked on the nav links
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
            const type = link.id;
            let filteredTemples;
    
            // remove active class from all links
            document.querySelectorAll("nav a").forEach((navLink) => {
                navLink.classList.remove("active");
            });
    
            if (type === "old") {
                // filter temples built before 1900
                filteredTemples = temples.filter(temple => temple.dedicated.split(",")[0] < 1900);
                document.querySelector("#old").classList.add("active");
            } else if (type === "new") {
                // filter temples built after 2000
                filteredTemples = temples.filter(temple => temple.dedicated.split(",")[0] > 2000);
                document.querySelector("#new").classList.add("active");
            } else if (type === "large") {
                // filter temples larger than 90000 square feet
                filteredTemples = temples.filter(temple => temple.area > 90000);
                document.querySelector("#large").classList.add("active");
            } else if (type === "small") {
                // filter temples smaller than 10000 square feet
                filteredTemples = temples.filter(temple => temple.area < 10000);
                document.querySelector("#small").classList.add("active");
            } else {
                filteredTemples = temples;
                document.querySelector("#home").classList.add("active");
            }
    
            renderTemples(filteredTemples);
        });
    });

    function pageTitle() {
        const pageTitleEl = document.getElementById('page-title');
        const activePageEl = document.querySelector('.active');

        pageTitleEl.textContent = activePageEl.textContent;
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

        pageTitle();
    }

    main();
});