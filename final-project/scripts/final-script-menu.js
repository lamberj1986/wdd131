document.addEventListener('DOMContentLoaded', function() {
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

    const menu = [
        {
            itemName: "Cinnamon Chip",
            type: "Bread",
            ingredients: "Enriched White Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Water, Cinnamon Chips (Sugar, Palm Oil, Cinnamon, Nonfat Dry Milk, and Soy Lecithin (an Emulsifier)), Honey, Yeast, Salt, Eggs, Sugar, Ground Cinnamon",
            servingCalories: 160,
            totalFat: 2.5,
            carbs: 31,
            fiber: 1,
            sugar: 10,
            protein: 3,
            imageURL: "images/cinnamon-chip.webp",
        },
        {
            itemName: "Dakota",
            type: "Bread",
            ingredients: "Fresh Ground 100% Whole Wheat Flour, Water, Honey, Sunflower Seeds, Pumpkin Seeds, Millet, Yeast, Sesame Seeds, Salt, Eggs",
            servingCalories: 170,
            totalFat: 5,
            carbs: 24,
            fiber: 4,
            sugar: 5,
            protein: 7,
            imageURL: "images/dakota.webp",
        },
        {
            itemName: "Farmhouse White",
            type: "Bread",
            ingredients: "Enriched White Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Water, Honey, Yeast, Salt, Eggs",
            servingCalories: 140,
            totalFat: 0,
            carbs: 31,
            fiber: 1,
            sugar: 5,
            protein: 4,
            imageURL: "images/farmhouse-white.webp",
        },
        {
            itemName: "Hi Five Fiber",
            type: "Bread",
            ingredients: "Fresh Ground 100% Whole Wheat Flour, Water, Honey, Flax Seeds, Millet, Oat Bran, Sunflower Seeds, Wheat Bran, Yeast, Salt, Eggs",
            servingCalories: 140,
            totalFat: 3,
            carbs: 24,
            fiber: 5,
            sugar: 5,
            protein: 6,
            imageURL: "images/hi5-fiber.webp",
        },
        {
            itemName: "Honey Whole Wheat",
            type: "Bread",
            ingredients: "Fresh Ground 100% Whole Wheat Flour, Water, Honey, Yeast, Salt, Eggs",
            servingCalories: 140,
            totalFat: 0.5,
            carbs: 27,
            fiber: 4,
            sugar: 6,
            protein: 6,
            imageURL: "images/honey-whole-wheat.webp",
        },
        {
            itemName: "Pumpernickle",
            type: "Bread",
            ingredients: "Fresh Ground 100% Whole Wheat Flour, Water, Rye Flour, Dark Rye Pumpernickel Meal, Molasses, Yeast, Caramel Color, Caraway Seeds, Salt, Eggs",
            servingCalories: 130,
            totalFat: 1,
            carbs: 25,
            fiber: 5,
            sugar: 2,
            protein: 5,
            imageURL: "images/pumpernickle.webp",
        },
        {
            itemName: "Peanut Butter & Jelly",
            type: "Sandwich",
            ingredients: "Honey Whole Wheat Bread (Fresh Ground 100% Whole Wheat Flour, Water, Honey, Yeast, Salt, Eggs), Jam (Red Raspberries, Sugar, Pectin Powder, Citric Acid, Calcium Citrate), Peanut Butter (Peanuts, Can Sugar, Palm Fruit Oil, Salt)",
            servingCalories: 650,
            totalFat: 23,
            carbs: 93,
            fiber: 11,
            sugar: 37,
            protein: 21,
            imageURL: "images/pb-and-jelly.webp",
        },
        {
            itemName: "Blondie",
            type: "Goodie",
            ingredients: "Brown Sugar, Enriched White Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Butter, Pecans, Eggs, White Chocolate Chips (Sugar, Non Fat Milk, Partially Hydrogenated Vegetable Oils (Palm Kernel Oil and Palm Oil), Refined Palm Kernel Oil, Cornstarch, Artificial Flavor, Salt and Soy Lecithin), Butterscotch Chips (Sugar, Palm Kernel and Palm Oils, Whey, Nonfat Milk, Natural Flavor, Added Color, Sunflower Lecithin and Vanilla), Pure Vanilla Extract (Water, Alcohol (35%), Organic Vanilla Bean Extractives), Baking Powder (Corn Starch, Sodium Bicarbonate, Sodium Aluminum Sulfate, Monocalcium Phosphate), Salt",
            servingCalories: 620,
            totalFat: 35,
            carbs: 70,
            fiber: 2,
            sugar: 46,
            protein: 7,
            imageURL: "images/blondie.webp",
            // final-project/images/blondie.webp
            // /Users/alischoolmac/Desktop/Jeff Stuff/BYU-I Course Work/Coding Classwork/wdd131/final-project/images/blondie.webp
        },
        {
            itemName: "Pumpkin Chocolate Chip Teacake",
            type: "Goodie",
            ingredients: "Pumpkin, Enriched White Flour (Wheat Flour, Malted Barley Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Sugar, Canola Oil, Eggs, Chocolate Chips (Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Dextrose) and Sunflower Lecithin), Salt, Ground Cinnamon, Baking Soda, Pure Vanilla Extract (Water, Alcohol (35%), Organic Vanilla Bean Extractives)), Baking Powder (Corn Starch, Sodium Bicarbonate, Sodium Aluminum Sulfate, Monocalcium Phosphate), Allspice",
            servingCalories: 190,
            totalFat: 9,
            carbs: 27,
            fiber: 1,
            sugar: 16,
            protein: 2,
            imageURL: "images/pumpkin-teacake.webp",
        },
        {
            itemName: "Savannah Bar with blueberries",
            type: "Goodie",
            ingredients: "Blueberries, Brown Sugar, Fresh Ground 100% Whole Wheat Flour, Butter, Oats, Coconut Coconut (Unsulfered Coconut), Eggs, Water, Salt, Baking Powder (Corn Starch, Sodium Bicarbonate, Sodium Aluminum Sulfate, Monocalcium Phosphate), Baking Soda",
            servingCalories: 1530,
            totalFat: 19,
            carbs: 85,
            fiber: 7,
            sugar: 54,
            protein: 8,
            imageURL: "images/savannah-bar.webp",
        },
        {
            itemName: "Turkey Goddess",
            type: "Sandwich",
            ingredients: "Honey Whole Wheat Bread (Fresh Ground 100% Whole Wheat Flour, Water, Honey, Yeast, Salt, Eggs), Turkey Breast (Turkey Breast, Turkey Broth, Salt, Dextrose, Potassium Lactate, Sodium Phosphate, Sodium Diacetate, Vegetable Oil), Tomatoes, Havarti Cheese (Pasteurizrd Cultured Milk and Cream, Salt, Enzymes, Annatto (color)), Avocado Goddess Dressing (Avocado, Mayonnaise (Soybean Oil, Water, Whole Eggs and Egg Yolks, Vinegar, Salt, Sugar, Lemon Juice, Calcium Disodium EDTA (Used to Protect Quality), Natural Flavors), Sour Cream (Grade A Cultured Cream), Onion, Parsley, Lemon Juice, Garlic, Basil, Anchovy Paste (Anchovies, Olive Oil, Salt, Vinegar), Kosher Salt, Black Pepper, Tarragon), Lettuce, Red Onion, Kosher Salt, Black Pepper",
            servingCalories: 630,
            totalFat: 25,
            carbs: 65,
            fiber: 10,
            sugar: 19,
            protein: 37,
            imageURL: "images/turkey-goddess.webp",
        }
    ]

    function renderMenu(filteredMenu) {
        const menuAlbumSection = document.getElementById("album");
        menuAlbumSection.innerHTML = "";

        filteredMenu.forEach((item) => {
            const menuCard = document.createElement("div");
            menuCard.classList.add("card");

            const menuImage = document.createElement("img");
            menuImage.src = item.imageURL;
            menuImage.alt = item.itemName;
            menuImage.loading = "lazy";
            menuImage.width = 125;
            menuImage.height = 75;

            menuCard.appendChild(menuImage);

            const menuInfo = document.createElement("div");
            menuInfo.classList.add("info");

            const itemName = document.createElement("h3");
            itemName.textContent = item.itemName;
            menuInfo.appendChild(itemName);

            const itemCalories = document.createElement("p");
            itemCalories.textContent = `Calories: ${item.servingCalories.toLocaleString()}`;
            menuInfo.appendChild(itemCalories);

            const fatAndCarbs = document.createElement("p");
            fatAndCarbs.textContent = `Fat: ${item.totalFat.toLocaleString()} | Carbs: ${item.carbs.toLocaleString()}`;
            menuInfo.appendChild(fatAndCarbs);

            const sugarAndProtien = document.createElement("p");
            sugarAndProtien.textContent = `Sugar: ${item.sugar.toLocaleString()} | Protien: ${item.protein.toLocaleString()}`;
            menuInfo.appendChild(sugarAndProtien);

            menuCard.appendChild(menuInfo);

            menuAlbumSection.appendChild(menuCard);
        });
    }

    function filteredMenu(type) {
        let filteredMenu;

        if (type === "bread") {
            filteredMenu = menu.filter(menu => menu.type = "Bread");
        } else if (type === "sandwich") {
            filteredMenu = menu.filter(menu => menu.type = "Sandwich");
        } else if (type === "goodie") {
            filteredMenu = menu.filter(menu => menu.type = "Goodie");
        } else if (type === "lowCal") {
            filteredMenu = menu.filter(menu => menu.servingCalories < 150);
        } else if (type === "highPro") {
            filteredMenu = menu.filter(menu => menu.protein > 20);
        } else if (type === "highFib") {
            filteredMenu = menu.filter(menu => menu.fiber > 5);
        } else {
            filteredMenu = menu;
        }

        renderMenu(filteredMenu);
    }

    // on page load, render the temples
    renderMenu(menu);

    // render temples when clicked on the nav links
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const type = link.id;

            // remove active class from all links
            document.querySelectorAll("nav a").forEach((navLink) => {
                navLink.classList.remove("active");
            });

            link.classList.add("active");

            filteredMenu(type);
        });
    });

    function pageTitle() {
        const pageTitleEl = document.getElementById('page-title');
        const activePageEl = document.querySelector('.active');

        pageTitleEl.textContent = activePageEl.textContent;
    }

    function main(){
        const manager = new DateManager();

        const menuBtn = document.querySelector('.menu-button');
        const navi = document.querySelector('.sub-nav');
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