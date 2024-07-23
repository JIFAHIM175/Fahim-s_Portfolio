// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Interactive Skills Section
const skillIcons = document.querySelectorAll('.skills-grid .skill i');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Show a message when clicking on contact icons
const contactLinks = document.querySelectorAll('.contact-links a');

contactLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('You clicked on a contact link!');
    });
});
