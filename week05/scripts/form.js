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

function main(){
    const manager = new DateManager();
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');

    currentYear.innerHTML = manager.displayCopyYear();
    lastModified.innerHTML = `Last modified: ${manager.displayLastModified()}`;
}

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

main();
});