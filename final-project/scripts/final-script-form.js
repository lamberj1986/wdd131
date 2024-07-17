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
  
        setupReviewForm();
    }
  
    function setupReviewForm() {
        const reviewForm = document.getElementById('form');
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
            saveReviewToLocalStorage();
            reviewForm.submit();
        });
    }
  
    function saveReviewToLocalStorage() {
      const formData = new FormData(document.getElementById('form'));
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
  