let seenLanding = false;
let pageLoaded = false;

document.addEventListener('DOMContentLoaded', function() {
    pageLoaded = true;

    let brandName = "AnTARES";
    let brandVision = "Exploring the frontiers of space and technology.";

    type({text: brandName, container: document.getElementById('animated-brand-name'), speed: 100, clear: true, next: function() {
        type({text: brandVision, container: document.getElementById('animated-brand-vision'), speed: 25, mistakeRate: 0.04, next: function() {
            document.getElementById('landing').classList.add('landing-image-active');
            if (!seenLanding) {document.getElementById('about').scrollIntoView({behavior: 'smooth'}); seenLanding = true;}
        }});
    }});
});

window.addEventListener('scroll', function() {
    let navBar = document.querySelector('.antares-navbar');
    let heroSection = document.getElementById('landing');
    // Check if we have scrolled past the landing section
    if(window.scrollY > heroSection.offsetHeight/2) {
        // Change header class to 'theme-light-nav'
        document.querySelector('header').classList.remove('theme-transparent-nav');
        document.querySelector('header').classList.add('theme-light-nav');
    } else {
        // Revert back to the original header theme
        document.querySelector('header').classList.remove('theme-light-nav');
        document.querySelector('header').classList.add('theme-transparent-nav');
    }

    // Set seenLanding to true if the user has scrolled past the top
    if(pageLoaded && window.scrollY > 0 && !seenLanding) {
        seenLanding = true;
    }
});