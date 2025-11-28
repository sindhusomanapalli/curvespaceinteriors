/* assets/script.js — small helpers & demo form handler */

document.addEventListener('DOMContentLoaded', function() {
    // set years in footers
    var year = new Date().getFullYear();
    ['yearIndex', 'yearAbout', 'yearServices', 'yearProjects', 'yearContact'].forEach(id => {
        var el = document.getElementById(id);
        if (el) el.textContent = year;
    });

    // highlight active nav link
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.navbar .nav-link');
    links.forEach(a => {
        if (a.getAttribute('href') === path) a.classList.add('active');
    });
});

// Demo contact form handler
function handleContactForm(e) {
    e.preventDefault();
    var status = document.getElementById('contactStatus');
    status.textContent = "Sending...";

    // simulate server send (replace with real endpoint or email API)
    setTimeout(function() {
        status.textContent = "Thanks! Your message has been received. We'll contact you within 48 hours.";
        e.target.reset();
    }, 900);

    return false;
}