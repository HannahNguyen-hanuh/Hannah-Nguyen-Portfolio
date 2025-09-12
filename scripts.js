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


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

