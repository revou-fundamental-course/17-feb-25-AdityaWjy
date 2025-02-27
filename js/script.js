// img slider logic

let currentSlide = 0;
const slides = document.querySelectorAll(".slides");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(() => changeSlide(1), 3000); // Auto-slide every 3 seconds

// Form validation logic
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    let isValid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Interest Validation
    let interest = document.getElementById("interest").value;
    let interestError = document.getElementById("interestError");
    if (interest === "") {
      interestError.textContent = "Please select an option.";
      isValid = false;
    } else {
      interestError.textContent = "";
    }

    // If validation fails, prevent form submission
    if (!isValid) {
      event.preventDefault();
    }
  });
