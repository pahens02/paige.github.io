'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// modal variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const serviceItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variables (without the avatar image)
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all testimonials items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    // Toggle modal visibility
    testimonialsModalFunc();
  });
}

// add click event to modal close button and overlay to close the modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


document.addEventListener("DOMContentLoaded", function() {
  const serviceItems = document.querySelectorAll(".service-item");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const skillInfo = {
    "data-viz": `
      <p>Relevant Experience:<br />
      Course Experience: Data Visualization with PowerBI<br />
      Taught By: Dexter Neeld<br />
      Work Experience: Web Developer<br />
      Context: Created web analytics dashboards</p>
    `,
    "software-dev": `
      <p>Relevant Experience:<br />
      Course Experience: Analytics Programming, Systems Development<br />
      Taught By: Andrew Wright, James Chrisman<br />
      Work Experience: Research Assistant, Student Tutor,Big Data Intern<br />
      Context: Developed python scripts for machine learning projects, tutored other students in python and programming concepts, developing bash and python scripts for ETL pipelines</p>
    `,
    "database-manage": `
      <p>Relevant Experience:<br />
      Course Experience: Systems Analysis and Design, Systems Development, Information Security<br />
      Taught By: Zara Hatami, James Chrisman, Andrew Wright<br />
      Work Experience: Big Data Intern<br />
      Context: Designing and implementing cataloging platforms for company databases</p>
    `,
    "data-arch": `
      <p>Relevant Experience:<br />
      Course Experience: Systems Analysis and Design, Systems Development<br />
      Taught By: Zara Hatami, James Chrisman<br />
      Work Experience: Big Data Intern<br />
      Context: Designing and implementing cataloging platforms for company databases, implementing Airflow for ETL management</p>
    `,
  };

  serviceItems.forEach(item => {
    item.addEventListener("click", function () {
      const skillKey = this.getAttribute("data-skill-key");
      modalTitle.innerHTML = this.querySelector(".service-item-title").innerHTML;
      modalText.innerHTML = skillInfo[skillKey] || "<p>No information available.</p>";

      modalContainer.classList.add("active");
      overlay.classList.add("active");
    });
  });

  modalCloseBtn.addEventListener("click", function() {
    modalContainer.classList.remove("active");
    overlay.classList.remove("active");
  });
  overlay.addEventListener("click", function() {
    modalContainer.classList.remove("active");
    overlay.classList.remove("active");
  });
});


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
