/**
 * scripts.js
 * Author: Hannah Nguyen
 * Description: JavaScript code for portfolio site
 */

// Your JavaScript code goes here

console.log('JavaScript file loaded.');

document.addEventListener('DOMContentLoaded', () => {
    const typingEl = document.querySelector('.typing-text');

    const words = [
        "Solving Problems",
        "Machine Learning",
        "Generative AI",
        "AI and Sustainability",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            // type forward
            typingEl.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                // finished typing the word — pause then begin deleting
                isDeleting = true;
                setTimeout(type, 1200);
                return;
            }
        } else {
            // deleting
            typingEl.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                // finished deleting — move to next word and start typing
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 300);
                return;
            }
        }

        const delay = isDeleting ? 50 : 100; // faster when deleting
        setTimeout(type, delay);
    }

    // kick it off
    type();
});


const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");

  const expanded = menuIcon.getAttribute("aria-expanded") === "true";
  menuIcon.setAttribute("aria-expanded", !expanded);
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    menuIcon.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in at least your name, email, and message!");
    return;
  }



  console.log({ name, email, phone, subject, message });
    form.reset();

  alert("Thank you! Your message has been submitted.");
});

