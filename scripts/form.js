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

      if (currentYear) currentYear.innerHTML = manager.displayCopyYear();
      if (lastModified) lastModified.innerHTML = `Last modified: ${manager.displayLastModified()}`;

      populateProductDropdown();
      initializeReviewCount();
      setupReviewForm();
  }

  const products = [
      {
        id: 'fc-1888',
        name: "flux capacitor",
        averagerating: 4.5
      },
      {
        id: 'fc-2050',
        name: "power laces",
        averagerating: 4.7
      },
      {
        id: 'fs-1987',
        name: "time circuits",
        averagerating: 3.5
      },
      {
        id: 'ac-2000',
        name: "low voltage reactor",
        averagerating: 3.9
      },
      {
        id: 'jj-1969',
        name: "warp equalizer",
        averagerating: 5.0
      }
  ];

  function populateProductDropdown() {
      const productSelect = document.getElementById('productSelect');
      if (productSelect) {
          products.forEach(product => {
              const option = document.createElement('option');
              option.value = product.id;
              option.textContent = product.name;
              productSelect.appendChild(option);
          });
      }
  }

  function initializeReviewCount() {
      const reviewCount = localStorage.getItem('reviewCount') || 0;
      document.getElementById('reviewCount').textContent = `Reviews Completed: ${reviewCount}`;
  }

  function setupReviewForm() {
      const reviewForm = document.getElementById('reviewForm');
      reviewForm.addEventListener('submit', function(event) {
          event.preventDefault();
          saveReviewToLocalStorage();
          incrementReviewCount();
          reviewForm.submit();
      });
  }

  function saveReviewToLocalStorage() {
    const formData = new FormData(document.getElementById('reviewForm'));
    const review = {};
    formData.forEach((value, key) => {
        review[key] = value;
    });
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

  function incrementReviewCount() {
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount = parseInt(reviewCount) + 1;
      localStorage.setItem('reviewCount', reviewCount);
      document.getElementById('reviewCount').textContent = `Reviews Completed: ${reviewCount}`;
  }

  main();
});
