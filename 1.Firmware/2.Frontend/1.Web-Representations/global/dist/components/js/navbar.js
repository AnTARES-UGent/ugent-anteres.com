// NavbarComponent.js
class NavbarComponent extends BaseComponent {
  initialize() {
    this.element.classList.add('navbar', 'navbar-expand-md', 'fixed-top');
    this.updateNavbarLayout();
    window.addEventListener('resize', () => this.updateNavbarLayout());
  }

  updateNavbarLayout() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 800) { // Small screen (phone)
      this.renderSmallScreenNavbar();
    } else if (screenWidth <= 1200) { // Normal screen (computer)
      this.renderNormalScreenNavbar();
    } else { // Huge screen (cinema)
      this.renderHugeScreenNavbar();
    }
  }

  renderSmallScreenNavbar() {
    // Render the navbar suitable for small screens without placeholder
    this.element.innerHTML = /*html*/`
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#sponsors">Sponsors</a></li>
            <li class="nav-item"><a class="nav-link" href="#join">Join</a></li>
            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
    `;
  }

  renderNormalScreenNavbar() {
    // Render the navbar suitable for normal screens
    this.element.innerHTML = /*html*/`
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#sponsors">Sponsors</a></li>
            <li class="nav-item"><a class="nav-link" href="#join">Join</a></li>
            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
          </ul>
        </div>
        <div class="navbar-brand-placeholder"></div>
      </div>
    `;
    this.addPlaceholderWidth();
  }

  renderHugeScreenNavbar() {
    // Render the navbar suitable for huge screens with more space between nav items
    this.element.innerHTML = /*html*/`
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#sponsors">Sponsors</a></li>
            <li class="nav-item"><a class="nav-link" href="#join">Join</a></li>
            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
          </ul>
        </div>
        <div class="navbar-brand-placeholder"></div>
      </div>
    `;
    this.addPlaceholderWidth();
  }

  addPlaceholderWidth() {
    const logo = this.element.querySelector('.navbar-brand');
    const placeholder = this.element.querySelector('.navbar-brand-placeholder');
  
    if (logo && placeholder) {
      // Get the computed style of the logo
      const logoStyle = window.getComputedStyle(logo);
  
      // Get the total width including margins
      const logoTotalWidth = logo.offsetWidth 
        + parseInt(logoStyle.marginLeft, 10) 
        + parseInt(logoStyle.marginRight, 10);
  
      // Set the placeholder width to match the logo's total width
      placeholder.style.width = `${logoTotalWidth}px`;
  
      // Call this function again when the window resizes to adjust the width dynamically
      window.addEventListener('resize', () => this.addPlaceholderWidth());
    }
  }  
}

// Assuming NavbarComponent.js is imported before this script
registry.registerComponent('antares-navbar', NavbarComponent);
