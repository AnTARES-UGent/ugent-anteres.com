import { type } from './functional'

let seenLanding = false;
let pageLoaded = false;

document.addEventListener('DOMContentLoaded', async function() {
    pageLoaded = true;

    let brandName = "AnTARES";
    let brandVision = "Exploring the frontiers of space and technology.";

    let brandNameElement = document.createElement('h1');
    brandNameElement.id = 'animated-brand-name';
    brandNameElement.style.margin = 0;
    let brandVisionElement = document.createElement('div');
    brandVisionElement.id = 'animated-brand-vision';
    let landingContent = document.getElementById('landing-content');
    landingContent.appendChild(brandNameElement);
    landingContent.appendChild(brandVisionElement);

    await type({text: brandName, container: brandNameElement, speed: 100, mistakeRate: 0.01, clear: true});
    await new Promise(resolve => setTimeout(resolve, 500));
    await type({text: brandVision, container: brandVisionElement, speed: 25, mistakeRate: 0.01});

    landingContent.classList.add('fade-out');
    await new Promise(resolve => setTimeout(resolve, 2000));
    landingContent.classList.remove('fade-out');
    
    landingContent.innerHTML = '';
1
    // Background image
    let backgroundImageDiv = document.createElement('div');
    backgroundImageDiv.style.backgroundImage = 'url(/root/assets/nasa-landing.avif)';
    backgroundImageDiv.style.backgroundSize = 'cover';
    backgroundImageDiv.style.backgroundPosition = 'center';
    backgroundImageDiv.style.backgroundRepeat = 'no-repeat';
    backgroundImageDiv.style.position = 'absolute';
    backgroundImageDiv.style.top = '0';
    backgroundImageDiv.style.left = '0';
    backgroundImageDiv.style.opacity = '0.5';
    backgroundImageDiv.style.width = '100%';
    backgroundImageDiv.style.height = '100%';
    backgroundImageDiv.id = 'background-image';
    landingContent.appendChild(backgroundImageDiv);

    // Countdown timer
    let countdownTimer = document.createElement('div');
    countdownTimer.id = 'countdown-timer';
    countdownTimer.style.position = 'relative';
    countdownTimer.style.fontFamily = "'SF Mono', 'Courier New', 'Lucida Console', Monaco, monospace";
    landingContent.appendChild(countdownTimer);

    // Initialize countdown logic
    initializeCountdown('countdown-timer', '2024-12-31');

    landingContent.classList.add('fade-in');
    await new Promise(resolve => setTimeout(resolve, 2000));
    landingContent.classList.remove('fade-in');

    setTimeout(() => {
        if (!seenLanding) {document.getElementById('about').scrollIntoView({behavior: 'smooth'}); seenLanding = true;}
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const descriptions = [
        {
            title: "Vision",
            imgSrc: "/root/assets/nasa-about-vision.jpg",
            imgAlt: "Description 1",
            content: /*html*/`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non neque non elit imperdiet gravida a volutpat dui. Donec eu enim vitae nunc condimentum tincidunt in sit amet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eu maximus orci. Sed vel quam sed nulla varius suscipit et imperdiet odio.</p>`
        },
        {
            title: "Rocket",
            imgSrc: "/root/assets/nasa-about-rocket.jpg",
            imgAlt: "Description 1",
            content: /*html*/`<p>Etiam lacinia turpis eu nunc placerat, ac varius tortor sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel rhoncus felis. Donec tincidunt iaculis sapien dictum bibendum. Suspendisse sit amet vestibulum neque, eu sagittis justo.</p>`
        },
        {
            title: "Satellite",
            imgSrc: "/root/assets/nasa-about-sat.jpg",
            imgAlt: "Description 1",
            content: /*html*/`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis euismod lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac tempus neque. Morbi a elit vel risus ultricies pretium.</p>`
        },
        // Add more descriptions as needed
    ];

    let currentIndex = 0;
    const titleElement = document.getElementById('about-title');
    const imageElement = document.getElementById('about-image');
    const descriptionElement = document.getElementById('about-description');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    
    function updateButtonSize() {
        let titleHeight = document.getElementById('about-title').offsetHeight;
        prevButton.style.width = `${titleHeight}px`;
        prevButton.style.height = `${titleHeight}px`;
        nextButton.style.width = `${titleHeight}px`;
        nextButton.style.height = `${titleHeight}px`;
    }

    function updateContent() {
        const currentDescription = descriptions[currentIndex];
        titleElement.textContent = currentDescription.title;
        imageElement.src = currentDescription.imgSrc;
        imageElement.alt = currentDescription.imgAlt;
        descriptionElement.innerHTML = currentDescription.content;

        updateButtonSize();
    }
    
    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + descriptions.length) % descriptions.length;
        updateContent();
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % descriptions.length;
        updateContent();
    });

    window.addEventListener('resize', updateButtonSize);

    updateContent(); // Initialize with the first description
});

document.addEventListener('DOMContentLoaded', function() {
    // Customizing buttons
    let prevButton = document.getElementById('prev-btn');
    let nextButton = document.getElementById('next-btn');
    let titleHeight = document.getElementById('about-title').offsetHeight;

    const customizeButton = (button) => {
        button.style.width = `${titleHeight}px`;
        button.style.height = `${titleHeight}px`;
    };

    customizeButton(prevButton);
    customizeButton(nextButton);
});

function initializeCountdown(elementId, targetDate) {
    let countdownElement = document.getElementById(elementId);
    let target = new Date(targetDate);

    let updateCountdown = function() {
        let now = new Date();
        let timeLeft = target - now;

        // Calculate time components
        let years = target.getFullYear() - now.getFullYear();
        let months = target.getMonth() - now.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }

        // Adjust days for the current month
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        days -= years * 365;
        for (let i = 0; i < months; i++) {
            days -= new Date(now.getFullYear(), now.getMonth() + i + 1, 0).getDate();
        }

        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = years + " : " + months + " : " + days + " : " + hours + " : " + minutes + " : " + seconds;

        if (timeLeft < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Expired";
        }
    };

    // Update the countdown every second
    let timer = setInterval(updateCountdown, 1000);
    updateCountdown();
}

document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [];

    for (let i = 1; i <= 40; i++) {
        teamMembers.push({
            name: `John Doe ${i}`,
            roles: ["Engineer", "Designer"],
            imgSrc: `path-to-johns-image-${i}.jpg`,
            url: `http://path-to-johns-profile-${i}.com`
        });
    }
    
    const teamContainer = document.getElementById('team-members');

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('a');
        memberDiv.className = 'col-md-4 d-flex member-card';
        memberDiv.href = member.url;
        memberDiv.target = '_blank';

        const img = document.createElement('img');
        img.src = member.imgSrc;
        img.alt = member.name;
        img.className = 'img-fluid';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        const nameTag = document.createElement('h3');
        nameTag.textContent = member.name;

        const rolesList = document.createElement('div');
        rolesList.className = 'tags';
        member.roles.forEach(role => {
            const roleTag = document.createElement('span');
            roleTag.className = 'tag';
            roleTag.textContent = role;
            rolesList.appendChild(roleTag);
        });

        contentDiv.appendChild(nameTag);
        contentDiv.appendChild(rolesList);

        memberDiv.appendChild(img);
        memberDiv.appendChild(contentDiv);

        teamContainer.appendChild(memberDiv);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sponsors = [];

    for (let i = 1; i <= 40; i++) {
        sponsors.push({
            name: `Sponsor ${i}`,
            logoSrc: `path-to-sponsor${i}-logo.jpg`,
            url: `http://sponsor${i}.com`
        });
    }

    const sponsorContainer = document.getElementById('sponsor-container');

    sponsors.forEach(sponsor => {
        const sponsorDiv = document.createElement('a');
        sponsorDiv.className = 'col-md-4 sponsor-card';
        sponsorDiv.href = sponsor.url;
        sponsorDiv.target = '_blank';

        const img = document.createElement('img');
        img.src = sponsor.logoSrc;
        img.alt = sponsor.name;
        img.className = 'img-fluid';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'd-flex flex-column align-items-center justify-content-center w-100 content';

        const sponsorName = document.createElement('span');
        sponsorName.textContent = sponsor.name;

        contentDiv.appendChild(img);
        contentDiv.appendChild(sponsorName);

        sponsorDiv.appendChild(contentDiv);

        sponsorContainer.appendChild(sponsorDiv);
    });
});

function updateNavbarTheme() {
    let navBar = document.querySelector('.antares-navbar');
    let heroSection = document.getElementById('landing');

    if (window.scrollY > heroSection.offsetHeight / 2) {
        document.querySelector('header').classList.remove('theme-transparent-nav');
        document.querySelector('header').classList.add('theme-light-nav');
    } else {
        document.querySelector('header').classList.remove('theme-light-nav');
        document.querySelector('header').classList.add('theme-transparent-nav');
    }
}

window.addEventListener('scroll', function() {
    // Update the navbar theme
    updateNavbarTheme();

    // Additional scroll-specific logic
    if (pageLoaded && window.scrollY > 0 && !seenLanding) {
        seenLanding = true;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Call the function on page load
    updateNavbarTheme();
});

document.addEventListener('DOMContentLoaded', () => {
    addGradientsToScrollableDivs();
    observeDOMChanges();
});

function addGradientsToScrollableDivs() {
    const scrollableDivs = document.querySelectorAll('.scrollable');
    scrollableDivs.forEach(div => {
        updateGradientVisibility(div);
        div.addEventListener('scroll', () => updateGradientVisibility(div));
    });
}

function updateGradientVisibility(div) {
    const parent = div.parentNode;
    const isScrolledToTop = div.scrollTop === 0;
    const isScrolledToBottom = div.scrollHeight - div.clientHeight === div.scrollTop;

    // Top gradient
    let topGradient = parent.querySelector('.top-gradient');
    if (!isScrolledToTop) {
        if (!topGradient) {
            topGradient = document.createElement('div');
            topGradient.className = 'top-gradient';
            parent.appendChild(topGradient, div);
        }
    } else {
        if (topGradient) {
            parent.removeChild(topGradient);
        }
    }

    // Bottom gradient
    let bottomGradient = parent.querySelector('.bottom-gradient');
    if (!isScrolledToBottom) {
        if (!bottomGradient) {
            bottomGradient = document.createElement('div');
            bottomGradient.className = 'bottom-gradient';
            parent.appendChild(bottomGradient);
        }
    } else {
        if (bottomGradient) {
            parent.removeChild(bottomGradient);
        }
    }
}

function observeDOMChanges() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                addGradientsToScrollableDivs();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}