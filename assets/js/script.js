'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// Common modal variables
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal content variables
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");

// Service variables
const serviceItems = document.querySelectorAll("[data-service-item]");

// Function to toggle modal visibility
const toggleModal = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Function to set modal content and show
const showModal = function (item, titleData, textData) {
  modalTitle.innerHTML = item.querySelector(titleData).innerHTML;
  modalText.innerHTML = item.querySelector(textData).innerHTML;
  toggleModal();
}

// Add click events to testimonials items
testimonialsItems.forEach(item => {
  item.addEventListener("click", function () {
    showModal(this, "[data-testimonials-title]", "[data-testimonials-text]");
  });
});

// Add click events to service items
serviceItems.forEach(item => {
  item.addEventListener("click", function () {
    showModal(this, "[data-service-title]", "[data-service-text]");
  });
});

// Add click event to modal close button and overlay to close the modal
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const currentPage = this.innerHTML.toLowerCase();

    // Loop over pages to show/hide the correct one
    pages.forEach((page) => {
      if (currentPage === page.dataset.page) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Loop over navigation links to activate the correct one
    navigationLinks.forEach((navLink) => {
      if (navLink.innerHTML.toLowerCase() === currentPage) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});
